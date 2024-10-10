import { useState } from "react";
import { NavLink } from "react-router-dom";
import crowdImage from "../assets/images/crowd.webp";

const textMain: string = "DISCOVER MORE OF YOUR FAVOURITE EVENTS.";
const text: string = "Enjoying a night out is always a great feeling. With ENCORE's tailored event recommendations, connecting with your scene, no matter your preferences, has never been simpler.";

export default function WelcomePage(): JSX.Element {
  const [imageMove, setImageMove] = useState<boolean>(false);

  return (
    <div className="flex w-full min-w-[332px] flex-col-reverse items-center px-4 pb-16 pt-16 md:h-screen md:flex-row md:py-0 md:pt-20 lg:px-12">
      <div className="flex max-w-[656px] flex-col justify-end gap-8 md:h-full md:w-1/2 md:max-w-none md:pb-8">
        <div className="overflow-hidden">
          <h1 className={`font-inter text-3xl font-extrabold transition delay-700 duration-1000 ease-out md:max-w-[24rem] ${imageMove ? "translate-y-0" : "translate-y-full opacity-0"}`}>{textMain}</h1>
        </div>
        <h2 className="font-inter font-normal md:max-w-[24rem]">{text}</h2>
        <button className="h-11 w-36 rounded-lg bg-black font-inter text-white">
          <NavLink
            to="events"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Browse events
          </NavLink>
        </button>
      </div>
      <div className="justify-end overflow-hidden py-8 align-middle md:flex md:h-full md:w-1/2">
        <img
          src={crowdImage}
          alt="Crowd in front of a stage"
          width="656"
          height="875"
          onLoad={(): void => {
            setImageMove(true);
          }}
          className={`min-h-full object-cover transition delay-100 duration-700 ease-out md:h-full md:w-auto ${!imageMove && "opacity-0 md:translate-x-full"}`}
        />
      </div>
    </div>
  );
}
