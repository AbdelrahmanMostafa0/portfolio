"use client";
import { useWindowsContext } from "@/context/WindowsContext";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { label: "about", icon: "/icons/icon_about.webp" },
  { label: "work", icon: "/icons/icon_work.webp" },
  { label: "links", icon: "/icons/icon_links.webp" },
  { label: "contact", icon: "/icons/icon_contact.webp" },
  { label: "resume", icon: "/icons/resume.png" },
];

const NavButton = ({ label, icon, setOpenedWindow, width }) => {
  const { windows, addWindow } = useWindowsContext();
  const openWindow = () => {
    const audio = new Audio("/sound/click.mp3");

    if (windows.includes(label)) {
      return;
    } else {
      audio.play();
      addWindow(label);
    }
  };
  const w = width || 80;
  return (
    <button
      onClick={openWindow}
      className="flex flex-col items-center space-y-3 text-center group active:scale-95 transition-all duration-200 
      text-gray-800 dark:text-white 
      bg-white dark:bg-slate-800 
      md:bg-transparent md:dark:bg-transparent 
      border-2 border-gray-200 dark:border-slate-700 
      md:border-0
      p-6 px-8 md:px-0 md:p-0 
      rounded-2xl md:rounded-none
      shadow-md hover:shadow-lg md:hover:shadow-none md:shadow-none
      hover:border-[#424242] dark:hover:border-white/40 md:hover:border-0"
    >
      <Image
        src={icon}
        alt={`${label} icon`}
        width={500}
        height={500}
        style={{
          width: `${w}px`,
          height: "auto",
        }}
        className="w-20 md:w-[80px] drop-shadow-xl transition-transform group-hover:scale-110 group-active:scale-100"
      />
      <p className="text-lg md:text-xl font-semibold capitalize">{label}</p>
    </button>
  );
};

const MainWindow = ({ setOpenedWindow }) => {
  const { windowWidth } = useWindowWidth();

  const taglines = [
    "Dev by Day, Side Project Goblin by Night",
    "CSS Wizard with Too Many Tabs Open",
    "I Turn 'Just an Idea' into 'Oh, It's Live'",
    "Built with Love, Caffeine & Console Logs",
  ];

  const [randomTagline, setRandomTagline] = useState("");

  useEffect(() => {
    const random = taglines[Math.floor(Math.random() * taglines.length)];
    setRandomTagline(random);
  }, []);

  return (
    <div className="w-full z-10 space-y-[1px] md:max-w-[700px]">
      {/* Top bar - Desktop only */}
      <div className="hidden md:flex h-14 items-center px-4 min-w-[700px] bg-[#424242] rounded-t-lg drop-shadow-md border">
        <p className="text-2xl font-bold text-white">home</p>
      </div>

      {/* Main content */}
      <div
        className="
        min-h-[500px] p-6 md:p-5 gap-8 md:gap-10 flex flex-col justify-center items-center
        md:min-w-[700px] md:border-2 md:border-[#424242] md:border-opacity-35 md:bg-white md:dark:bg-slate-800
        rounded-b-lg drop-shadow-xl md:dark:border-white
      "
      >
        {/* Header Section */}
        <div className="pt-6 md:pt-10 text-center space-y-3 md:space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold dark:text-white leading-tight">
            hi!{" "}
            <span className="text-orange-500 dark:text-blue-300">
              i'm abdelrahman
            </span>
          </h1>
          <p className="text-lg md:text-2xl min-h-7 md:min-h-9 dark:text-white px-4">
            {randomTagline}
          </p>
        </div>

        {/* Navigation Buttons Grid */}
        <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4 md:gap-y-10 md:gap-x-10 w-full max-w-md md:max-w-none">
          {navItems.map((item) => {
            if (item.label === "resume") {
              if (windowWidth > 768) {
                return (
                  <NavButton
                    setOpenedWindow={setOpenedWindow}
                    key={item.label}
                    label={item.label}
                    width={61.5}
                    icon={item.icon}
                  />
                );
              }
            } else {
              return (
                <NavButton
                  setOpenedWindow={setOpenedWindow}
                  key={item.label}
                  label={item.label}
                  icon={item.icon}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default MainWindow;
