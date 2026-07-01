"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import NavLink from "./NavLink";

const links = [
  { destination: "/sponsorer", label: "Sponsorer" },
  { destination: "/om-oss", label: "Om oss" },
  { destination: "/truppen", label: "Truppen" },
  { destination: "/statistik", label: "Statistik" },
];

const NavBar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      // Hide when scrolling down past a small threshold, show when scrolling up
      if (y > lastY && y > 80) {
        setHidden(true);
        setOpen(false);
      } else if (y < lastY) {
        setHidden(false);
      }
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed left-1/2 top-3 z-50 w-full max-w-2xl -translate-x-1/2 px-3 transition-transform duration-300 ${
        hidden ? "-translate-y-[200%]" : "translate-y-0"
      }`}
    >
      <div className="flex items-center gap-4 rounded-full border border-black/5 bg-white/80 px-4 py-2 shadow-lg shadow-black/5 backdrop-blur-md transition-all">
        <button
          type="button"
          onClick={() => {
            router.push("/");
            setOpen(false);
          }}
          aria-label="Gå till startsidan"
          className="cursor-pointer shrink-0 rounded-full transition-transform hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
        >
          <Image
            alt="Bild på bollteori loggan"
            src="/Bollteori-transparent.png"
            width={50}
            height={50}
            priority
          />
        </button>

        {/* Desktop links */}
        <div className="ml-auto hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.destination}
              destination={link.destination}
              label={link.label}
              isExternal={false}
            />
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Stäng meny" : "Öppna meny"}
          aria-expanded={open}
          className="ml-auto flex size-10 shrink-0 items-center justify-center rounded-full text-neutral-700 transition-colors hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 md:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-6"
          >
            {open ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="mt-2 flex flex-col gap-1 rounded-3xl border border-black/5 bg-white/95 p-2 shadow-lg shadow-black/5 backdrop-blur-md md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.destination}
              destination={link.destination}
              label={link.label}
              isExternal={false}
              className="w-full text-center"
              onClick={() => setOpen(false)}
            />
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
