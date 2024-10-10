import ArtistSingleComponent from "../components/ArtistSingleComponent";
import Modal from "./Modal";
import { useAppSelector } from "../store/hooks";

export default function MyArtistsWindow(): JSX.Element {
  const artists = useAppSelector((state) => state.account.artists);

  return (
    <Modal modalFunction={"artists"}>
      <div className="max-h-[40rem] min-h-[40rem] w-full rounded-lg bg-white p-3 md:w-[500px]">
        <h2 className="pb-2 text-2xl font-medium">My artists:</h2>
        {artists.length != 0 ? artists.map((artist): JSX.Element => <ArtistSingleComponent img={artist.img} name={artist.name} key={artist._id} artist_id={artist.artist_id} function={"artists"} />) : <p className="mt-4">Nothing to see here</p>}
      </div>
    </Modal>
  );
}
