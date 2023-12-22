import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../store";

function Backdrop(props) {
  const animation = useSelector((state) => state.modal.animation);

  const dispatch = useDispatch();
  return (
    <div
      className={`fixed left-0 right-0 top-0 z-40 h-full bg-black transition duration-500 ${animation ? "opacity-80" : "opacity-0"}`}
      onClick={() => {
        if (props.function === "mobile") {
          dispatch(modalActions.toggleAnimation());
          setTimeout(() => {
            dispatch(modalActions.toggleMobileWindow());
          }, 500);
        }
        if (props.function === "login") {
          dispatch(modalActions.toggleAnimation());
          setTimeout(() => {
            dispatch(modalActions.togglelogInWindow());
          }, 500);
        }
        if (props.function === "logout") {
          dispatch(modalActions.toggleAnimation());
          setTimeout(() => {
            dispatch(modalActions.togglelogOutWindow());
          }, 500);
        }
        if (props.function === "search") {
          dispatch(modalActions.toggleAnimation());
          setTimeout(() => {
            dispatch(modalActions.toggleSearchWindow());
          }, 500);
        }
        if (props.function === "events") {
          dispatch(modalActions.toggleAnimation());
          setTimeout(() => {
            dispatch(modalActions.toggleEventsWindow());
          }, 500);
        }
        if (props.function === "artists") {
          dispatch(modalActions.toggleAnimation());
          setTimeout(() => {
            dispatch(modalActions.toggleArtistsWindow());
          }, 500);
        }
      }}
    />
  );
}

function Content(props) {
  const animation = useSelector((state) => state.modal.animation);
  return <div className={`fixed left-2/4 top-2/4 z-50 w-4/5 -translate-x-1/2 -translate-y-1/2 transition duration-500 md:w-auto ${animation ? "opacity-100" : "opacity-0"}`}>{props.children}</div>;
}

export default function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop function={props.function}>{props.children}</Backdrop>, document.getElementById("overlays"))}
      {ReactDOM.createPortal(<Content>{props.children}</Content>, document.getElementById("overlays"))}
    </>
  );
}
