"use client";

import { useState, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState<{
    width: number | null;
    height: number | null;
  }>({
    width: null,
    height: null,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default function UseWindowSizeRoute() {
  const size = useWindowSize();

  return (
    <div className="p-4">
      <h1 className="text-lg font-semibold" id="elem">
        Window Size
      </h1>
      <div className="mt-2">
        {size.width && size.height ? (
          <p className="text-sm">
            Width: {size.width}, Height: {size.height}
          </p>
        ) : (
          <p className="text-sm">Loading window size...</p>
        )}
      </div>
    </div>
  );
}
