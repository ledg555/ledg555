import { useState, useEffect } from "react";

const breakpoints = {
  mobile: 360,
  xs: 480,
  sm: 640,
  md: 960,
  lg: 1280,
  xl: 1536,
  "2xl": 1920,
};

export function useBreakpoint(bp: keyof typeof breakpoints) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = debounce(() => {
      setWidth(window.innerWidth);
    }, 250); // Debounce for 250ms

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width < breakpoints[bp];
}

// Debounce utility function (example)
function debounce(cb: () => void, ms: number) {
  let timer: ReturnType<typeof setTimeout>;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => cb(), ms);
  };
}
