import { loginActions } from "../store";
import { useAppDispatch } from "../store/hooks";
import Modal from "./Modal";

interface LogOutWindowProps {
  animation: boolean;
  exitHandler: () => void;
}

export default function LogOutWindow(props: LogOutWindowProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <Modal animation={props.animation} exitHandler={props.exitHandler}>
      <div className="mx-auto flex flex-col rounded-lg bg-white px-8 py-10 md:w-[500px]">
        <p className="mx-auto">Are you sure?</p>
        <div className="mt-10 flex w-full justify-center gap-12">
          <button className="h-12 w-32 rounded-full border-2 border-black font-bold" onClick={props.exitHandler}>
            NO
          </button>
          <button
            onClick={(): void => {
              dispatch(loginActions.logOut());
              props.exitHandler();
            }}
            className="h-12 w-32 rounded-full border-2 border-black font-bold"
          >
            YES
          </button>
        </div>
      </div>
    </Modal>
  );
}
