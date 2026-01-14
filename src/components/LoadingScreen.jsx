"use client";
import React, { useEffect, useState } from "react";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Header from "./Header";
const LoadingScreen = () => {
  const totalSteps = 100;
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= totalSteps) {
          clearInterval(interval);
          setFinished(true);
          return totalSteps;
        }
        return prev + 2;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);
  // const sarcasticStatuses = [
  //   "Warming up the pixels…",
  //   "Counting coffee beans…",
  //   "Aligning divs perfectly…",
  //   "Recalculating your awesomeness…",
  //   "Summoning frontend magic…",
  //   "Booting the sarcasm engine…",
  //   "Almost there, I swear…",
  // ];
  return (
    <AnimatePresence>
      {!finished && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute z-50 bg-white dark:bg-slate-900 grid place-content-center top-0 left-0 w-screen h-screen"
        >
          <div className="fixed top-0 dark:hidden left-0 w-full h-full bg-gradient-to-b from-blue-500 to-blue-300 opacity-50 z-0" />
          <div className="md:hidden bg-white dark:bg-slate-800  w-[90vw] max-w-[500px] h-96 z-10 gap-10 rounded-xl flex flex-col items-center justify-center  p-4">
            <HiMiniComputerDesktop className="text-[#424242] dark:text-white text-5xl" />
            <div className="space-y-4 flex flex-col items-center justify-center">
              <h2 className="text-4xl text-center text-[#424242] dark:text-white font-bold -mt-4">
                Warming up the pixels…
              </h2>
              <div className="relative flex items-center justify-center">
                <AiOutlineLoading3Quarters className="text-7xl text-orange-500 dark:text-blue-500 animate-spin" />
                <p className="absolute dark:text-white">{progress}%</p>
              </div>
              <p className="text-lg font-medium text-[#424242] dark:text-white ">
                Hang tight…
              </p>
            </div>
          </div>
          <div className="md:block hidden md:w-[600px] h-48 space-y-1">
            {/* Top bar */}
            <div className="h-10 rounded-t-lg bg-[#424242] flex justify-between items-center px-4 drop-shadow-xl">
              <p className="text-2xl font-bold text-white">loading…</p>
              <HiMiniComputerDesktop className="text-white text-2xl" />
            </div>

            {/* Content */}
            <div className="h-full w-full md:bg-white md:dark:bg-slate-800 rounded-b-xl drop-shadow-lg flex flex-col items-center justify-center space-y-4 p-4">
              <h2 className="text-4xl text-[#424242] dark:text-white font-bold -mt-4">
                Warming up the pixels…
              </h2>

              <div className="w-full max-w-[400px] bg-gray-200 dark:bg-slate-700 rounded-full h-4 overflow-hidden">
                <div
                  className="h-full rounded-full transition-width duration-75 ease-out bg-orange-500 dark:bg-blue-500"
                  style={{
                    width: `${progress}%`,
                    // backgroundColor: "#F97316",
                  }}
                />
              </div>

              <p className="text-lg font-medium dark:text-white">
                Cooking up your experience... {progress}%...
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
