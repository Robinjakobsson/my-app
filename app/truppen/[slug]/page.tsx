import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  players,
  playerSlug,
  getPlayerBySlug,
  PLACEHOLDER_IMAGE,
} from "../../lib/players";

const num = (v: string) => Number(v) || 0;

const positionAbbrev: Record<string, string> = {
  Anfallare: "ANF",
  Mittfältare: "MIT",
  Försvarare: "FÖR",
  Målvakt: "MV",
};

export function generateStaticParams() {
  return players.map((p) => ({ slug: playerSlug(p.name) }));
}

const maxOf = (key: "goals" | "assists" | "mvps") =>
  Math.max(...players.map((p) => num(p[key])), 1);

export default async function PlayerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const player = getPlayerBySlug(slug);

  if (!player) {
    notFound();
  }

  const goals = num(player.goals);
  const assists = num(player.assists);
  const mvps = num(player.mvps);
  const points = goals + assists;
  const hasPhoto = player.image !== PLACEHOLDER_IMAGE && player.image !== "";

  const bars = [
    { key: "MÅL", label: "Mål", value: goals, max: maxOf("goals") },
    { key: "AST", label: "Assist", value: assists, max: maxOf("assists") },
    { key: "MVP", label: "Man of the Match", value: mvps, max: maxOf("mvps") },
  ];

  const careerStats = [
    { label: "Mål", value: goals },
    { label: "Assist", value: assists },
    { label: "MVP", value: mvps },
    { label: "Målpoäng", value: points },
    { label: "Gula kort", value: num(player.yellow_cards) },
    { label: "Röda kort", value: num(player.red_cards) },
  ];

  return (
    <main className="min-h-screen w-full bg-muted/40 px-4 pb-16 pt-24">
      <div className="mx-auto w-full max-w-6xl">
        {/* Back */}
        <Link
          href="/truppen"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-green transition-colors hover:text-brand-green-mid"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Tillbaka till truppen
        </Link>

        {/* Hero */}
        <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Info card — slides in from left */}
          <div className="order-2 animate-slide-in-left lg:order-1">
            <div className="relative overflow-hidden rounded-3xl border border-brand-green/20 bg-brand-green p-6 shadow-2xl md:p-8">
              <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-brand-cream/10 blur-3xl" />

              <div className="relative z-10 flex items-start gap-5 md:gap-7">
                <div className="flex shrink-0 flex-col items-center">
                  <span className="font-anton text-6xl leading-none text-brand-cream md:text-7xl">
                    {points}
                  </span>
                  <span className="mt-1 text-xs font-bold uppercase tracking-widest text-brand-cream/70">
                    Målpoäng
                  </span>
                  <span className="mt-2 rounded-md bg-brand-cream/15 px-2 py-0.5 text-xs font-black uppercase tracking-wider text-brand-cream">
                    {positionAbbrev[player.position]}
                  </span>
                </div>

                <div className="min-w-0 pt-1">
                  <h1 className="font-anton text-3xl uppercase leading-tight text-brand-cream md:text-5xl">
                    {player.name}
                  </h1>
                  <span className="mt-3 inline-block rounded-full bg-brand-cream/15 px-3 py-1 text-sm font-semibold text-brand-cream">
                    {player.position}
                  </span>
                  {player.description && (
                    <p className="mt-4 text-sm leading-relaxed text-brand-cream/80">
                      {player.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Stat bars */}
              <div className="relative z-10 mt-7 space-y-4">
                {bars.map((stat) => (
                  <div key={stat.key}>
                    <div className="mb-1 flex items-end justify-between gap-3">
                      <div className="flex items-baseline gap-2">
                        <span className="font-anton text-lg text-brand-cream">
                          {stat.key}
                        </span>
                        <span className="text-xs font-medium text-brand-cream/60">
                          {stat.label}
                        </span>
                      </div>
                      <span className="font-anton text-2xl tabular-nums text-brand-cream">
                        {stat.value}
                      </span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-black/25">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand-cream/90 to-brand-cream/50"
                        style={{ width: `${(stat.value / stat.max) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {mvps > 0 && (
                <div className="relative z-10 mt-6 inline-flex items-center gap-2 rounded-full bg-brand-cream/15 px-4 py-2">
                  <span className="text-sm font-semibold text-brand-cream">
                    🏆 {mvps}× Man of the Match
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Image — slides in from right */}
          <div className="order-1 flex animate-slide-in-right justify-center lg:order-2 lg:justify-end">
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[420px]">
              <div className="absolute -inset-3 rounded-[2rem] bg-brand-green/30 opacity-60 blur-2xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-4 border-brand-green/20 shadow-2xl [clip-path:polygon(50%_0%,100%_6%,100%_94%,50%_100%,0%_94%,0%_6%)]">
                {hasPhoto ? (
                  <Image
                    src={player.image}
                    alt={player.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 340px, 420px"
                    className="scale-105 object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-green to-brand-green-mid">
                    <span className="font-anton text-8xl text-brand-cream/40">
                      {player.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-center">
                  <p className="font-anton text-2xl uppercase tracking-wide text-white drop-shadow-lg">
                    {player.name}
                  </p>
                  <p className="text-sm font-semibold uppercase tracking-widest text-white/80">
                    FC Bollteori
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career stats */}
        <div className="mt-12 animate-fade-in-up space-y-6 [animation-delay:400ms]">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 md:gap-4">
            {careerStats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-white p-5 text-center shadow-sm"
              >
                <p className="font-anton text-4xl tabular-nums text-brand-green">
                  {s.value}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-neutral-500">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h2 className="font-anton text-lg uppercase text-brand-green">
              Prestationsöversikt
            </h2>
            <div className="mt-4 flex items-center justify-between rounded-xl border border-brand-green/15 bg-brand-green/5 p-5">
              <span className="text-sm font-medium text-neutral-700 md:text-base">
                Totala målpoäng (mål + assist)
              </span>
              <span className="font-anton text-4xl tabular-nums text-brand-green">
                {points}
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
