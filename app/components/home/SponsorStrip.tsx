/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { sponsors } from "../../lib/sponsors";

const SponsorStrip = () => (
  <section className="border-t border-black/5 bg-brand-cream/40 py-16">
    <div className="mx-auto max-w-5xl px-6 text-center">
      <p className="mb-8 text-xs font-bold uppercase tracking-[0.25em] text-brand-green/60">
        Stolt sponsrade av
      </p>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {sponsors.map((s) => (
          <div
            key={s.name}
            className={`flex h-24 w-40 items-center justify-center rounded-2xl border border-black/5 p-5 shadow-sm ${
              s.logoBg ?? "bg-white"
            }`}
          >
            <img
              src={s.logo}
              alt={s.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href="/sponsorer"
          className="text-sm font-semibold text-brand-green transition-colors hover:text-brand-green/70"
        >
          Bli en av våra sponsorer →
        </Link>
      </div>
    </div>
  </section>
);

export default SponsorStrip;
