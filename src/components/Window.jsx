"use client";
import { useRef } from "react";
import { motion, useDragControls } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import { cn } from "@/utils/cn";
import { useWindowsContext } from "@/context/WindowsContext";
const Window = ({
  containerRef,
  title,
  children,
  containerStyle,
  width = 700,
  height = 550,
}) => {
  const { removeWindow, pushToTop } = useWindowsContext();
  const controls = useDragControls();
  const closeWindow = () => removeWindow(title);
  const h = `h-[${height}px]`;
  const playSound = () => {
    const audio = new Audio("/sound/click.mp3");
    audio.play();
  };
  return (
    <motion.div
      drag
      dragControls={controls}
      dragMomentum={false}
      dragConstraints={containerRef}
      className={cn(
        `md:block hidden w-full z-10 space-y-[1px] absolute top-[15%] left-[30%] ml-5`,
        containerStyle
      )}
      exit={{ scale: 0.2 }}
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      onMouseDown={() => pushToTop(title)}
    >
      {/* Top bar */}
      <div
        // onClick={() => pushToTop(title)}

        className={`hidden md:flex h-14 items-center px-4 min-w-[${width}px] bg-[#424242] rounded-t-lg drop-shadow-md border justify-between `}
      >
        <p className="text-2xl font-bold text-white">{title || "home"}</p>{" "}
        <button
          onClick={() => {
            closeWindow();
            playSound();
          }}
          className="text-white gap-1 flex items-end font-bold"
        >
          [<IoCloseSharp />]
        </button>
      </div>

      {/* Main content */}
      <div
        className={cn(
          `custom-scrollbar 
      h-[550px] p-5 py-2 gap-10 flex flex-col justify-center items-center
          md:min-w-[${width}px] md:border-2 md:border-[#424242] md:border-opacity-35 md:bg-white md:dark:bg-slate-800 dark:text-white
          rounded-b-lg drop-shadow-xl overflow-auto
        `,
          `h-[${height}px]`
        )}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default Window;
