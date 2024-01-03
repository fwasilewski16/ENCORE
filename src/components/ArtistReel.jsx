import ArtistSingle from "./ArtistSingle";
import { artists } from "../assets/carouselArtists";
import { useEffect, useRef, useState } from "react";

export default function ArtistReel() {
  const carousel = useRef(null);
  const requestId = useRef(null);

  const [scrollDirection, setScrollDirection] = useState("right");

  function changeDirection(direction) {
    if (scrollDirection != direction) {
      setScrollDirection(direction);
    }
  }

  const animate = () => {
    if (carousel.current && scrollDirection === "right") {
      carousel.current.scrollBy(1, 0);
    }
    if (carousel.current && scrollDirection === "left") {
      carousel.current.scrollBy(-1, 0);
    }
    requestId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(requestId.current);
    };
  }, [scrollDirection]);

  return (
    <div className="min-w-[332px] md:mt-20">
      <p className="m-auto mb-8 max-w-[688px] px-4 text-xl md:mx-0 md:my-10 md:max-w-[60%] lg:px-12">Browse your favourite artists</p>
      <div className="max-h-[176px] overflow-hidden md:max-h-[208px]">
        <div ref={carousel} className="mb-6 flex max-w-[100vw] overflow-x-scroll pb-6 md:overflow-x-hidden">
          <div className="flex w-auto">
            {artists.map((artist) => (
              <ArtistSingle key={artist.id} id={artist.id} artistName={artist.artistName} img={artist.img} start={artist.id === "taylor_swift" && true} changeDirection={changeDirection} />
            ))}
            {artists.map((artist) => (
              <ArtistSingle key={artist.id} id={artist.id} artistName={artist.artistName} img={artist.img} end={artist.id === "pj_harvey" && true} changeDirection={changeDirection} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
