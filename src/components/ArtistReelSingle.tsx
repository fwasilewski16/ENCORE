import { NavLink } from "react-router-dom";
import useCountEvents from "../hooks/useCountEvents";
import { useEffect, useRef } from "react";

interface ArtistSingleProps {
  id: string;
  artistName: string;
  img: string;
  start?: boolean;
  end?: boolean;
  changeDirection: (direction: string) => void;
}

export default function ArtistSingle(props: ArtistSingleProps): JSX.Element {
  const navlink = useRef<HTMLAnchorElement>(null);

  const numberOfConcerts: number = useCountEvents(props.id);

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

    props.start && navlink.current && observerStart.observe(navlink.current);
    props.end && navlink.current && observerEnd.observe(navlink.current);

    return () => {
      observerStart.disconnect();
      observerEnd.disconnect();
    };
  }, []);

  return (
    <NavLink ref={navlink} to={`/artists/${props.id}`} className="mx-2 w-36 lg:w-48">
      <img src={props.img} alt={props.id} width="600" height="600" className="rounded-xl" />
      <p className="font-inter font-semibold">{props.artistName}</p>
      <p className="font-inter font-light md:font-normal">{numberOfConcerts} upcoming events</p>
    </NavLink>
  );
}
