import { useState } from "react";
import arrow_right from "../assets/icons/right.png";
import { NavLink } from "react-router-dom";

const weekDays: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

interface EventSingleComponentProps {
  name: string;
  event_id: string;
  date: string;
  img: string;
  venue: string;
  city: string;
  function: string;
  exitHandler?: () => void;
}

export default function EventSingleComponent(props: EventSingleComponentProps): JSX.Element {
  const [revealData, setRevealData] = useState<boolean>(false);

  const dateUTC: Date = new Date(props.date);
  const date_time: string = `${weekDays[dateUTC.getDay()]} ${dateUTC.getDate()} ${months[dateUTC.getMonth()]} ${dateUTC.getFullYear()} ${dateUTC.getUTCHours() + 1}:${dateUTC.getUTCMinutes()}${new Date(props.date).getMinutes() === 0 ? "0" : ""}`;

  function onClick(): void {
    props.exitHandler && props.exitHandler();
  }

  return (
    <NavLink to={`/events/${props.event_id}`} onClick={onClick} className="flex min-h-[8rem] w-full justify-between border-b-2">
      <div className="flex">
        <div className="m-auto h-24 w-24 min-w-[96px] rounded-lg bg-gray-300">
          <img
            src={props.img}
            onLoad={(): void => {
              setRevealData(true);
            }}
            className={`rounded-lg transition ${!revealData && "opacity-0"}`}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-around py-3 pl-12">
          <p className="font-semibold">{props.name}</p>
          <p>{date_time}</p>
          <p>
            <span className="font-semibold">{props.venue},</span> <span className="font-semibold text-gray-500">{props.city}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <img src={arrow_right} className="h-4 transition group-hover:scale-125" />
      </div>
    </NavLink>
  );
}
