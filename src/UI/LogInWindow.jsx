import Modal from "./Modal";
import { modalActions, loginActions } from "../store";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

export default function LogInWindow() {
  const dispatch = useDispatch();

  const [exampleEmail, setExampleEmail] = useState("");
  const [examplePassword, setExamplePassword] = useState("");

  useEffect(() => {
    const timerEmail = setTimeout(() => {
      const email = "example@email.com";
      const emailSplit = email.split("");
      const emailUse = [];
      for (let i = 0; i < emailSplit.length; i++) {
        setTimeout(() => {
          emailUse.push(emailSplit[i]);
          setExampleEmail(emailUse.join(""));
        }, i * 100);
      }
    }, 1000);

    const timerPassword = setTimeout(() => {
      const password = "password@1234";
      const passwordSplit = password.split("");
      const passwordUse = [];
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
    <Modal function={"login"}>
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
          <button
            className="h-12 w-32 rounded-full border-2 border-black bg-white font-bold"
            onClick={() => {
              dispatch(modalActions.toggleAnimation());
              setTimeout(() => {
                dispatch(modalActions.togglelogInWindow());
              }, 500);
            }}
          >
            BACK
          </button>
          <button
            disabled={examplePassword != "password@1234"}
            onClick={() => {
              dispatch(loginActions.logIn());
              dispatch(modalActions.toggleAnimation());
              setTimeout(() => {
                dispatch(modalActions.togglelogInWindow());
              }, 500);
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
