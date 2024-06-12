import { NavLink } from "react-router-dom";
import logo from "../assets/logos/logo_large_black.webp";
import twitter from "../assets/icons/twitter.png";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";

export default function Footer() {
  function scrollUp() {
    window.scrollTo(0, 0);
  }

  return (
    <div className="flex w-full min-w-[332px] flex-col items-center bg-black md:max-h-[222px] md:flex-row md:justify-center">
      <div className="w-full max-w-[688px] px-4 md:w-1/2 md:max-w-[344px] md:px-0 md:pr-6 xl:max-w-[30%]">
        <img src={logo} alt="" className="min-w-[102px] max-w-[140px] object-cover" />
        <button className="mb-6 h-11 w-full max-w-[320px] bg-white hover:scale-105 hover:shadow-xl">CONTACT US</button>
      </div>
      <div className="mb-12 flex w-full max-w-[688px] justify-between px-4 md:m-0 md:w-1/2 md:max-w-[344px] md:px-0 md:pl-6 xl:max-w-[30%]">
        <div className="flex w-1/2 flex-col items-center justify-between  md:w-1/2">
          <NavLink className="flex w-full items-start text-white" to="events" onClick={scrollUp}>
            Browse events
          </NavLink>
          <NavLink className="flex w-full items-start text-white" to={"artists"} onClick={scrollUp}>
            Artists
          </NavLink>
          <NavLink className="flex w-full items-start text-white" to={"blog"} onClick={scrollUp}>
            Blog
          </NavLink>
          <NavLink className="flex w-full items-start text-white" to={"streams"} onClick={scrollUp}>
            Live Streams
          </NavLink>
        </div>
        <div className="flex w-1/2 flex-col items-center gap-4 p-4 md:w-1/2">
          <img className="w-8" src={facebook} />
          <img className="w-8" src={instagram} />
          <img className="w-8" src={twitter} />
        </div>
      </div>
    </div>
  );
}
