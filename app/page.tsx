import HeroSection from "./components/hero/HeroSection";
import StatBand from "./components/home/StatBand";
import TopScorers from "./components/home/TopScorers";
import AboutTeaser from "./components/home/AboutTeaser";
import InstagramFeed from "./components/InstagramFeed";
import SponsorStrip from "./components/home/SponsorStrip";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatBand />
      <TopScorers />
      <AboutTeaser />
      <InstagramFeed />
      <SponsorStrip />
    </div>
  );
}
