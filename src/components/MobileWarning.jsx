"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IoClose } from "react-icons/io5";

export default function MobileWarning() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      // Check if width is less than typical tablet/desktop breakpoint
      if (window.innerWidth < 768) {
        // defined via session storage so we don't nag them every refresh if they dismissed it?
        // Or just always show it until dismissed per session?
        // Let's use sessionStorage to persist the dismissal for the session.
        const dismissed = sessionStorage.getItem("mobile-warning-dismissed");
        if (!dismissed) {
          setIsVisible(true);
        }
      } else {
        setIsVisible(false); // Hide if they resize to desktop
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("mobile-warning-dismissed", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 z-50 flex items-center justify-between rounded-xl border border-white/10 bg-black/80 p-4 text-sm text-white shadow-2xl backdrop-blur-md md:hidden"
        >
          <div className="mr-4">
            <span className="font-bold text-yellow-500">Note: </span>
            The desktop experience is significantly better than the mobile
            experience on this site.
          </div>
          <button
            onClick={handleDismiss}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Dismiss warning"
          >
            <IoClose size={20} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
