import Modal from "./Modal";
import { modalActions, loginActions } from "../store";
import { useAppDispatch } from "../store/hooks";

interface LogOutWindowProps {
  animation: boolean;
  exitHandler: () => void;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
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
              props.setLoggedIn(false);
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
