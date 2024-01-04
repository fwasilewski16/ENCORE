import { NavLink } from "react-router-dom";
import useCountEvents from "../hooks/useCountEvents";
import { useEffect, useRef } from "react";

export default function ArtistSingle(props) {
  const navlink = useRef(null);

  const numberOfConcerts = useCountEvents(props.id);

  useEffect(() => {
    const observerStart = new IntersectionObserver((entries) => {
      const entry = entries[0].isIntersecting;
      entry &&
        setTimeout(() => {
          props.changeDirection("right");
        }, 2000);
    });

    const observerEnd = new IntersectionObserver((entries) => {
      const entry = entries[0].isIntersecting;
      entry &&
        setTimeout(() => {
          props.changeDirection("left");
        }, 2000);
    });

    props.start && observerStart.observe(navlink.current);
    props.end && observerEnd.observe(navlink.current);

    return () => {
      observerStart.disconnect();
      observerEnd.disconnect();
    };
  });

  return (
    <NavLink ref={navlink} to={`/ENCORE/artists/${props.id}`} className="mx-2 w-32 lg:w-40">
      <img src={props.img} alt={props.id} width="900" height="900" className="rounded-xl" />
      <p className="font-semibold">{props.artistName}</p>
      <p className="font-light md:font-normal">{numberOfConcerts} upcoming events</p>
    </NavLink>
  );
}
