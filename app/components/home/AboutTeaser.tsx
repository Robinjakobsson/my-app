import Image from "next/image";
import Link from "next/link";

const AboutTeaser = () => (
  <section className="relative overflow-hidden">
    <div className="relative min-h-[440px] w-full">
      <Image
        src="/lagbild.jpg"
        alt="Bollteori-laget"
        fill
        sizes="100vw"
        className="object-cover object-[60%_30%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-green/95 via-brand-green/85 to-brand-green/50" />

      <div className="relative z-10 mx-auto flex min-h-[440px] max-w-6xl flex-col justify-center px-6 py-16">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-cream/80">
          Om oss
        </p>
        <h2 className="font-anton text-4xl uppercase leading-none text-brand-cream sm:text-5xl md:text-6xl">
          Mer än ett lag
        </h2>
        <p className="mt-5 max-w-xl text-lg text-brand-cream/90">
          Från snacket i soffan 2023 till en fullständig trupp med sikte på
          toppen. Det här är historien om hur Bollteori blev Bollteori.
        </p>
        <Link
          href="/om-oss"
          className="mt-8 inline-block w-fit rounded-full bg-brand-cream px-8 py-3 font-anton uppercase tracking-wide text-brand-green shadow-lg transition-transform hover:scale-105"
        >
          Läs vår historia
        </Link>
      </div>
    </div>
  </section>
);

export default AboutTeaser;
