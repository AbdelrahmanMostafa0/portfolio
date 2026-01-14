import Image from "next/image";

const Links = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-7  w-full">
      <div className="flex md:flex-row flex-col w-full items-center justify-center gap-7 md:mt-7">
        <a
          href="https://github.com/AbdelrahmanMostafa0"
          target="_blank"
          className="md:gap-2 drop-shadow-xl transition-transform hover:scale-105 active:scale-100 flex md:flex-col items-center md:border-none border-2 w-full p-3 rounded-xl md:bg-transparent bg-black/30 dark:bg-white/20  md:dark:bg-transparent gap-5  text-white "
        >
          <Image
            src={"/icons/social-media/github.png"}
            alt="discord"
            width={50}
            height={50}
            className="w-24 dark:"
          />
          <div>
            <p className="md:text-center font-bold text-xl dark:text-white md:text-black">
              GitHub
            </p>
            <p className="md:hidden">@abdelrahmanmostafa0</p>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/abdelrahmanmostafa0/"
          target="_blank"
          className="md:gap-2 drop-shadow-xl transition-transform hover:scale-105 active:scale-100 flex md:flex-col items-center md:border-none border-2 w-full p-3 rounded-xl md:bg-transparent bg-black/30 dark:bg-white/20 md:dark:bg-transparent gap-5  text-white "
        >
          <Image
            src={"/icons/social-media/linkedin.png"}
            alt="discord"
            width={50}
            height={50}
            className="w-24 dark:"
          />
          <div>
            <p className="md:text-center font-bold text-xl dark:text-white md:text-black">
              LinkedIn
            </p>
            <p className="md:hidden ">@abdelrahmanmostafa0</p>
          </div>
        </a>

        {/* <a
        href="https://discord.com/users/685266943497994240"
        target="_blank"
        className="md:gap-2 drop-shadow-xl transition-transform hover:scale-105 active:scale-100 flex md:flex-col items-center md:border-none border-2 w-full p-3 rounded-xl md:bg-transparent bg-black/30 dark:bg-white/20 md:dark:bg-transparent gap-5  text-white "
      >
        <Image
          src={"/icons/social-media/discord (1).png"}
          alt="discord"
          width={50}
          height={50}
          className="w-24 dark:"
        />
        <p className="text-center font-bold text-xl md">Discord</p>
      </a> */}
        <a
          href="https://www.instagram.com/abdelrahman_mostafaa0/"
          target="_blank"
          className="md:gap-2 drop-shadow-xl transition-transform hover:scale-105 active:scale-100 flex md:flex-col items-center md:border-none border-2 w-full p-3 rounded-xl md:bg-transparent bg-black/30 dark:bg-white/20 md:dark:bg-transparent gap-5  text-white "
        >
          <Image
            src={"/icons/social-media/instagram.png"}
            alt="discord"
            width={50}
            height={50}
            className="w-24 dark:"
          />
          <div>
            <p className="md:text-center font-bold text-xl md dark:text-white md:text-black">
              Instagram
            </p>
            <p className="md:hidden ">@abdelrahman_mostafaa0</p>
          </div>
        </a>
      </div>
      <div className="w-fit border p-5 rounded-lg dark:text-white  bg-white  dark:bg-transparent text-sm mb-5">
        Clicking any link will open it in a new tab.
      </div>
    </div>
  );
};
export default Links;
