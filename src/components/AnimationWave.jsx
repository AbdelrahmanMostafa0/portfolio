"use client";
import { motion } from "framer-motion";

const AnimatedWave = () => {
  return (
    <motion.div className="fixed bottom-0 left-0 w-full z-0 pointer-events-none">
      <motion.svg
        viewBox="0 0 1440 320"
        className="w-[200%] h-[150px]"
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "linear",
        }}
      >
        <path
          fill="#90cdf4"
          fillOpacity="1"
          d="M0,64L40,74.7C80,85,160,107,240,117.3C320,128,400,128,480,133.3C560,139,640,149,720,154.7C800,160,880,160,960,165.3C1040,171,1120,181,1200,176C1280,171,1360,149,1400,138.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        />
      </motion.svg>
    </motion.div>
  );
};

export default AnimatedWave;
