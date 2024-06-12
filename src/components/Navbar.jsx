import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useScroll from "../hooks/useScroll";
import logo_small from "../assets/logos/logo_small.webp";
import search_icon from "../assets/icons/search.png";
import user_icon from "../assets/icons/profile-user.png";
import menu_icon from "../assets/icons/menu.png";
import { accountWindowActions, modalActions } from "../store";
import MobileMenu from "../UI/MobileMenu";
import useScreenWidth from "../hooks/useScreenWidth";
import NavbarNavlink from "../UI/NavbarNavlink";
import LogInWindow from "../UI/LogInWindow";
import LogOutWindow from "../UI/LogOutWindow";
import AccountWindow from "../UI/AccountWindow";
import SearchWindow from "../UI/SearchWindow";
import MyEventsWindow from "../UI/MyEventsWindow";
import MyArtistsWindow from "../UI/MyArtistsWindow";

const liClass = "flex h-full items-center";

export default function Navbar() {
  const dispatch = useDispatch();

  useScreenWidth();

  const scrollDirectionDown = useScroll();
  const { mobileMenuVisible, logInWindowVisible, logOutWindowVisible, searchWindowVisible, eventsWindowVisible, artistsWindowVisible, animation } = useSelector((state) => state.modal);
  const accountWindowVisible = useSelector((state) => state.accountWindow.accountWindowVisible);
  const loggedIn = useSelector((state) => state.login.loggedIn);

  return (
    <div className={`fixed top-0 z-50 flex h-16 w-full justify-between bg-white bg-opacity-40 px-4 shadow-md backdrop-blur-sm transition duration-500 ease-in-out md:mt-0 md:h-20 lg:px-12 ${animation ? "-translate-y-full" : ""} ${scrollDirectionDown && !accountWindowVisible ? "-translate-y-24" : ""}`}>
      {mobileMenuVisible && <MobileMenu />}
      {logInWindowVisible && <LogInWindow />}
      {logOutWindowVisible && <LogOutWindow />}
      {searchWindowVisible && <SearchWindow />}
      {eventsWindowVisible && <MyEventsWindow />}
      {artistsWindowVisible && <MyArtistsWindow />}
      <div className={`flex items-center transition duration-500 `}>
        <NavLink to="/">
          <img src={logo_small} className="max-h-8" />
        </NavLink>
      </div>
      <ul className={`flex items-center transition duration-500`}>
        <NavbarNavlink function={"Browse events"} to={"events"} />
        <NavbarNavlink function={"Artists"} to={"artists"} />
        <NavbarNavlink function={"Blog"} to={"blog"} />
        <NavbarNavlink function={"Live Streams"} to={"streams"} />
        {!loggedIn && (
          <li className={liClass}>
            <button
              className="hidden h-9 items-center rounded-full bg-black px-4 font-inter text-white md:m-4 md:flex xl:m-8"
              onClick={() => {
                dispatch(modalActions.togglelogInWindow());
                setTimeout(() => {
                  dispatch(modalActions.toggleAnimation());
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
                  onClick={() => {
                    if (!accountWindowVisible) {
                      dispatch(accountWindowActions.toggleAccountWindow());
                      setTimeout(() => {
                        dispatch(accountWindowActions.toggleAnimation());
                      }, 1);
                    } else {
                      dispatch(accountWindowActions.toggleAnimation());
                      setTimeout(() => {
                        dispatch(accountWindowActions.toggleAccountWindow());
                      }, 500);
                    }
                  }}
                  className="max-h-9 rounded-full"
                />
              </button>
              {accountWindowVisible && <AccountWindow />}
            </div>
          )}
          <div className="flex h-full items-center">
            <button>
              <img
                src={search_icon}
                className="max-h-9 rounded-full"
                onClick={() => {
                  dispatch(modalActions.toggleSearchWindow());
                  accountWindowVisible && dispatch(accountWindowActions.toggleAnimation());
                  setTimeout(() => {
                    dispatch(modalActions.toggleAnimation());
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
                onClick={() => {
                  dispatch(modalActions.toggleMobileWindow());
                  accountWindowVisible && dispatch(accountWindowActions.toggleAnimation());
                  setTimeout(() => {
                    dispatch(modalActions.toggleAnimation());
                  }, 1);
                  setTimeout(() => {
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
