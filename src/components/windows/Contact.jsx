"use client";
import Image from "next/image";
import { useState } from "react";

const Contact = () => {
  const email = "abdelrahmanmostafa.developer@email.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="w-full space-y-6 text-black dark:text-white">
      <div className="flex items-center gap-5 justify-center pt-4">
        <Image
          src="/contact-me.png"
          alt="avatar image"
          width={250}
          height={250}
        />
      </div>

      <p className="text-center mx-auto text-lg">
        <span className="font-semibold text-xl">
          let’s make inbox magic happen ✨📩
        </span>
        <br />
        got something cool to say? questions, ideas, memes, secret pizza recipes
        — send 'em my way! i read every email like it’s a message in a bottle 🌊
      </p>

      <div className="flex flex-col items-center gap-3">
        <a
          href={`mailto:${email}`}
          className="px-4 py-2 bg-orange-500 dark:bg-blue-500 text-white rounded-lg"
        >
          send me an email!
        </a>

        <div className="flex items-center gap-2 justify-center max-w-full mx-auto">
          <span className="font-mono text-sm line-clamp-1 max-w-[70%] md:max-w-fit bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded ">
            {email}
          </span>
          <button
            onClick={handleCopy}
            className="px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded text-sm hover:bg-gray-400 dark:hover:bg-gray-600 transition"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
