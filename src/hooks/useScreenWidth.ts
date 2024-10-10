import { useEffect, useState } from "react";
import { modalActions } from "../store";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export default function useScreenWidth(): number {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const dispatch = useAppDispatch();
  const mobileMenuVisible: boolean = useAppSelector((state) => state.modal.mobileMenuVisible);

  useEffect((): (() => void) => {
    function handleChange(): void {
      const newWidth: number = window.innerWidth;
      if (mobileMenuVisible) {
        if (newWidth > 772) {
          dispatch(modalActions.toggleMobileWindow());
        }
      }
      setScreenWidth(newWidth);
    }

    window.addEventListener("resize", handleChange);

    return (): void => {
      window.removeEventListener("resize", handleChange);
    };
  }, []);

  return screenWidth;
}
