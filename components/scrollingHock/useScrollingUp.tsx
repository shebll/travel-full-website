"use client";

import { useEffect, useState } from "react";

function useScrollingUp() {
  const [scrollingUp, setScrollingUp] = useState(true); // Set the initial value to true
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < prevScrollY) {
        setScrollingUp(true);
      } else {
        setScrollingUp(false);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return scrollingUp;
}

export default useScrollingUp;
