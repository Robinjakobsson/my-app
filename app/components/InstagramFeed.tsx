import Script from "next/script";

const InstagramFeed = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          
          <h2 className="font-anton text-4xl uppercase text-brand-green md:text-5xl">
            Följ oss på Instagram
          </h2>
        </div>

        <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />

        <div
          className="elfsight-app-bf891921-8e64-42fd-8eb6-d2a674e77b40"
          data-elfsight-app-lazy
        />
      </div>
    </section>
  );
};

export default InstagramFeed;
