import { useState } from "react";

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function LivestreamHomepageSingle(props) {
  const [revealData, setRevealData] = useState(false);

  const dateUTC = new Date(props.date);
  const date = `${weekDays[dateUTC.getDay()]} ${dateUTC.getDate()} ${months[dateUTC.getMonth()]} ${dateUTC.getFullYear()}`;
  const time = `${dateUTC.getUTCHours() + 1}:${dateUTC.getUTCMinutes()}0 BST`;

  return (
    <div className="flex h-24 min-h-[8rem] w-full justify-between border-b-2">
      <div className="flex flex-col justify-around py-3">
        <p className="font-semibold">{props.name}</p>
        <p>{date}</p>
        <p>{time}</p>
      </div>
      <div className="my-auto h-24 w-24 overflow-hidden rounded-lg bg-gray-300">
        <img
          src={props.image}
          onLoad={() => {
            setRevealData(true);
          }}
          className={`rounded-lg transition ${!revealData && "opacity-0"}`}
        />
      </div>
    </div>
  );
}
