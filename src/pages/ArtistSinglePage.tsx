import { useParams } from "react-router-dom";
import EventSingleComponent from "../components/EventSingleComponent";
import useFetchSingleArtist from "../hooks/useFetchSingleArtist";
import { useState, useEffect } from "react";
import EventSingleLoadingComponent from "../components/EventSingleLoadingComponent";
import { accountActions } from "../store";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Artist, Event } from "../types/types";

export default function ArtistsSinglePage(): JSX.Element {
  const dispatch = useAppDispatch();
  const { artist_id } = useParams<{ artist_id: string }>();

  const artistsList = useAppSelector((state) => state.account.artists);
  const loggedIn = useAppSelector((state) => state.login.loggedIn);

  const { artist, isLoading, error, events }: { artist: Artist | null; isLoading: boolean; error: boolean; events: Event[] } = useFetchSingleArtist(artist_id);
  const [revealData, setRevealData] = useState(false);

  useEffect((): void => {
    window.scrollTo(0, 0);
    setRevealData(false);
  }, [artist_id]);

  const artistSaved = artist_id && artistsList.map((artist) => artist.artist_id).includes(artist_id);

  if (error && !isLoading) {
    return <div className="m-auto mt-32 md:mt-40">Something went wrong</div>;
  }

  if (isLoading) {
    return <div className="m-auto mt-32 md:mt-40">Loading...</div>;
  }

  return (
    <div className="m-auto mt-16 md:mt-20">
      {artist && !isLoading && (
        <div>
          <div className="absolute left-0 right-0 -z-10 hidden h-[660px] overflow-hidden bg-gray-300 opacity-70 blur-2xl md:block md:h-[300px]">
            <img src={artist.img} className={`min-h-[660px] w-full min-w-[660px] transition duration-1000 ${!revealData && "opacity-0"}`} />
          </div>
          <div className="m-auto mx-4 min-w-[332px] items-center bg-white md:mt-2 md:gap-6 md:rounded-xl md:bg-opacity-50">
            <div className="flex flex-col gap-3 py-3 md:mx-4 md:min-h-0 md:max-w-[900px] md:flex-row-reverse md:justify-between">
              <div className="rounded-xl bg-gray-300 md:w-1/3">
                <img src={artist.img} onLoad={() => setRevealData(true)} width="1000" height="1000" className={`rounded-xl transition ${!revealData && "opacity-0"}`} />
              </div>
              <div className="flex w-full flex-col justify-center gap-3 md:w-2/3 md:items-center md:gap-8">
                <h2 className={`h-12 text-5xl ${!revealData && "w-1/2 rounded-md bg-gray-300"}`}>{revealData && artist.name}</h2>
                <button
                  disabled={!loggedIn}
                  onClick={() => {
                    if (!artistSaved) {
                      dispatch(accountActions.addArtist(artist));
                    } else {
                      dispatch(accountActions.removeArtist(artist.artist_id));
                    }
                  }}
                  className={`relative h-10 w-64 rounded-lg bg-black font-semibold text-white transition ${artistSaved ? "bg-green-500" : "bg-black"}`}
                >
                  {!loggedIn && (
                    <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center rounded-lg bg-white bg-opacity-80 backdrop-blur-sm">
                      <p className="text-sm text-black">Log in to add to your list</p>
                    </div>
                  )}
                  {!artistSaved ? "FOLLOW ARTIST" : "UNFOLLOW"}
                </button>
              </div>
            </div>
          </div>
          <div className="mb-6 px-4 md:max-w-[900px]">
            <h2 className="mb-1 mt-4 text-xl font-bold">About the artist:</h2>
            <p className={`min-h-[168px] w-full text-justify leading-6 transition ${!revealData && "opacity-0"}`}>{artist.bio}</p>
          </div>
          <div className="mb-6 px-4">
            <h2 className="mb-4 text-2xl font-bold">Upcoming events:</h2>
            {isLoading && <EventSingleLoadingComponent />}
            {events.length > 0 && events.map((event) => <EventSingleComponent name={event.artist_name} event_id={event.event_id} key={event.event_id} date={event.date} img={event.img} venue={event.venue} city={event.city} />)}
          </div>
        </div>
      )}
    </div>
  );
}
