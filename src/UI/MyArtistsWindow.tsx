import ArtistSingleComponent from "../components/ArtistSingleComponent";
import Modal from "./Modal";
import { useAppSelector } from "../store/hooks";

interface MyArtistsWindowProps {
  animation: boolean;
  exitHandler: () => void;
}

export default function MyArtistsWindow(props: MyArtistsWindowProps): JSX.Element {
  const artists = useAppSelector((state) => state.account.artists);

  return (
    <Modal animation={props.animation} exitHandler={props.exitHandler}>
      <div className="max-h-[40rem] min-h-[40rem] w-full rounded-lg bg-white p-3 md:w-[500px]">
        <h2 className="pb-2 text-2xl font-medium">My artists:</h2>
        {artists.length != 0 ? artists.map((artist): JSX.Element => <ArtistSingleComponent img={artist.img} name={artist.name} key={artist._id} artist_id={artist.artist_id} function={"modalWindow"} exitHandler={props.exitHandler} />) : <p className="mt-4">Nothing to see here</p>}
      </div>
    </Modal>
  );
}
