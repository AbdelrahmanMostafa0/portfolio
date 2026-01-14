"use client";
import { useWindowsContext } from "@/context/WindowsContext";
import Window from "../Window";
import About from "./About";
import Contact from "./Contact";
import Links from "./Links";
import Work from "./Work";
// import MyDocument from "../PdfViewer ";
// import PdfViewer from "../PdfViewer ";
import dynamic from "next/dynamic";
import ResumeViewer from "../ResumeViewer";
import { FaFileDownload } from "react-icons/fa";
// import PDFViewer from "../PdfViewer";
const MyDocument = dynamic(() => import("../MyDocument"), { ssr: false });
const PDFViewer = dynamic(() => import("../PdfViewer"), { ssr: false });
const RenderWindow = ({ window, setOpenedWindow, containerRef }) => {
  const renderTab = () => {
    switch (window) {
      case "about":
        return (
          <Window
            title={window}
            containerRef={containerRef}
            setOpenedWindow={setOpenedWindow}
            containerStyle={"max-w-[500px]"}
          >
            <div className="!overflow-auto w-full scrollbar-retro ">
              <About />
            </div>
          </Window>
        );
      case "contact":
        return (
          <Window
            width={400}
            title={window}
            containerRef={containerRef}
            setOpenedWindow={setOpenedWindow}
            containerStyle={"max-w-[500px]"}
          >
            <div className="!overflow-auto w-full scrollbar-retro ">
              <Contact />
            </div>
          </Window>
        );
      case "links":
        return (
          <Window
            height={350}
            width={500}
            title={window}
            containerRef={containerRef}
            setOpenedWindow={setOpenedWindow}
            containerStyle={"max-w-[500px]"}
          >
            <div className=" w-full scrollbar-retro ">
              <Links />
            </div>
          </Window>
        );
      case "work":
        return (
          <Window
            title={window}
            containerRef={containerRef}
            setOpenedWindow={setOpenedWindow}
            containerStyle={"max-w-[500px]"}
          >
            <div className="!overflow-auto w-full h-full scrollbar-retro  ">
              <Work />
            </div>
          </Window>
        );
      case "resume":
        return (
          <Window
            title={window}
            containerRef={containerRef}
            setOpenedWindow={setOpenedWindow}
            containerStyle={"max-w-[500px]"}
          >
            <div className="!overflow-auto w-full scrollbar-retro relative ">
              {/* <About /> */}
              <a
                href="/resume.pdf"
                download="resume.pdf"
                className="fixed bottom-1 left-0 z-10 dark:text-white text-black p-2 rounded-full"
              >
                <FaFileDownload className="text-2xl" />
              </a>

              <PDFViewer />
            </div>
          </Window>
        );
      default:
        return null;
    }
  };
  return renderTab();
};
export default RenderWindow;
