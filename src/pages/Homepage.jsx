import ArtistReel from "../components/ArtistReel";
import BlogMainPage from "../components/BlogMainPage";
import LivestreamHomepage from "../components/LivestreamHomepage";
import WelcomePage from "../components/WelcomePage";

export default function Homepage() {
  return (
    <div className="min-w-[100px]">
      <WelcomePage />
      <ArtistReel />
      <BlogMainPage />
      <LivestreamHomepage />
    </div>
  );
}
