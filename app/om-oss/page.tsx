import Image from "next/image";




const AboutUsPage = () => {
  return (
    <main className="w-full bg-white">
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="/bollteori-baksida.png"
          alt="Bild på Bollteoris spelare"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="animate-fade-in-up font-anton text-7xl uppercase leading-none text-[#FDF4CE] drop-shadow-2xl [animation-delay:120ms] sm:text-8xl md:text-9xl">
            Mer än ett lag
          </h1>
          <p className="mt-6 max-w-xl animate-fade-in-up text-lg text-white/90 [animation-delay:240ms] sm:text-xl">
            Från snacket i soffan till ett fullständigt lag på plan.
          </p>
        </div>
      </section>

      {/* VÅR HISTORIA */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-xl">
            <Image
              src="/friendly.jpg"
              alt="Gammalt bollteori lag"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="font-anton text-4xl uppercase leading-none text-brand-green sm:text-5xl">
              2023
            </h2>
            <p className="mt-6 text-lg font-medium leading-relaxed text-neutral-800">
              Det började som prat över discord, tänk om vi startade ett eget
              lag? 2023 tog lagledaren Oscar Ponce tag i det hela och skapade FC
              Bollteori.
            </p>
            <p className="mt-4 leading-relaxed text-neutral-500">
              2023 Startade vi korpensäsongen med hopp om att faktist ta hem
              ligan från start, om vi bara visste vad vi hade gett oss in på.
              Spelare som spelat korpen i deras ungdom innan berättade om hur
              enkelt detta måste vara, hur enkelt dom gjorde det när dem var
              mindre och kunde springa förbi allihopa och göra enkla mål.
            </p>
            <p className="mt-4 leading-relaxed text-neutral-500">
              Bollteori hamnade på sista plats i tabellen...
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-anton text-4xl uppercase leading-none text-brand-green sm:text-5xl">
              2024
            </h2>
            <p className="mt-6 text-lg font-medium leading-relaxed text-neutral-800">
              Säsongen 2024 har vi många som lämnade efter våran debutsäsong.
              Vårat första ombygge börja.
            </p>
            <p className="mt-4 leading-relaxed text-neutral-500">
              Säsongen börjar bra och vi börjar göra mål efter mål, unga spelare
              i truppen visar framfötterna och tar matcherna med storm. Vi
              vinner derby möten och leder tabellen i första halvan av korpen
              säsongen.
            </p>

            <p className="mt-4 leading-relaxed text-neutral-500">
              Andra halvan av säsongen kommer som en smäll, vi tappar enkla
              matcher och spelar lika för mycket för att kunna fortsätta klättra
            </p>

            <p className="mt-4 leading-relaxed text-neutral-500">
              Vi slutar på en 5e plats i tabellen men känner att vi har gjort
              stormsteg!
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-xl">
            <Image
              src="/blue_tell.png"
              alt="Gammalt bollteori lag"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-[50%_20%]"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-xl">
            <Image
              src="/blue_bollteori.png"
              alt="Gammalt bollteori lag"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="font-anton text-4xl uppercase leading-none text-brand-green sm:text-5xl">
              2025
            </h2>
            <p className="mt-6 text-lg font-medium leading-relaxed text-neutral-800">
              2025 anländer och Vi känner oss redo att vinna ligan. Vi var inte
              redo på vad som komma skall..
            </p>
            <p className="mt-4 leading-relaxed text-neutral-500">
              Många nya lag har kommit in, vi är taggade, vi är ju ändå
              veteraner nu tänker vi? säsongen börjar och vi får aldrig igång
              vårt spel, egon har tagit över, vi förlorar derby möten, vi har
              sjunkit till botten. Dom nya lagen smäller oss som en betongvägg,
              det är inte föränn vi får understöd från Andreas i andra halvan av
              säsongen som vi kan börja få in vinsterna på kontot
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-anton text-4xl uppercase leading-none text-brand-green sm:text-5xl">
              2026
            </h2>
            <p className="mt-6 text-lg font-medium leading-relaxed text-neutral-800">
              Försäsongen 2026 började snacket om att byta färger, skaka av oss
              den kassa säsongen som var året innan, som vanligt lämnade många
              efter en fiasko säsong men vi ger oss inte!
            </p>

            <p className="mt-4 leading-relaxed text-neutral-500">
              Vi har länge pratat om att byta färger i laget men har dragit oss
              ifrån det, det är ju ändå vår identitet? dem blåa färgerna betydde
              mycket för oss men det är dags för en förändring. Vi designade upp
              en ny tröja som motståndarna till och med vill ha. Vi fick två nya sponsorer i 
              Generalens hampa och Bilhandlarn i Trollhättan. NU ÄR VI REDO
            </p>

            <p className="mt-4 leading-relaxed text-neutral-500">
              Vi rekryterar mer spelare till laget och får in många spelare av HÖG kvalitet!
              Lagledningen känner att nu är det äntligen vår tur att lyfta
              bucklan.
            </p>
            <p className="mt-4 leading-relaxed text-neutral-500">
                Bollteori har nu spelat första halvan av säsongen och har inte förlorat en enda match...
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-xl">
            <Image
              src="/paulo_smile.jpg"
              alt="Gammalt bollteori lag"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-[50%_20%]"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUsPage;
