import Modal from "./Modal";
import { modalActions, loginActions } from "../store";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

export default function LogOutWindow() {
  const dispatch = useDispatch();

  return (
    <Modal function={"logout"}>
      <div className="mx-auto flex flex-col rounded-lg bg-white px-8 py-10 md:w-[500px]">
        <p className="mx-auto">Are you sure?</p>
        <div className="mt-10 flex w-full justify-center gap-12">
          <button
            className="h-12 w-32 rounded-full border-2 border-black font-bold"
            onClick={() => {
              dispatch(modalActions.toggleAnimation());
              setTimeout(() => {
                dispatch(modalActions.togglelogOutWindow());
              }, 500);
            }}
          >
            NO
          </button>
          <button
            onClick={() => {
              dispatch(loginActions.logOut());
              dispatch(modalActions.toggleAnimation());
              setTimeout(() => {
                dispatch(modalActions.togglelogOutWindow());
              }, 500);
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
