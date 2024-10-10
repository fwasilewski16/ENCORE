import ArtistReelSingle from "./ArtistReelSingle";
import { artists } from "../assets/carouselArtists";
import { useEffect, useRef, useState } from "react";

function ArtistReel(): JSX.Element {
  const carousel = useRef<HTMLDivElement>(null);
  const requestId = useRef<number | null>(null);

  const [scrollDirection, setScrollDirection] = useState<string>("right");
  const [animationPause, setAnimationPause] = useState<boolean>(false);

  function changeDirection(direction: string): void {
    if (scrollDirection != direction) {
      setScrollDirection(direction);
    }
  }

  function animate(): void {
    if (!animationPause && carousel.current && scrollDirection === "right") {
      carousel.current.scrollBy(1, 0);
    }
    if (!animationPause && carousel.current && scrollDirection === "left") {
      carousel.current.scrollBy(-1, 0);
    }
    requestId.current = requestAnimationFrame(animate);
  }

  useEffect(() => {
    requestAnimationFrame(animate);

    return () => {
      if (requestId.current) {
        cancelAnimationFrame(requestId.current);
      }
    };
  }, [scrollDirection, animationPause]);

  return (
    <div className="min-w-[332px] md:mt-20">
      <p className="m-auto mb-8 max-w-[688px] px-4 font-inter text-xl md:mx-0 md:my-10 md:max-w-[60%] lg:px-12">Browse your favourite artists</p>
      <div className="max-h-[208px] overflow-hidden md:max-h-none">
        <div
          ref={carousel}
          className="mb-6 flex max-w-[100vw] overflow-x-scroll pb-6 md:overflow-x-hidden"
          onTouchStart={(): void => {
            setAnimationPause(true);
          }}
          onTouchEnd={(): void => {
            setTimeout(() => {
              setAnimationPause(false);
            }, 3000);
          }}
          onMouseEnter={(): void => {
            setAnimationPause(true);
          }}
          onMouseLeave={(): void => {
            setAnimationPause(false);
          }}
        >
          <div className="flex w-auto">
            {artists.map(
              (artist): JSX.Element => (
                <ArtistReelSingle key={artist.id + ".1"} id={artist.id} artistName={artist.artistName} img={artist.img} start={artist.id === "taylor_swift"} changeDirection={changeDirection} />
              ),
            )}
            {artists.map(
              (artist): JSX.Element => (
                <ArtistReelSingle key={artist.id + ".2"} id={artist.id} artistName={artist.artistName} img={artist.img} end={artist.id === "pj_harvey"} changeDirection={changeDirection} />
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistReel;
