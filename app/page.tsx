import HeroSection from "./components/hero/HeroSection";
import TopScorers from "./components/home/TopScorers";
import AboutTeaser from "./components/home/AboutTeaser";
import InstagramFeed from "./components/InstagramFeed";
import SponsorStrip from "./components/home/SponsorStrip";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TopScorers />
      <AboutTeaser />
      <InstagramFeed />
      <SponsorStrip />
    </div>
  );
}
