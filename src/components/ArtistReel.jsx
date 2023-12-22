import ArtistSingle from "./ArtistSingle";
import { artists } from "../assets/carouselArtists";

export default function ArtistReel() {
  return (
    <div className="mt-20 min-w-[332px]">
      <p className="m-auto mb-4 max-w-[688px] px-4 text-2xl md:mx-0 md:my-10 md:max-w-[60%] lg:px-12">Browse your favourite artists</p>
      <div className="group mb-6 flex w-full overflow-hidden">
        <div className="group-hover:pause flex w-auto animate-carousel1 gap-7 px-3">
          {artists.map((artist) => (
            <ArtistSingle key={artist.id} id={artist.id} artistName={artist.artistName} img={artist.img} />
          ))}
        </div>
        <div className="group-hover:pause flex w-auto animate-carousel2 gap-7 px-3">
          {artists.map((artist) => (
            <ArtistSingle key={artist.id} id={artist.id} artistName={artist.artistName} img={artist.img} />
          ))}
        </div>
      </div>
    </div>
  );
}
