export const CONTACT_EMAIL = "jakobssonrobin97@gmail.com";

export type Sponsor = {
  name: string;
  logo: string;
  description: string;
  url?: string;
  logoBg?: string;
  tallLogo?: boolean;
};

export const sponsors: Sponsor[] = [
  {
    name: "Generalens Hampa",
    logo: "/sponsors/generalens-hampa-logomark.svg",
    logoBg: "bg-brand-green",
    description:
      "Vår stolta huvudsponsor — namnet bärs längst fram på matchtröjan. Tack för att ni backar laget från första avspark till sista slutsignal.",
  },
  {
    name: "Bilhandlar'n i Trollhättan",
    logo: "/sponsors/bilhandlarn.png",
    description:
      "Den lokala bilhandlaren i Trollhättan som ser till att laget alltid tar sig till match. Letar du efter nästa bil är det hit du ska.",
  },
  {
    name: "Broccoli",
    logo: "/sponsors/broccoli-logomark.svg",
    tallLogo: true,
    description:
      "En trogen partner vars logga vi bär med stolthet på tröjan. Stöttar Bollteori både på och utanför planen.",
  },
];
