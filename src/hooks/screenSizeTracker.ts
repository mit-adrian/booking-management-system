import { useState, useEffect } from "react";

export function useScreenSize() {
  const getBreakpoint = (width: number) => {
    if (width >= 1024) return "desktop";
    if (width >= 768) return "tablet";
    return "mobile";
  };

  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    breakpoint: getBreakpoint(window.innerWidth),
  });

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setSize({
        width,
        height,
        breakpoint: getBreakpoint(width),
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
