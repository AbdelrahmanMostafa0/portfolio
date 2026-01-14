import Image from "next/image";
import Link from "next/link";
import { IoHome } from "react-icons/io5";

export default function NotFound() {
  return (
    <div className="grid h-dvh place-content-center overflow-hidden overscroll-none w-screen  dark:bg-slate-900">
      <div className="fixed top-0  dark:hidden md:block left-0 w-full h-full bg-gradient-to-b from-blue-500 to-blue-300 opacity-50 z-0"></div>
      <div className="w-full z-10 space-y-[1px] md:max-w-[700px]">
        <div className="hidden md:flex h-14 items-center px-4 min-w-[700px] bg-[#424242] rounded-t-lg drop-shadow-md border">
          <p className="text-2xl font-bold text-white">not found</p>
        </div>
        <div
          className="
        min-h-[500px] p-5 gap-10 flex flex-col justify-center items-center
        md:min-w-[700px] md:border-2 md:border-[#424242] md:border-opacity-35 md:bg-white md:dark:bg-slate-800
        rounded-b-lg drop-shadow-xl md:dark:border-white
      "
        >
          <div>
            <Image
              src={"/not-found.png"}
              alt="not found"
              width={300}
              height={300}
              className="w-[250px] mx-auto"
            />
            <div className="text-center ">
              <h1 class="text-3xl font-bold text-[#0D1B2A] dark:text-white md:text-gray-800 mb-4">
                404 — Even this page gave up on me.
              </h1>

              <p class=" md:text-gray-600 mb-6 dark:text-white">
                You were looking for a page. I was looking for meaning. Neither
                of us found what we wanted.
              </p>

              <Link
                href="/"
                class="flex items-center gap-1 w-fit mx-auto bg-orange-500 dark:bg-blue-500  text-white font-semibold py-3 px-6 rounded-xl transition "
              >
                <IoHome />
                Escape the void
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#60A5FA"
            fillOpacity="0.7"
            d="M0,64L80,74.7C160,85,320,107,480,128C640,149,800,171,960,165.3C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
