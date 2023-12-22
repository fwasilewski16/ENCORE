import { useState } from "react";
import { NavLink } from "react-router-dom";

const imgSrc = "https://firebasestorage.googleapis.com/v0/b/encore-f883d.appspot.com/o/images%2Fcrowd1.png?alt=media&token=89478f27-6cb2-4858-9cb1-3581255ab1ca";
const textMain = "DISCOVER MORE OF YOUR FAVOURITE EVENTS.";
const text = "Enjoying a night out is always a great feeling. With ENCORE's tailored event recommendations, connecting with your scene, no matter your preferences, has never been simpler.";

export default function WelcomePage() {
  const [imageMove, setImageMove] = useState(false);

  return (
    <div className="flex w-full min-w-[332px] flex-col-reverse items-center px-4 py-16 md:h-screen md:flex-row md:py-0 md:pt-20 lg:px-12">
      <div className="flex max-w-[656px] flex-col justify-end gap-8 md:h-full md:w-1/2 md:max-w-none md:pb-8">
        <div className="overflow-hidden">
          <h1 className={`text-4xl font-extrabold transition delay-700 duration-1000 ease-out md:max-w-[24rem] ${imageMove ? "md:translate-y-0" : "md:translate-y-full md:opacity-0"}`}>{textMain}</h1>
        </div>
        <h2 className="font-normal md:max-w-[24rem]">{text}</h2>
        <button className="h-11 w-36 bg-black text-white">
          <NavLink to="events">Browse events</NavLink>
        </button>
      </div>
      <div className="overflow-hidden align-middle md:flex md:h-full md:w-1/2 md:justify-end">
        <img
          src={imgSrc}
          width="656"
          onLoad={() => {
            setImageMove(true);
          }}
          height="875"
          className={`object-cover py-8 transition delay-100 duration-700 ease-out md:h-full ${!imageMove && "md:translate-x-full md:opacity-0"}`}
        />
      </div>
    </div>
  );
}
