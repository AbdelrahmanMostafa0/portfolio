"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const MESSAGE_MAX = 2000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form) {
  const errors = {};
  if (!form.name.trim() || form.name.trim().length < 2) {
    errors.name = "name must be at least 2 characters";
  }
  if (!form.email.trim() || !EMAIL_RE.test(form.email.trim())) {
    errors.email = "please enter a valid email address";
  }
  if (!form.message.trim() || form.message.trim().length < 10) {
    errors.message = "message must be at least 10 characters";
  }
  if (form.message.trim().length > MESSAGE_MAX) {
    errors.message = `message must be under ${MESSAGE_MAX} characters`;
  }
  return errors;
}

const inputBase =
  "w-full px-4 py-2.5 rounded-xl border text-sm bg-white dark:bg-gray-900 dark:text-white outline-none transition-all focus:ring-2 placeholder:text-gray-400 dark:placeholder:text-gray-600";
const inputNormal =
  "border-gray-200 dark:border-gray-700 focus:ring-orange-300 dark:focus:ring-blue-500 focus:border-orange-400 dark:focus:border-blue-500";
const inputError =
  "border-red-400 dark:border-red-500 focus:ring-red-300 dark:focus:ring-red-500";

function FieldError({ msg }) {
  return (
    <AnimatePresence>
      {msg && (
        <motion.p
          key={msg}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.15 }}
          className="text-xs text-red-500 dark:text-red-400 mt-1"
        >
          {msg}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

function Spinner() {
  return (
    <svg
      className="w-4 h-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

const Contact = () => {
  const email = "abdelrahmanmostafa.developer@email.com";
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [serverError, setServerError] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    if (serverError) setServerError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setStatus("loading");
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setServerError(data.error || "something went wrong. please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setServerError("network error — please check your connection and try again.");
      setStatus("error");
    }
  };

  const reset = () => {
    setStatus("idle");
    setForm({ name: "", email: "", message: "" });
    setErrors({});
    setServerError("");
  };

  // ── Success screen ──────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-full flex flex-col items-center justify-center gap-5 py-16 text-center text-black dark:text-white"
      >
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
          className="w-20 h-20 rounded-full bg-orange-100 dark:bg-blue-900/40 flex items-center justify-center text-4xl shadow-inner"
        >
          ✉️
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="space-y-2"
        >
          <h2 className="text-2xl font-bold">message sent!</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs mx-auto">
            thanks for reaching out — i read every message and i'll get back to
            you soon ✨
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          onClick={reset}
          className="px-5 py-2 rounded-xl border border-orange-400 dark:border-blue-500 text-orange-500 dark:text-blue-400 text-sm font-medium hover:bg-orange-50 dark:hover:bg-blue-950/30 transition"
        >
          send another
        </motion.button>
      </motion.div>
    );
  }

  // ── Main form ───────────────────────────────────────────────────────────
  return (
    <div className="w-full space-y-5 text-black dark:text-white pb-4">
      {/* Illustration */}
      <div className="flex justify-center pt-2">
        <Image
          src="/contact-me.png"
          alt="contact illustration"
          width={200}
          height={200}
          priority
        />
      </div>

      {/* Heading */}
      <div className="text-center space-y-1">
        <p className="font-bold text-xl">let's make inbox magic happen ✨📩</p>
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
          questions, ideas, memes, secret pizza recipes — send&nbsp;'em my way!
          i read every message like it's a letter 🌊
        </p>
      </div>

      {/* Quick email shortcuts */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <a
          href={`mailto:${email}`}
          className="px-4 py-2 rounded-xl bg-orange-500 dark:bg-blue-500 text-white text-sm font-medium hover:opacity-90 active:scale-[0.97] transition"
        >
          open mail app
        </a>
        <div className="flex items-center gap-1.5 bg-gray-100 dark:bg-gray-800 rounded-xl px-3 py-2">
          <span className="font-mono text-xs line-clamp-1 max-w-40 md:max-w-fit text-gray-700 dark:text-gray-300">
            {email}
          </span>
          <button
            onClick={handleCopy}
            className="text-xs px-2 py-0.5 rounded-md bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition font-medium"
          >
            {copied ? "copied ✓" : "copy"}
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
        <span className="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap">
          or drop me a message below
        </span>
        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Name */}
        <div>
          <label
            htmlFor="cf-name"
            className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1"
          >
            name
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="your name"
            className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
          />
          <FieldError msg={errors.name} />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="cf-email"
            className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1"
          >
            email
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
          />
          <FieldError msg={errors.email} />
        </div>

        {/* Message */}
        <div>
          <div className="flex justify-between items-baseline mb-1">
            <label
              htmlFor="cf-message"
              className="text-sm font-medium text-gray-600 dark:text-gray-300"
            >
              message
            </label>
            <span
              className={`text-xs tabular-nums ${
                form.message.length > MESSAGE_MAX * 0.9
                  ? "text-red-400"
                  : "text-gray-400 dark:text-gray-500"
              }`}
            >
              {form.message.length}&nbsp;/&nbsp;{MESSAGE_MAX}
            </span>
          </div>
          <textarea
            id="cf-message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="what's on your mind?"
            className={`${inputBase} resize-none ${errors.message ? inputError : inputNormal}`}
          />
          <FieldError msg={errors.message} />
        </div>

        {/* Server error banner */}
        <AnimatePresence>
          {serverError && (
            <motion.div
              key="server-error"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="flex items-start gap-2 px-4 py-3 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm"
            >
              <span className="mt-px">⚠️</span>
              <span>{serverError}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-2.5 rounded-xl bg-orange-500 dark:bg-blue-500 text-white font-semibold text-sm hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm"
        >
          {status === "loading" ? (
            <>
              <Spinner />
              sending…
            </>
          ) : (
            "send message"
          )}
        </button>
      </form>
    </div>
  );
};

export default Contact;
