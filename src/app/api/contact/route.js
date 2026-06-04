import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { rateLimit } from "@/lib/ratelimit";
import { sendContactEmail } from "@/lib/email";

const NAME_MIN = 2;
const MESSAGE_MIN = 10;
const MESSAGE_MAX = 2000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  // ── Rate limiting ────────────────────────────────────────────────────────
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const { allowed, retryAfter } = rateLimit(ip, 3, 15 * 60 * 1000);

  if (!allowed) {
    const minutes = Math.ceil(retryAfter / 60);
    return NextResponse.json(
      { error: `Too many requests. Please try again in ${minutes} minute${minutes !== 1 ? "s" : ""}.` },
      { status: 429, headers: { "Retry-After": String(retryAfter) } }
    );
  }

  // ── Parse body ───────────────────────────────────────────────────────────
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim().toLowerCase() ?? "";
  const message = body.message?.trim() ?? "";

  // ── Validation ───────────────────────────────────────────────────────────
  if (!name || !email || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }
  if (name.length < NAME_MIN) {
    return NextResponse.json({ error: `Name must be at least ${NAME_MIN} characters.` }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (message.length < MESSAGE_MIN) {
    return NextResponse.json({ error: `Message must be at least ${MESSAGE_MIN} characters.` }, { status: 400 });
  }
  if (message.length > MESSAGE_MAX) {
    return NextResponse.json({ error: `Message must be under ${MESSAGE_MAX} characters.` }, { status: 400 });
  }

  // ── Persist to MongoDB ───────────────────────────────────────────────────
  try {
    const client = await clientPromise;
    const db = client.db("portfolio");
    await db.collection("contacts").insertOne({
      name,
      email,
      message,
      ip,
      createdAt: new Date(),
    });

    try {
      await sendContactEmail({ name, email, message });
    } catch (emailErr) {
      console.error("[contact] Email send failed:", emailErr);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[contact] MongoDB error:", err);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again later." },
      { status: 500 }
    );
  }
}
