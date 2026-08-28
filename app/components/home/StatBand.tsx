import Image from "next/image";
import { players } from "../../lib/players";
import Link from "next/link";
import { PLACEHOLDER_IMAGE, playerSlug } from "../../lib/players";

const num = (v: string | undefined) => Number(v) || 0;

const StatBand = () => {
  const leaders = [
    { label: "Mest assist", field: "assists" as const },
    { label: "Mest matcher", field: "matches_played" as const },
    { label: "Mest mål", field: "goals" as const },
    { label: "Mest räddningar", field: "amountofSaves" as const },
  ].map((stat) => ({
    ...stat,
    player: [...players].sort((a, b) => num(b[stat.field]) - num(a[stat.field]))[0],
    value: num([...players].sort((a, b) => num(b[stat.field]) - num(a[stat.field]))[0][stat.field]),
  }));

  return (
    <section className="bg-brand-green">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-6 gap-y-8 px-6 py-10 sm:grid-cols-4">
        {leaders.map(({ label, player, value }) => (
          <Link
            key={label}
            href={`/truppen/${playerSlug(player.name)}`}
            className="group text-center transition-opacity hover:opacity-75"
          >
            <div className="mx-auto mb-3 size-16 overflow-hidden rounded-full border-2 border-brand-cream/40 bg-brand-cream/10 transition-transform group-hover:scale-105">
              {player.image && player.image !== PLACEHOLDER_IMAGE ? (
                <Image
                  src={player.image}
                  alt={player.name}
                  width={64}
                  height={64}
                  className="size-full object-cover object-top"
                />
              ) : (
                <span className="flex size-full items-center justify-center font-anton text-2xl text-brand-cream/70">
                  {player.name.charAt(0)}
                </span>
              )}
            </div>
            <p className="font-anton text-4xl leading-none text-brand-cream md:text-5xl">{value}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-brand-cream/70">
              {label}
            </p>
            <p className="mt-1 truncate text-sm font-semibold text-brand-cream">
              {player.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default StatBand;
