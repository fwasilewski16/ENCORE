import { useEffect } from "react";
import HomepageWelcomePage from "../components/HomepageWelcomePage";
import HomepageArtistReel from "../components/HomepageArtistReel";
import HomepageBlog from "../components/HomepageBlog";
import HomepageLivestream from "../components/HomepageLivestream";

export default function Homepage() {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div className="min-w-[100px]">
      <HomepageWelcomePage />
      <HomepageArtistReel />
      <HomepageBlog />
      <HomepageLivestream />
    </div>
  );
}
