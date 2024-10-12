import { useAppDispatch } from "../store/hooks";

interface AccountWindowProps {
  animation: boolean;
  setAccountWindowAnimation: React.Dispatch<React.SetStateAction<boolean>>;
  setAccountWindowVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setLogOutWindowVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setAnimation: React.Dispatch<React.SetStateAction<boolean>>;
  setEventsWindowVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setArtistsWindowVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AccountWindow(props: AccountWindowProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className={`absolute left-0 right-0 top-16 overflow-hidden rounded-b-lg md:left-auto md:right-auto md:top-[86px] md:rounded-lg`}>
      <div className={`flex w-full flex-col rounded-b-lg border-2 bg-white p-6 transition duration-500 ${!props.animation && "-translate-y-full"} md:rounded-lg`}>
        <button
          className="w-full border-b-2 pb-4 text-center md:pt-4"
          onClick={(): void => {
            props.setAccountWindowAnimation(false);
            setTimeout(() => {
              props.setAccountWindowVisible(false);
            }, 500);
            props.setEventsWindowVisible(true);
            setTimeout(() => {
              props.setAnimation(true);
            }, 1);
          }}
        >
          MY EVENTS
        </button>
        <button
          className=" pt-4 text-center"
          onClick={(): void => {
            props.setAccountWindowAnimation(false);
            setTimeout(() => {
              props.setAccountWindowVisible(false);
            }, 500);
            props.setArtistsWindowVisible(true);
            setTimeout(() => {
              props.setAnimation(true);
            }, 1);
          }}
        >
          MY ARTISTS
        </button>
        <button
          className="mt-4 h-9 items-center rounded-full bg-black px-4 text-white md:flex"
          onClick={(): void => {
            props.setAccountWindowAnimation(false);
            setTimeout(() => {
              props.setAccountWindowVisible(false);
            }, 500);
            props.setLogOutWindowVisible(true);
            setTimeout(() => {
              props.setAnimation(true);
            }, 1);
          }}
        >
          Log out
        </button>
        <button
          onClick={(): void => {
            props.setAccountWindowAnimation(false);
            setTimeout(() => {
              props.setAccountWindowVisible(false);
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
