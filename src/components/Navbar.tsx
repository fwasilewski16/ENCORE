import { NavLink } from "react-router-dom";
import useScroll from "../hooks/useScroll";
import logo_small from "../assets/logos/logo_small.webp";
import search_icon from "../assets/icons/search.png";
import user_icon from "../assets/icons/profile-user.png";
import menu_icon from "../assets/icons/menu.png";
import { accountWindowActions } from "../store";
import MobileMenu from "../UI/MobileMenu";
import useScreenWidth from "../hooks/useScreenWidth";
import NavbarNavlink from "../UI/NavbarNavlink";
import LogInWindow from "../UI/LogInWindow";
import LogOutWindow from "../UI/LogOutWindow";
import AccountWindow from "../UI/AccountWindow";
import SearchWindow from "../UI/SearchWindow";
import MyEventsWindow from "../UI/MyEventsWindow";
import MyArtistsWindow from "../UI/MyArtistsWindow";
import { useAppDispatch } from "../store/hooks";
import { useState } from "react";

const liClass: string = "flex h-full items-center";

export default function Navbar(): JSX.Element {
  const dispatch = useAppDispatch();

  const scrollDirectionDown: boolean = useScroll();

  const [animation, setAnimation] = useState<boolean>(false);

  const [windowVisible, setWindowVisible] = useState<string>("none");

  const [logInWindowVisible, setLogInWindowVisible] = useState<boolean>(false);
  const [logOutWindowVisible, setLogOutWindowVisible] = useState<boolean>(false);
  const [searchWindowVisible, setSearchWindowVisible] = useState<boolean>(false);
  const [accountWindowVisible, setAccountWindowVisible] = useState<boolean>(false);
  const [accountWindowAnimation, setAccountWindowAnimation] = useState<boolean>(false);
  const [eventsWindowVisible, setEventsWindowVisible] = useState<boolean>(false);
  const [artistsWindowVisible, setArtistsWindowVisible] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  function exitHandler(): void {
    setAnimation(false);
    setTimeout((): void => {
      setWindowVisible("none");
    }, 500);
  }

  useScreenWidth(windowVisible, exitHandler);

  return (
    <div className={`fixed top-0 z-50 flex h-16 w-full justify-between bg-white bg-opacity-40 px-4 shadow-md backdrop-blur-sm transition duration-500 ease-in-out md:mt-0 md:h-20 lg:px-12 ${animation ? "-translate-y-full" : ""} ${scrollDirectionDown && !accountWindowVisible ? "-translate-y-24" : ""}`}>
      {windowVisible === "mobileMenu" && <MobileMenu animation={animation} exitHandler={exitHandler} loggedIn={loggedIn} setWindowVisible={setWindowVisible} />}
      {windowVisible === "logInWindow" && <LogInWindow animation={animation} exitHandler={exitHandler} setLoggedIn={setLoggedIn} />}
      {windowVisible === "logOutWindow" && <LogOutWindow animation={animation} exitHandler={exitHandler} setLoggedIn={setLoggedIn} />}
      {windowVisible === "searchWindow" && <SearchWindow animation={animation} exitHandler={exitHandler} />}
      {eventsWindowVisible && (
        <MyEventsWindow
          animation={animation}
          exitHandler={() => {
            setAnimation(false);
            setTimeout((): void => {
              setEventsWindowVisible(false);
            }, 500);
          }}
        />
      )}
      {artistsWindowVisible && (
        <MyArtistsWindow
          animation={animation}
          exitHandler={() => {
            setAnimation(false);
            setTimeout((): void => {
              setArtistsWindowVisible(false);
            }, 500);
          }}
        />
      )}
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
        {!loggedIn && (
          <li className={liClass}>
            <button
              className="hidden h-9 items-center rounded-full bg-black px-4 font-inter text-white md:m-4 md:flex xl:m-8"
              onClick={(): void => {
                setLogInWindowVisible(true);
                setTimeout(() => {
                  setAnimation(true);
                }, 1);
              }}
            >
              Log In
            </button>
          </li>
        )}
        <li className={liClass}>
          {loggedIn && (
            <div className="mr-4 flex h-full flex-col items-center xl:mr-8">
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
              {accountWindowVisible && <AccountWindow animation={accountWindowAnimation} setAccountWindowAnimation={setAccountWindowAnimation} setAccountWindowVisible={setAccountWindowVisible} setLogOutWindowVisible={setLogOutWindowVisible} setAnimation={setAnimation} setEventsWindowVisible={setEventsWindowVisible} setArtistsWindowVisible={setArtistsWindowVisible} />}
            </div>
          )}
          <div className="flex h-full items-center">
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
                  setTimeout(() => {
                    accountWindowVisible && dispatch(accountWindowActions.toggleAccountWindow());
                  }, 499);
                }}
              />
            </button>
          </div>
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
                  setTimeout((): void => {
                    accountWindowVisible && dispatch(accountWindowActions.toggleAccountWindow());
                  }, 499);
                }}
              />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
