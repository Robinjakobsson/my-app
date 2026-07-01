import Image from "next/image";
import { players } from "../lib/players";
import { Player, Position } from "../lib/player-model";

const PLACEHOLDER_IMAGE = "/Bollteori-transparent.png";

const positionOrder: Position[] = [
  "Anfallare",
  "Mittfältare",
  "Försvarare",
  "Målvakt",
];

const positionMeta: Record<Position, { abbrev: string; blurb: string }> = {
  Anfallare: { abbrev: "ANF", blurb: "Anfall" },
  Mittfältare: { abbrev: "MIT", blurb: "Mittfält" },
  Försvarare: { abbrev: "FÖR", blurb: "Försvar" },
  Målvakt: { abbrev: "MV", blurb: "Målvakt" },
};

const num = (v: string) => Number(v) || 0;
const hasPhoto = (p: Player) => p.image !== PLACEHOLDER_IMAGE && p.image !== "";

function StatChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center rounded-lg bg-muted/70 px-2 py-1.5">
      <span className="text-base font-anton leading-none tabular-nums ">
        {value}
      </span>
      <span className="mt-0.5 text-[9px] font-anton uppercase tracking-wider ">
        {label}
      </span>
    </div>
  );
}

function PlayerCard({ player, index }: { player: Player; index: number }) {
  return (
    <div
      className="group animate-tile-enter overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/30 hover:shadow-xl"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-accent to-brand-cream/40">
        {hasPhoto(player) ? (
          <Image
            src={player.image}
            alt={`Porträtt av ${player.name}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-anton text-7xl text-brand-green/20">
              {player.name.charAt(0)}
            </span>
          </div>
        )}

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 pt-10">
          <h3 className="font-anton text-xl uppercase leading-tight text-white drop-shadow-md">
            {player.name}
          </h3>
          <p className="text-[11px] font-anton uppercase tracking-widest text-brand-cream/90">
            FC Bollteori
          </p>
        </div>
      </div>

      <div className="space-y-3 p-4">
        <p className="min-h-[2.5rem] text-sm leading-relaxed text-neutral-500 line-clamp-2">
          {player.description || "Ingen beskrivning ännu."}
        </p>
        <div className="grid grid-cols-4 gap-1.5">
          <StatChip label="Mål" value={player.goals} />
          <StatChip label="Assist" value={player.assists} />
          <StatChip label="Gul" value={player.yellow_cards} />
          <StatChip label="Röd" value={player.red_cards} />
        </div>
      </div>
    </div>
  );
}

export default function SquadPage() {
  const totalGoals = players.reduce((s, p) => s + num(p.goals), 0);
  const totalAssists = players.reduce((s, p) => s + num(p.assists), 0);

  const grouped = positionOrder
    .map((pos) => ({
      position: pos,
      list: players.filter((p) => p.position === pos),
    }))
    .filter((g) => g.list.length > 0);

  const summary = [
    { label: "Spelare", value: players.length },
    { label: "Mål", value: totalGoals },
    { label: "Assist", value: totalAssists },
  ];

  return (
    <main className="min-h-screen w-full bg-muted/40 pb-20 pt-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        {/* Hero */}
        <section className="relative mt-4 overflow-hidden rounded-3xl border border-border shadow-lg">
          <div className="absolute inset-0">
            <Image
              src="/lagbild.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-green/95 via-brand-green/85 to-brand-green/65" />
          </div>

          <div className="relative z-10 flex flex-col gap-8 p-7 md:flex-row md:items-end md:justify-between md:p-10">
            <div>
              <p className="mb-2 font-anton text-xs uppercase tracking-[0.25em] text-brand-cream/80">
                Säsongstrupp 2026
              </p>
              <h1 className="font-anton text-5xl uppercase leading-none text-white drop-shadow md:text-7xl">
                Truppen
              </h1>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {summary.map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-center backdrop-blur-sm"
                >
                  <p className="font-anton text-2xl tabular-nums text-white">
                    {value}
                  </p>
                  <p className="font-anton text-[10px] uppercase tracking-wider text-brand-cream/70">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Position sections */}
        {grouped.map(({ position, list }) => {
          const lineGoals = list.reduce((s, p) => s + num(p.goals), 0);
          return (
            <section key={position} className="mt-12">
              <div className="mb-6 flex items-end justify-between gap-4 border-b border-border pb-4">
                <div className="flex text-black items-center gap-4">
                  <div>
                    <h2 className="font-anton text-2xl uppercase text-black md:text-3xl">
                      {position}
                    </h2>
                    <p className="mt-0.5 font-anton text-sm text-black">
                      {positionMeta[position].blurb} · {list.length} spelare ·{" "}
                      {lineGoals} mål
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
                {list.map((player, i) => (
                  <PlayerCard key={player.name} player={player} index={i} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
