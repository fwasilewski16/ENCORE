import { NavLink } from "react-router-dom";
import Modal from "./Modal";

interface MobileMenuProps {
  animation: boolean;
  exitHandler: () => void;
  loggedIn: boolean;
  setLogInWindowVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setMobileMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setLogOutWindowVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileMenu(props: MobileMenuProps): JSX.Element {
  return (
    <Modal animation={props.animation} exitHandler={props.exitHandler}>
      <div className="mx-auto flex flex-col items-center rounded-lg bg-white px-4">
        <NavLink to="events" className="w-full border-b-2 py-6 text-center text-2xl" onClick={props.exitHandler}>
          Browse events
        </NavLink>
        <NavLink to="artists" className="w-full border-b-2 py-6 text-center text-2xl" onClick={props.exitHandler}>
          Artists
        </NavLink>
        <NavLink to="blog" className="w-full border-b-2 py-6 text-center text-2xl" onClick={props.exitHandler}>
          Blog
        </NavLink>
        <NavLink to="streams" className="w-full border-b-2 py-6 text-center text-2xl" onClick={props.exitHandler}>
          Live Streams
        </NavLink>
        <div className="my-6 flex w-full justify-center gap-12 ">
          <button className="h-12 w-32 rounded-full border-2 border-black bg-white font-bold" onClick={props.exitHandler}>
            BACK
          </button>
          {!props.loggedIn && (
            <button
              onClick={(): void => {
                props.setMobileMenuVisible(false);
                props.setLogInWindowVisible(true);
              }}
              className="h-12 w-32 items-center rounded-full bg-black px-4 text-white"
            >
              Log In
            </button>
          )}
          {props.loggedIn && (
            <button
              onClick={(): void => {
                props.setLogOutWindowVisible(true);
                props.setMobileMenuVisible(false);
              }}
              className="h-12 w-32 items-center rounded-full bg-black px-4 text-white"
            >
              Log Out
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
}
