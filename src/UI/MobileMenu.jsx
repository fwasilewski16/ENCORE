import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../store";

export default function MobileMenu() {
  const dispatch = useDispatch();

  const loggedIn = useSelector((state) => state.login.loggedIn);

  return (
    <Modal function={"mobile"}>
      <div className="mx-auto flex flex-col items-center rounded-lg bg-white px-4">
        <NavLink
          to="events"
          className="w-full border-b-2 py-6 text-center text-2xl"
          onClick={() => {
            dispatch(modalActions.toggleMobileWindow());
            dispatch(modalActions.toggleAnimation());
          }}
        >
          Browse events
        </NavLink>
        <NavLink
          to="artists"
          className="w-full border-b-2 py-6 text-center text-2xl"
          onClick={() => {
            dispatch(modalActions.toggleMobileWindow());
            dispatch(modalActions.toggleAnimation());
          }}
        >
          Artists
        </NavLink>
        <NavLink
          to="blog"
          className="w-full border-b-2 py-6 text-center text-2xl"
          onClick={() => {
            dispatch(modalActions.toggleMobileWindow());
            dispatch(modalActions.toggleAnimation());
          }}
        >
          Blog
        </NavLink>
        <NavLink
          to="streams"
          className="w-full border-b-2 py-6 text-center text-2xl"
          onClick={() => {
            dispatch(modalActions.toggleMobileWindow());
            dispatch(modalActions.toggleAnimation());
          }}
        >
          Live Streams
        </NavLink>
        <div className="my-6 flex w-full justify-center gap-12 ">
          <button
            className="h-12 w-32 rounded-full border-2 border-black bg-white font-bold"
            onClick={() => {
              dispatch(modalActions.toggleAnimation());
              setTimeout(() => {
                dispatch(modalActions.toggleMobileWindow());
              }, 500);
            }}
          >
            BACK
          </button>
          {!loggedIn && (
            <button
              onClick={() => {
                dispatch(modalActions.togglelogInWindow());
                dispatch(modalActions.toggleMobileWindow());
              }}
              className="h-12 w-32 items-center rounded-full bg-black px-4 text-white"
            >
              Log In
            </button>
          )}
          {loggedIn && (
            <button
              onClick={() => {
                dispatch(modalActions.togglelogOutWindow());
                dispatch(modalActions.toggleMobileWindow());
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
