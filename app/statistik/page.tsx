"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { players } from "../lib/players";

const chartConfig = {
  goals: { label: "Mål", color: "#043b1e" },
  assists: { label: "Assists", color: "#10b981" },
  mvps: { label: "MVP", color: "#d4a017" },
  yellow: { label: "Gula kort", color: "#facc15" },
  red: { label: "Röda kort", color: "#dc2626" },
} satisfies ChartConfig;

const num = (v: string) => Number(v) || 0;

const data = [...players]
  .map((p) => ({
    name: p.name,
    goals: num(p.goals),
    assists: num(p.assists),
    mvps: num(p.mvps),
    yellow: num(p.yellow_cards),
    red: num(p.red_cards),
  }))
  .sort((a, b) => b.goals - a.goals || b.assists - a.assists);

const StatisticsPage = () => {
  return (
    <main className="min-h-screen w-full bg-muted/40 px-4 pb-20 pt-24">
      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-brand-green-mid">
            Säsongen 2026
          </p>
          <h1 className="font-anton text-5xl uppercase leading-none text-brand-green md:text-6xl">
            Statistik
          </h1>
        </header>

        <div className="rounded-3xl border border-border bg-white p-4 shadow-sm md:p-6">
          <div className="overflow-x-auto">
            <ChartContainer
              config={chartConfig}
              className="aspect-auto h-[480px] min-w-[860px]"
            >
              <BarChart
                data={data}
                margin={{ top: 8, right: 8, left: -12, bottom: 64 }}
                barCategoryGap="18%"
              >
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  axisLine={false}
                  interval={0}
                  angle={-40}
                  textAnchor="end"
                  height={70}
                  tickFormatter={(value: string) => value.split(" ")[0]}
                  tick={{ fontSize: 12, fill: "#64748b" }}
                />
                <YAxis
                  allowDecimals={false}
                  tickLine={false}
                  axisLine={false}
                  width={32}
                  tick={{ fontSize: 12, fill: "#64748b" }}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="goals" fill="var(--color-goals)" radius={[3, 3, 0, 0]} />
                <Bar dataKey="assists" fill="var(--color-assists)" radius={[3, 3, 0, 0]} />
                <Bar dataKey="mvps" fill="var(--color-mvps)" radius={[3, 3, 0, 0]} />
                <Bar dataKey="yellow" fill="var(--color-yellow)" radius={[3, 3, 0, 0]} />
                <Bar dataKey="red" fill="var(--color-red)" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </div>
        </div>
      </div>
    </main>
  );
};

export default StatisticsPage;
