"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import NavLink from "./NavLink";

const NavBar = () => {
  const router = useRouter();
  return (
    <nav className="fixed left-1/2 top-3 z-50 w-full max-w-2xl -translate-x-1/2 px-3">
      <div className="flex items-center gap-4 rounded-full border border-black/5 bg-white/80 px-4 py-2 shadow-lg shadow-black/5 backdrop-blur-md transition-all">
        <button
          type="button"
          onClick={() => router.push("/")}
          aria-label="Gå till startsidan"
          className=" cursor-pointer shrink-0 rounded-full transition-transform hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
        >
          <Image
            alt="Bild på bollteori loggan"
            src="/Bollteori-transparent.png"
            width={50}
            height={50}
            priority
          />
        </button>

        <div className="ml-auto flex items-center gap-1">
          <NavLink destination="/sponsorer" label="Sponsorer" isExternal={false} />
          <NavLink destination="/om-oss" label="Om oss" isExternal={false} />
          <NavLink destination="/truppen" label="Truppen" isExternal={false} />
          <NavLink destination="/statistik" label="Statistik" isExternal={false} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
