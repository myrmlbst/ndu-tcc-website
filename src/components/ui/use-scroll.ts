import { useEffect, useRef } from "react";

interface ScrollPosition {
  x: number;
  y: number;
}

export function useScroll() {
  const scrollPosition = useRef<ScrollPosition>({ x: 0, y: 0 });
  const scrollDirection = useRef<string>("");

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      scrollPosition.current = { x: window.scrollX, y: scrollY };
      
      if (Math.abs(scrollY - lastScrollY) < 10) {
        return;
      }
      
      scrollDirection.current = scrollY > lastScrollY ? "down" : "up";
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { scrollPosition: scrollPosition.current, scrollDirection: scrollDirection.current };
}
