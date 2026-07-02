import Image from "next/image";
import Link from "next/link";
import { players, playerSlug, PLACEHOLDER_IMAGE } from "../../lib/players";

const num = (v: string) => Number(v) || 0;

const TopScorers = () => {
  const top = [...players].sort((a, b) => num(b.goals) - num(a.goals)).slice(0, 3);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-brand-green/60">
            Säsongen 2026
          </p>
          <h2 className="font-anton text-4xl uppercase text-brand-green md:text-5xl">
            Skyttekungar
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {top.map((p, i) => {
            const hasPhoto = p.image !== PLACEHOLDER_IMAGE && p.image !== "";
            return (
              <Link
                key={p.name}
                href={`/truppen/${playerSlug(p.name)}`}
                className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="absolute left-4 top-4 z-10 flex size-9 items-center justify-center rounded-full bg-brand-green font-anton text-lg text-brand-cream shadow">
                  {i + 1}
                </span>

                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-brand-green/10 to-brand-cream/40">
                  {hasPhoto ? (
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span className="font-anton text-7xl text-brand-green/20">
                        {p.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between p-5">
                  <div>
                    <h3 className="font-anton text-lg uppercase leading-tight text-brand-green">
                      {p.name}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-neutral-500">
                      {p.position}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-anton text-3xl leading-none text-brand-green">
                      {p.goals}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-neutral-500">
                      Mål
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/statistik"
            className="inline-block rounded-full bg-brand-green px-8 py-3 font-anton uppercase tracking-wide text-brand-cream transition-transform hover:scale-105"
          >
            Se all statistik
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopScorers;
