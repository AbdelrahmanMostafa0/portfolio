"use client";
import { WiDaySunny } from "react-icons/wi";
import { BsFillSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { RiMoonFill } from "react-icons/ri";
import { motion } from "motion/react";
import { FaFileDownload } from "react-icons/fa";

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    const nowDark = html.classList.toggle("dark");
    localStorage.setItem("theme", nowDark ? "dark" : "light");
    setIsDark(nowDark);
  };
  const playSound = () => {
    const audio = new Audio("/sound/click.mp3");
    audio.play();
  };
  return (
    <div className="flex w-full px-4 fixed top-5 z-50 justify-between items-center">
      <button
        className=" left-5 text-white p-1"
        onClick={() => {
          playSound();
          toggleDarkMode();
        }}
      >
        {isDark ? (
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 90 }}
            transition={{ duration: 0.5, repeatType: "reverse" }}
          >
            <BsFillSunFill className="text-4xl drop-shadow-lg" />
          </motion.div>
        ) : (
          <motion.div>
            <RiMoonFill className="text-4xl drop-shadow-lg" />
          </motion.div>
        )}
        {/* {!isDark ? (
          <RiMoonFill className="text-4xl" />
        ) : (
          <BsFillSunFill className="text-4xl" />
        )} */}
      </button>
      <a href="/resume.pdf" download="resume.pdf" className="  md:hidden ">
        <FaFileDownload className="text-3xl text-white drop-shadow-lg " />
      </a>
    </div>
  );
};

export default Header;
