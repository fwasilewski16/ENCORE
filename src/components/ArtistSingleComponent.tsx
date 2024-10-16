import arrow_right from "../assets/icons/right.png";
import { NavLink } from "react-router-dom";
import useCountEvents from "../hooks/useCountEvents";
import { useState } from "react";

interface ArtistSingleComponentProps {
  img: string;
  name: string;
  artist_id: string;
  function?: string;
  exitHandler?: () => void;
}

export default function ArtistSingleComponent(props: ArtistSingleComponentProps): JSX.Element {
  const [revealData, setRevealData] = useState<boolean>(false);

  const numberOfConcerts: number = useCountEvents(props.artist_id);

  function onClick(): void {
    props.function === "modalWindow" && props.exitHandler;
  }

  return (
    <NavLink to={`/artists/${props.artist_id}`} onClick={onClick} className={`group flex h-24 min-h-[7rem] w-full justify-between border-b-2 transition duration-200 ${props.function === "artistsPage" && "xl:rounded-xl xl:border-0 xl:hover:shadow-lg"}`}>
      <div className={`flex items-center ${props.function === "artistsPage" && "xl:pl-4"}`}>
        <div className={`h-[88px] w-[88px] ${props.function === "artistsPage" ? "rounded-full" : "rounded-lg"} bg-gray-300`}>
          <img
            src={props.img}
            onLoad={(): void => {
              setRevealData(true);
            }}
            loading="lazy"
            className={`my-auto ${props.function === "artistsPage" ? "rounded-full" : "rounded-lg"} object-cover transition duration-500 ${!revealData && "opacity-0"}`}
          />
        </div>
        <div className="flex flex-col justify-around py-3 pl-12 xl:justify-center xl:pl-4">
          <p className="text-xl font-semibold">{props.name}</p>
          <p className={`transition ${!numberOfConcerts && "opacity-0"}`}>{numberOfConcerts} upcoming events</p>
        </div>
      </div>
      <div className="flex items-center xl:hidden">
        <img src={arrow_right} className="h-4" />
      </div>
    </NavLink>
  );
}
