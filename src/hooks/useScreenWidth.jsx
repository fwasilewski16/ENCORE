import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../store";

export default function useScreenWidth() {
  const [screenWidth, setScreeWidth] = useState(0);
  const dispatch = useDispatch();
  const mobileMenuVisible = useSelector((state) => state.modal.mobileMenuVisible);

  useEffect(() => {
    const handleChange = () => {
      const newWidth = window.innerWidth;
      if (mobileMenuVisible) {
        if (newWidth > 772) {
          dispatch(modalActions.toggleMobileWindow());
        }
      }
      setScreeWidth(newWidth);
    };

    window.addEventListener("resize", handleChange);

    return () => {
      window.removeEventListener("resize", handleChange);
    };
  }, [screenWidth]);

  return screenWidth;
}
