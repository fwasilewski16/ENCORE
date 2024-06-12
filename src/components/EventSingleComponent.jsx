import { useState } from "react";
import arrow_right from "../assets/icons/right.png";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../store";

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function EventSingleComponent(props) {
  const [revealData, setRevealData] = useState(false);

  const dispatch = useDispatch();

  const dateUTC = new Date(props.date);
  const date_time = `${weekDays[dateUTC.getDay()]} ${dateUTC.getDate()} ${months[dateUTC.getMonth()]} ${dateUTC.getFullYear()} ${dateUTC.getUTCHours() + 1}:${dateUTC.getUTCMinutes()}${new Date(props.date).getMinutes() === 0 ? "0" : ""}`;

  function onClick() {
    props.function && dispatch(modalActions.toggleAnimation());
    setTimeout(() => {
      props.function === "search" && dispatch(modalActions.toggleSearchWindow());
      props.function === "events" && dispatch(modalActions.toggleEventsWindow());
    }, 500);
  }

  return (
    <NavLink to={`/events/${props.event_id}`} onClick={onClick} className="flex min-h-[8rem] w-full justify-between border-b-2">
      <div className="flex">
        <div className="m-auto h-24 w-24 min-w-[96px] rounded-lg bg-gray-300">
          <img
            src={props.img}
            onLoad={() => {
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
