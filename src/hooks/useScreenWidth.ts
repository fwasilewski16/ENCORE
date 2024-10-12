import { useEffect } from "react";

export default function useScreenWidth(windowVisible: string, setWindowVisible: React.Dispatch<React.SetStateAction<string>>): void {
  useEffect((): (() => void) => {
    function handleChange(): void {
      if (windowVisible === "mobileMenu") {
        if (window.innerWidth > 772) {
          setWindowVisible("none");
        }
      }
    }

    window.addEventListener("resize", handleChange);

    return (): void => {
      window.removeEventListener("resize", handleChange);
    };
  }, [windowVisible, setWindowVisible]);
}
