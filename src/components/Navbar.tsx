import { NavLink } from "react-router-dom";
import useScroll from "../hooks/useScroll";
import logo_small from "../assets/logos/logo_small.webp";
import search_icon from "../assets/icons/search.png";
import user_icon from "../assets/icons/profile-user.png";
import menu_icon from "../assets/icons/menu.png";
import MobileMenu from "../UI/MobileMenu";
import useScreenWidth from "../hooks/useScreenWidth";
import NavbarNavlink from "../UI/NavbarNavlink";
import LogInWindow from "../UI/LogInWindow";
import LogOutWindow from "../UI/LogOutWindow";
import AccountWindow from "../UI/AccountWindow";
import SearchWindow from "../UI/SearchWindow";
import MyEventsWindow from "../UI/MyEventsWindow";
import MyArtistsWindow from "../UI/MyArtistsWindow";
import { useState } from "react";
import { useAppSelector } from "../store/hooks";
import LogInOutButton from "../UI/LogInOutButton";

export default function Navbar(): JSX.Element {
  const scrollDirectionDown: boolean = useScroll();

  const [animation, setAnimation] = useState<boolean>(false);

  const [windowVisible, setWindowVisible] = useState<string>("none");

  const [accountWindowVisible, setAccountWindowVisible] = useState<boolean>(false);
  const [accountWindowAnimation, setAccountWindowAnimation] = useState<boolean>(false);

  const loggedIn: boolean = useAppSelector((state): boolean => state.login.loggedIn);

  function exitHandler(): void {
    setAnimation(false);
    setTimeout((): void => {
      setWindowVisible("none");
    }, 500);
  }

  useScreenWidth(windowVisible, exitHandler);

  return (
    <div className={`fixed top-0 z-50 flex h-16 w-full justify-between bg-white bg-opacity-50 px-4 shadow-md backdrop-blur-sm transition duration-500 md:h-20 lg:px-12 ${animation ? "-translate-y-full" : ""} ${scrollDirectionDown && !accountWindowVisible ? "-translate-y-24" : ""}`}>
      {windowVisible === "mobileMenu" && <MobileMenu animation={animation} exitHandler={exitHandler} setWindowVisible={setWindowVisible} />}
      {windowVisible === "logInWindow" && <LogInWindow animation={animation} exitHandler={exitHandler} />}
      {windowVisible === "logOutWindow" && <LogOutWindow animation={animation} exitHandler={exitHandler} />}
      {windowVisible === "searchWindow" && <SearchWindow animation={animation} exitHandler={exitHandler} />}
      {windowVisible === "eventsWindow" && <MyEventsWindow animation={animation} exitHandler={exitHandler} />}
      {windowVisible === "artistsWindow" && <MyArtistsWindow animation={animation} exitHandler={exitHandler} />}
      <div className={`flex items-center transition duration-500 `}>
        <NavLink to="/">
          <img src={logo_small} className="max-h-8" />
        </NavLink>
      </div>
      <ul className={`flex items-center transition duration-500`}>
        <NavbarNavlink action={"Browse events"} to={"events"} />
        <NavbarNavlink action={"Artists"} to={"artists"} />
        <NavbarNavlink action={"Blog"} to={"blog"} />
        <NavbarNavlink action={"Live Streams"} to={"streams"} />
        {loggedIn ? <LogInOutButton action={"Log Out"} setWindowVisible={setWindowVisible} setAnimation={setAnimation} /> : <LogInOutButton action={"Log In"} setWindowVisible={setWindowVisible} setAnimation={setAnimation} />}
        {loggedIn && (
          <li className="mr-4 flex h-full flex-col items-center xl:mr-8">
            <button className="my-auto md:relative">
              <img
                src={user_icon}
                onClick={(): void => {
                  if (!accountWindowVisible) {
                    setAccountWindowVisible(true);
                    setTimeout(() => {
                      setAccountWindowAnimation(true);
                    }, 1);
                  } else {
                    setAccountWindowAnimation(false);
                    setTimeout(() => {
                      setAccountWindowVisible(false);
                    }, 500);
                  }
                }}
                className="max-h-9 rounded-full"
              />
            </button>
            {accountWindowVisible && <AccountWindow animation={accountWindowAnimation} setAccountWindowAnimation={setAccountWindowAnimation} setAccountWindowVisible={setAccountWindowVisible} setWindowVisible={setWindowVisible} setAnimation={setAnimation} />}
          </li>
        )}
        <li className="flex h-full items-center">
          <button>
            <img
              src={search_icon}
              className="max-h-9 rounded-full"
              onClick={(): void => {
                setWindowVisible("searchWindow");
                accountWindowVisible && setAccountWindowVisible(false);
                setTimeout((): void => {
                  setAnimation(true);
                }, 1);
              }}
            />
          </button>
        </li>
        <li>
          <div className="ml-4 flex h-full items-center md:hidden">
            <button>
              <img
                src={menu_icon}
                className="max-h-9"
                onClick={(): void => {
                  setWindowVisible("mobileMenu");
                  accountWindowVisible && setAccountWindowVisible(false);
                  setTimeout((): void => {
                    setAnimation(true);
                  }, 1);
                }}
              />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
