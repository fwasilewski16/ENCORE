import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import { useAppSelector } from "../store/hooks";

interface MobileMenuProps {
  animation: boolean;
  exitHandler: () => void;
  setWindowVisible: React.Dispatch<React.SetStateAction<string>>;
}

export default function MobileMenu(props: MobileMenuProps): JSX.Element {
  const loggedIn: boolean = useAppSelector((state): boolean => state.login.loggedIn);

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
          {!loggedIn && (
            <button
              onClick={(): void => {
                props.setWindowVisible("logInWindow");
              }}
              className="h-12 w-32 items-center rounded-full bg-black px-4 text-white"
            >
              Log In
            </button>
          )}
          {loggedIn && (
            <button
              onClick={(): void => {
                props.setWindowVisible("logOutWindow");
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
