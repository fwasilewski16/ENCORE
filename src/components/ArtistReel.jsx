import ArtistSingle from "./ArtistSingle";
import { artists } from "../assets/carouselArtists";

export default function ArtistReel() {
  const singleArray = artists.map((artist) => <ArtistSingle key={artist.id} id={artist.id} artistName={artist.artistName} img={artist.img} />);

  const finalArray = [singleArray, singleArray, singleArray];

  return (
    <div className="min-w-[332px] md:mt-20">
      <p className="m-auto mb-8 max-w-[688px] px-4 text-xl md:mx-0 md:my-10 md:max-w-[60%] lg:px-12">Browse your favourite artists</p>
      <div className="group mb-6 flex max-w-[100vw] overflow-y-hidden overflow-x-scroll bg-pink-300">
        <div className="flex w-auto gap-7 px-3">{finalArray}</div>
      </div>
    </div>
  );
}
