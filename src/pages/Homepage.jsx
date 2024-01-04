import { useEffect } from "react";
import ArtistReel from "../components/ArtistReel";
import BlogMainPage from "../components/BlogMainPage";
import LivestreamHomepage from "../components/LivestreamHomepage";
import WelcomePage from "../components/WelcomePage";

export default function Homepage() {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div className="min-w-[100px]">
      <WelcomePage />
      <ArtistReel />
      <BlogMainPage />
      <LivestreamHomepage />
    </div>
  );
}
