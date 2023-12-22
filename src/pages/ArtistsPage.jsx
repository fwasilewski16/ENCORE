import useFetchArtists from "../hooks/useFetchArtists";
import ArtistSingleComponent from "../components/ArtistSingleComponent";

import { useState, useEffect } from "react";
import ArtistSingleLoadingComponent from "../components/ArtistSingleLoadingComponent";

const loadingArray = [<ArtistSingleLoadingComponent key={0} />, <ArtistSingleLoadingComponent key={1} />, <ArtistSingleLoadingComponent key={2} />, <ArtistSingleLoadingComponent key={3} />];

export default function ArtistsPage() {
  const [filterInput, setFilterInput] = useState("");
  const [filter, setFilter] = useState("");

  const [artists, isLoading, error] = useFetchArtists(filter);

  function filterHandler(event) {
    setFilterInput(event.target.value);
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      setFilter(filterInput);
    }, 750);

    return () => {
      clearTimeout(timer);
    };
  }, [filterInput]);

  return (
    <div className="m-auto mt-16 w-full min-w-[332px] max-w-[688px] items-center px-4 md:mx-auto md:mt-20 md:px-0 xl:max-w-[60%]">
      <h2 className="py-6 text-4xl font-extrabold">Browse artists</h2>
      <div>
        <input className="mb-6 h-10 w-full rounded-full border-2 border-black pl-4 text-xl font-medium leading-10 placeholder:text-base placeholder:font-normal xl:w-[500px]" placeholder="SEARCH ARTISTS" onChange={filterHandler} value={filterInput} />
        {filterInput != "" && (
          <button
            className="px-3 text-sm"
            onClick={() => {
              setFilterInput("");
              setFilter("");
            }}
          >
            CLEAR
          </button>
        )}
      </div>
      <div className="mb-12 flex flex-wrap">
        {isLoading
          ? loadingArray
          : artists.map((artist) => (
              <div className="w-full xl:w-1/2">
                <ArtistSingleComponent img={artist.img} name={artist.name} key={artist._id} artist_id={artist.artist_id} />
              </div>
            ))}
      </div>
      {!isLoading && artists.length === 0 && <p className="mt-12 text-center">No results</p>}
    </div>
  );
}
