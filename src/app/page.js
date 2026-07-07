"use client";
import { useEffect, useState } from "react";

const NEW_URL = "https://abdelrahmanmostafa.com";
const DELAY = 2000;

export default function Redirect() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / DELAY) * 100, 100);
      setProgress(pct);
      if (elapsed >= DELAY) {
        clearInterval(interval);
        window.location.replace(NEW_URL);
      }
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-slate-950 text-white">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-4">
        Portfolio has moved
      </p>
      <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-2">
        Abdelrahman Mostafa
      </h1>
      <p className="text-slate-400 text-sm mb-12">
        abdelrahmanmostafa.com
      </p>

      <div className="w-48 h-px bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-400 rounded-full transition-none"
          style={{ width: `${progress}%` }}
        />
      </div>

      <noscript>
        <meta httpEquiv="refresh" content={`${DELAY / 1000};url=${NEW_URL}`} />
        <p className="mt-8 text-slate-500 text-sm">
          Redirecting to{" "}
          <a href={NEW_URL} className="text-blue-400 underline">
            {NEW_URL}
          </a>
        </p>
      </noscript>
    </div>
  );
}
