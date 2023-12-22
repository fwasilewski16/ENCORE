import { useParams } from "react-router-dom";
import TopTenVenues from "../blog_articles/TopTenVenues";
import BehindTheScenes from "../blog_articles/BehindTheScenes";
import { useEffect } from "react";
import ConcertFashion from "../blog_articles/ConcertFashion";
import EvolutionOfMusicFestivals from "../blog_articles/EvolutionOfMusicFestivals";

import { blogs } from "../assets/blogs";

export default function BlogSinglePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { blog_id } = useParams();

  switch (blog_id) {
    case "top_10_venues":
      return <TopTenVenues image={blogs[0].image} />;
    case "behind_the_scenes":
      return <BehindTheScenes image={blogs[1].image} />;
    case "concert_fashion":
      return <ConcertFashion image={blogs[2].image} />;
    case "evolution_of_music_festivals":
      return <EvolutionOfMusicFestivals image={blogs[3].image} />;
  }
}
