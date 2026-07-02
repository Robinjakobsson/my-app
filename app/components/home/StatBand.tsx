import { players } from "../../lib/players";

const num = (v: string) => Number(v) || 0;

const StatBand = () => {
  const totalGoals = players.reduce((s, p) => s + num(p.goals), 0);
  const totalAssists = players.reduce((s, p) => s + num(p.assists), 0);

  const stats = [
    { value: "2023", label: "Grundat" },
    { value: players.length, label: "Spelare" },
    { value: totalGoals, label: "Mål" },
    { value: totalAssists, label: "Assist" },
  ];

  return (
    <section className="bg-brand-green">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-6 py-10 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-anton text-4xl leading-none text-brand-cream md:text-5xl">
              {s.value}
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-brand-cream/70">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatBand;
