import { useWindowsContext } from "@/context/WindowsContext";
import { motion } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import About from "./windows/About";
import Contact from "./windows/Contact";
import Links from "./windows/Links";
import Work from "./windows/Work";
import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("./PdfViewer"), { ssr: false });

const RenderMobileWindow = ({ children, title = "about" }) => {
  const { clearWindows, windows } = useWindowsContext();
  const playSound = () => {
    const audio = new Audio("/sound/click.mp3");
    audio.play();
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.y > 150) {
      clearWindows();
      // playSound();
    }
  };

  const renderComp = () => {
    switch (windows[0]) {
      case "about":
        return <About />;
      case "work":
        return <Work />;
      case "links":
        return <Links />;
      case "contact":
        return <Contact />;
      case "resume":
        return <PDFViewer />;
      default:
        return null;
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/20 dark:bg-black/40 z-[9998] backdrop-blur-sm"
        onClick={() => {
          clearWindows();
          // playSound();
        }}
      />

      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 0.5 }}
        onDragEnd={handleDragEnd}
        className="fixed bottom-0 left-0 w-full h-[92dvh] z-[9999] shadow-2xl rounded-t-3xl overflow-hidden"
      >
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-white/40 rounded-full z-10" />

        <div className="bg-[#424242] dark:bg-[#2d2d2d] flex items-center justify-between px-4 py-3 border-b-2 border-black/10">
          <p className="text-white text-lg font-semibold capitalize px-4">
            {windows[0] || title}
          </p>
          <button
            onClick={() => {
              clearWindows();
              playSound();
            }}
            className="text-white flex items-center gap-1 font-bold hover:bg-white/10 active:bg-white/20 p-1.5 rounded-md transition-all"
          >
            [<IoCloseSharp className="text-xl" />]
          </button>
        </div>

        <div className="bg-white dark:bg-slate-800 h-full overflow-y-auto pb-20 p-4 pb-safe scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent">
          {renderComp()}
        </div>
      </motion.div>
    </>
  );
};

export default RenderMobileWindow;
