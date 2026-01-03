"use client";
import Image from "next/image";
import { useWindowsContext } from "@/context/WindowsContext";

const SectionButton = ({ label, icon, width }) => {
  const { windows, addWindow } = useWindowsContext();
  const openWindow = () => {
    const audio = new Audio("/sound/click.mp3");

    if (windows.includes(label)) {
      return;
    } else {
      audio.play().catch((e) => console.error("Audio play failed", e));
      addWindow(label);
    }
  };
  const w = width || 80;
  return (
    <button
      onClick={openWindow}
      aria-label={`Open ${label} window`}
      className="flex flex-col items-center space-y-2 text-center group active:scale-95 text-foreground bg-black/5 dark:bg-white/10 md:bg-transparent md:dark:bg-transparent p-5 px-7 md:px-0 md:p-0 rounded-lg"
    >
      <Image
        src={icon}
        alt=""
        width={500}
        height={500}
        style={{
          width: `${w}px`,
          height: "auto",
        }}
        className={`w-16 drop-shadow-xl transition-transform group-hover:scale-105 group-active:scale-100`}
      />
      <p className="text-xl font-semibold capitalize">{label}</p>
    </button>
  );
};

export default SectionButton;
