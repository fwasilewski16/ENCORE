import { useState, useEffect } from "react";

export default function useScroll() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirectionDown, setScrollDirectionDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const newPosition = window.pageYOffset;
      if (scrollPosition > 80) {
        if (scrollPosition > newPosition) {
          setScrollDirectionDown(false);
        } else {
          setScrollDirectionDown(true);
        }
      }
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return scrollDirectionDown;
}
