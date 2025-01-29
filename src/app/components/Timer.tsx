"use client";

import { useEffect, useState } from "react";
import { TimerControls } from "./TimerControls";

interface TimerProps {
  showControls: boolean;
}

export function Timer({ showControls }: TimerProps) {
  const [minutes, setMinutes] = useState(15);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prev) => prev - 1);
        } else if (minutes > 0) {
          setMinutes((prev) => prev - 1);
          setSeconds(59);
        } else {
          setIsRunning(false);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds]);

  const adjustTimer = (adjustMinutes: number, adjustSeconds: number = 0) => {
    if (!isRunning) {
      const adjustInSeconds = adjustMinutes * 60 + adjustSeconds;
      const currentTotalSeconds = minutes * 60 + seconds;
      const newTotalSeconds = Math.max(
        0,
        currentTotalSeconds + adjustInSeconds,
      );
      setMinutes(Math.floor(newTotalSeconds / 60));
      setSeconds(newTotalSeconds % 60);
    }
  };

  const setPresetTime = (newMinutes: number) => {
    if (!isRunning) {
      setMinutes(newMinutes);
      setSeconds(0);
    }
  };

  const formatTimer = () => {
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <div className="text-8xl font-normal">{formatTimer()}</div>
      <TimerControls
        showControls={showControls}
        isRunning={isRunning}
        onPlayPause={() => setIsRunning(!isRunning)}
        onAdjustTimer={adjustTimer}
        onSetPreset={setPresetTime}
      />
    </>
  );
}
