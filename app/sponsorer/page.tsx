/* eslint-disable @next/next/no-img-element */
import { CONTACT_EMAIL, sponsors } from "../lib/sponsors";

const SponsorsPage = () => {
  return (
    <main className="min-h-screen w-full bg-muted/40 px-4 pb-24 pt-24">
      <div className="mx-auto w-full max-w-5xl">
        {/* Header */}
        <header className="mb-12 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-brand-green-mid">
            Sponsorer 2026
          </p>
          <h1 className="font-anton text-5xl uppercase leading-none text-brand-green md:text-6xl">
            Våra sponsorer
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-neutral-500">
            Stort tack till våra partners som gör det möjligt för Bollteori att
            leva och spela. Utan er — ingen match.
          </p>
        </header>

        {/* Sponsor cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {sponsors.map((sponsor, i) => {
            const card = (
              <div
                className="group flex h-full animate-fade-in-up flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div
                  className={`flex h-44 items-center justify-center p-8 ${
                    sponsor.logoBg ?? "bg-brand-cream/40"
                  }`}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className={`w-full object-contain transition-transform duration-300 group-hover:scale-105 ${
                      sponsor.logoBg || sponsor.tallLogo ? "max-h-28" : "max-h-16"
                    }`}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-anton text-xl uppercase text-brand-green">
                    {sponsor.name}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                    {sponsor.description}
                  </p>
                </div>
              </div>
            );

            if (sponsor.url) {
              return (
                <a
                  key={sponsor.name}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {card}
                </a>
              );
            }

            return <div key={sponsor.name}>{card}</div>;
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-3xl bg-brand-green px-6 py-12 text-center">
          <h2 className="font-anton text-3xl uppercase text-brand-cream sm:text-4xl">
            Vill du sponsra oss?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-brand-cream/80">
            Vi söker alltid nya partners som vill stötta laget. Hör av dig så
            berättar vi mer om våra sponsorpaket.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Sponsring%20Bollteori&body=Hej!%20Jag%20är%20intresserad%20av%20att%20sponsra%20Bollteori.`}
            className="mt-6 inline-block rounded-full bg-brand-cream px-8 py-3 font-anton text-lg uppercase tracking-wide text-brand-green shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            Maila oss
          </a>
        </div>
      </div>
    </main>
  );
};

export default SponsorsPage;
