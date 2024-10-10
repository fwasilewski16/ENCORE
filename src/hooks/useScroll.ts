import { useState, useEffect } from "react";

export default function useScroll(): boolean {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [scrollDirectionDown, setScrollDirectionDown] = useState<boolean>(false);

  useEffect((): (() => void) => {
    function handleScroll(): void {
      const newPosition: number = window.scrollY;
      if (scrollPosition > 80) {
        if (scrollPosition > newPosition) {
          setScrollDirectionDown(false);
        } else {
          setScrollDirectionDown(true);
        }
      }
      setScrollPosition(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return scrollDirectionDown;
}
