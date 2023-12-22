import arrow_right from "../assets/icons/right.png";
import { NavLink } from "react-router-dom";
import useCountEvents from "../hooks/useCountEvents";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "../store";

export default function ArtistSingleComponent(props) {
  const dispatch = useDispatch();

  const [revealData, setRevealData] = useState(false);

  const numberOfConcerts = useCountEvents(props.artist_id);

  function onClick() {
    props.function && dispatch(modalActions.toggleAnimation());
    setTimeout(() => {
      props.function === "artists" && dispatch(modalActions.toggleArtistsWindow());
    }, 500);
  }

  return (
    <NavLink to={`/ENCORE/artists/${props.artist_id}`} onClick={onClick} className={`group flex h-24 min-h-[7rem] w-full justify-between border-b-2 transition duration-200 ${props.function != "artists" && "xl:rounded-xl xl:border-0 xl:hover:shadow-lg"}`}>
      <div className={`flex items-center ${props.function != "artists" && "xl:pl-4"}`}>
        <div className={`h-[88px] w-[88px] ${props.function === "artists" ? "rounded-lg" : "rounded-full"} bg-gray-300`}>
          <img
            src={props.img}
            onLoad={() => {
              setRevealData(true);
            }}
            loading="lazy"
            className={`my-auto ${props.function === "artists" ? "rounded-lg" : "rounded-full"} object-cover transition ${!revealData && "opacity-0"}`}
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
