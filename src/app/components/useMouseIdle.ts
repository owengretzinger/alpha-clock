"use client";

import { useEffect, useState } from "react";

export function useMouseIdle(idleTime: number = 1000) {
  const [showControls, setShowControls] = useState(false);
  const [mouseTimeout, setMouseTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleMouseMove = () => {
      setShowControls(true);
      if (mouseTimeout) {
        clearTimeout(mouseTimeout);
      }
      const timeout = setTimeout(() => {
        setShowControls(false);
      }, idleTime);
      setMouseTimeout(timeout);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (mouseTimeout) {
        clearTimeout(mouseTimeout);
      }
    };
  }, [mouseTimeout, idleTime]);

  return showControls;
}
