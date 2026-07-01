import Image from "next/image";

const Banner = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[60vh] min-h-[420px] w-full">
        <Image
          src="/bollteori-baksida.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-green/85" />
        <Image
          src="/Bollteori-transparent.png"
          alt=""
          width={520}
          height={520}
          className="absolute -right-16 top-1/2 hidden -translate-y-1/2 opacity-10 md:block"
        />

        <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center">
          <span className="font-anton text-6xl leading-none text-brand-cream/40">
            &ldquo;
          </span>
          <blockquote className="font-anton text-3xl uppercase leading-tight text-brand-cream sm:text-4xl md:text-5xl">
            Ensam är stark — men tillsammans är vi Bollteori.
          </blockquote>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-brand-cream/70">
            Laget
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
