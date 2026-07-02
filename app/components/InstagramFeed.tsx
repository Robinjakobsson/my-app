"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    eapps?: { initWidgetsFromBuffer?: () => void };
  }
}

const PLATFORM_SRC = "https://elfsightcdn.com/platform.js";
const WIDGET_CLASS = "elfsight-app-bf891921-8e64-42fd-8eb6-d2a674e77b40";

const InstagramFeed = () => {
  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${PLATFORM_SRC}"]`
    );

    if (!existing) {
      const script = document.createElement("script");
      script.src = PLATFORM_SRC;
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Skriptet är redan laddat (t.ex. efter navigering/HMR) – tvinga en ny scan
      window.eapps?.initWidgetsFromBuffer?.();
    }
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-brand-green/60">
            @bollteori
          </p>
          <h2 className="font-anton text-4xl uppercase text-brand-green md:text-5xl">
            Följ oss på Instagram
          </h2>
        </div>

        <div className={WIDGET_CLASS} data-elfsight-app-lazy />
      </div>
    </section>
  );
};

export default InstagramFeed;
