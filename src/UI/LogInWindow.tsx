import Modal from "./Modal";
import { useState, useEffect } from "react";

interface LogInWindowProps {
  animation: boolean;
  exitHandler: () => void;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LogInWindow(props: LogInWindowProps): JSX.Element {
  const [exampleEmail, setExampleEmail] = useState<string>("");
  const [examplePassword, setExamplePassword] = useState<string>("");

  useEffect((): (() => void) => {
    const timerEmail = setTimeout((): void => {
      const email: string = "example@email.com";
      const emailSplit: string[] = email.split("");
      const emailUse: string[] = [];
      for (let i = 0; i < emailSplit.length; i++) {
        setTimeout(() => {
          emailUse.push(emailSplit[i]);
          setExampleEmail(emailUse.join(""));
        }, i * 100);
      }
    }, 1000);

    const timerPassword = setTimeout((): void => {
      const password: string = "password@1234";
      const passwordSplit: string[] = password.split("");
      const passwordUse: string[] = [];
      for (let i = 0; i < passwordSplit.length; i++) {
        setTimeout(() => {
          passwordUse.push(passwordSplit[i]);
          setExamplePassword(passwordUse.join(""));
        }, i * 100);
      }
    }, 4000);

    return () => {
      clearTimeout(timerEmail);
      clearTimeout(timerPassword);
    };
  }, []);

  return (
    <Modal animation={props.animation} exitHandler={props.exitHandler}>
      <div className="mx-auto flex flex-col rounded-lg bg-white px-8 py-10 md:w-[500px]">
        <form className="flex flex-col gap-4">
          <label htmlFor="email" className="text-lg font-semibold">
            Email address
          </label>
          <input id="email" className="h-8 rounded-md pl-2 font-bold outline outline-1" defaultValue={exampleEmail}></input>
          <label htmlFor="password" className="text-lg font-semibold">
            Password
          </label>
          <input id="password" type="password" className="h-8 rounded-md pl-2 outline outline-1" defaultValue={examplePassword}></input>
        </form>
        <div className="mt-10 flex w-full justify-center gap-12">
          <button className="h-12 w-32 rounded-full border-2 border-black bg-white font-bold" onClick={props.exitHandler}>
            CLOSE
          </button>
          <button
            disabled={examplePassword != "password@1234"}
            onClick={(): void => {
              props.setLoggedIn(true);
              props.exitHandler();
            }}
            className="h-12 w-36 items-center rounded-full bg-green-500 px-4 font-bold text-white transition duration-700 disabled:bg-gray-300"
          >
            LOG IN
          </button>
        </div>
      </div>
    </Modal>
  );
}
