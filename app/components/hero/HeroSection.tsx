import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/Söderberg.png"
        alt="Bild på söderberg"
        fill
        priority
        sizes="100vw"
        className="scale-105 object-cover object-[50%_40%]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <p className="mb-4 animate-fade-in-up text-sm font-semibold uppercase tracking-[0.35em] text-white/80">
          Välkommen till
        </p>

        <h1 className="animate-fade-in-up font-anton text-[#FDF4CE] text-7xl uppercase leading-none drop-shadow-2xl [animation-delay:120ms] sm:text-8xl md:text-9xl">
          Bollteori
        </h1>

        <p className="mt-6 max-w-xl animate-fade-in-up text-lg text-white/90 [animation-delay:240ms] sm:text-xl">
          Följ truppen, statistiken och allt som händer på och utanför planen.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
