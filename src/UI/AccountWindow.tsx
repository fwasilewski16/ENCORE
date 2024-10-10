import { useDispatch, useSelector } from "react-redux";
import { accountWindowActions, modalActions } from "../store";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export default function AccountWindow(): JSX.Element {
  const dispatch = useAppDispatch();

  const animation = useAppSelector((state) => state.accountWindow.animation);

  return (
    <div className={`absolute left-0 right-0 top-16 overflow-hidden rounded-b-lg md:left-auto md:right-auto md:top-[86px] md:rounded-lg`}>
      <div className={`flex w-full flex-col rounded-b-lg border-2 bg-white p-6 transition duration-500 ${!animation && "-translate-y-full"} md:rounded-lg`}>
        <button
          className="w-full border-b-2 pb-4 text-center md:pt-4"
          onClick={(): void => {
            dispatch(accountWindowActions.toggleAnimation());
            dispatch(modalActions.toggleEventsWindow());
            setTimeout(() => {
              dispatch(modalActions.toggleAnimation());
            }, 1);
            setTimeout(() => {
              dispatch(accountWindowActions.toggleAccountWindow());
            }, 500);
          }}
        >
          MY EVENTS
        </button>
        <button
          className=" pt-4 text-center"
          onClick={(): void => {
            dispatch(accountWindowActions.toggleAnimation());
            dispatch(modalActions.toggleArtistsWindow());
            setTimeout(() => {
              dispatch(modalActions.toggleAnimation());
            }, 1);
            setTimeout(() => {
              dispatch(accountWindowActions.toggleAccountWindow());
            }, 500);
          }}
        >
          MY ARTISTS
        </button>
        <button
          className="mt-4 h-9 items-center rounded-full bg-black px-4 text-white md:flex"
          onClick={(): void => {
            dispatch(modalActions.togglelogOutWindow());
            dispatch(accountWindowActions.toggleAnimation());
            setTimeout(() => {
              dispatch(modalActions.toggleAnimation());
            }, 1);
            setTimeout(() => {
              dispatch(accountWindowActions.toggleAccountWindow());
            }, 500);
          }}
        >
          Log out
        </button>
        <button
          onClick={(): void => {
            dispatch(accountWindowActions.toggleAnimation());
            setTimeout(() => {
              dispatch(accountWindowActions.toggleAccountWindow());
            }, 500);
          }}
          className="mt-4 h-9 items-center rounded-full border-2 border-black px-4 md:flex"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}
