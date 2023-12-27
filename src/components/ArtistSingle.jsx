import { NavLink } from "react-router-dom";
import useCountEvents from "../hooks/useCountEvents";

export default function ArtistSingle(props) {
  const numberOfConcerts = useCountEvents(props.id);

  return (
    <NavLink to={`/ENCORE/artists/${props.id}`} className="w-32 lg:w-48">
      <img src={props.img} alt={props.id} width="900" height="900" className="rounded-xl" />
      <p className="font-semibold">{props.artistName}</p>
      <p className="font-light md:font-normal">{numberOfConcerts} upcoming events</p>
    </NavLink>
  );
}
