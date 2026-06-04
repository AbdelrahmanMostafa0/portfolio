import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const OWNER_EMAIL = "abdelrahmanmostafa.developer@gmail.com";
const FROM_EMAIL = "Portfolio Contact <contact@mail.abdelrahmanmostafa.com>";

function buildTemplate({ name, email, message }) {
  const timestamp = new Date().toLocaleString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  const escaped = (str) =>
    str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Portfolio Message</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;min-height:100vh;">
    <tr>
      <td align="center" style="padding:48px 16px;">
        <table width="100%" style="max-width:560px;" cellpadding="0" cellspacing="0">

          <!-- Header -->
          <tr>
            <td style="padding-bottom:24px;">
              <img src="https://abdelrahmanmostafa.com/avatar-img.png"
                   alt="Abdelrahman Mostafa"
                   width="52" height="52"
                   style="display:block;border-radius:50%;object-fit:cover;margin-bottom:16px;border:2px solid #222;" />
              <p style="margin:0;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#555;">Portfolio</p>
              <h1 style="margin:8px 0 0;font-size:24px;font-weight:600;color:#f5f5f5;letter-spacing:-0.5px;">New message</h1>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background:#111;border:1px solid #222;border-radius:12px;overflow:hidden;">

              <!-- Field: Name -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:20px 24px 0;">
                    <p style="margin:0 0 4px;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#555;">From</p>
                    <p style="margin:0;font-size:16px;font-weight:500;color:#e5e5e5;">${escaped(name)}</p>
                  </td>
                </tr>

                <!-- Field: Email -->
                <tr>
                  <td style="padding:16px 24px 0;">
                    <p style="margin:0 0 4px;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#555;">Email</p>
                    <a href="mailto:${escaped(email)}" style="font-size:15px;color:#818cf8;text-decoration:none;">${escaped(email)}</a>
                  </td>
                </tr>

                <!-- Divider -->
                <tr>
                  <td style="padding:20px 24px 0;">
                    <div style="height:1px;background:#1e1e1e;"></div>
                  </td>
                </tr>

                <!-- Field: Message -->
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 10px;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#555;">Message</p>
                    <p style="margin:0;font-size:15px;line-height:1.7;color:#d4d4d4;white-space:pre-wrap;">${escaped(message)}</p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Reply CTA -->
          <tr>
            <td style="padding:24px 0 0;">
              <a href="mailto:${escaped(email)}?subject=Re: Your message&body=Hi ${escaped(name)},%0A%0A"
                 style="display:inline-block;background:#818cf8;color:#fff;font-size:14px;font-weight:500;text-decoration:none;padding:10px 20px;border-radius:8px;letter-spacing:0.2px;">
                Reply to ${escaped(name)}
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:32px 0 0;">
              <p style="margin:0;font-size:12px;color:#333;">${timestamp}</p>
              <p style="margin:4px 0 0;font-size:12px;color:#333;">Sent via your portfolio contact form</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function sendContactEmail({ name, email, message }) {
  await resend.emails.send({
    from: FROM_EMAIL,
    to: OWNER_EMAIL,
    reply_to: email,
    subject: `New message from ${name} — Portfolio`,
    html: buildTemplate({ name, email, message }),
  });
}
