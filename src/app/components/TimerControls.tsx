"use client";

import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";
import {
  commonButtonClasses,
  timerButtonClasses,
  fadeInOutClasses,
} from "./styles";

interface TimerControlsProps {
  showControls: boolean;
  isRunning: boolean;
  onPlayPause: () => void;
  onAdjustTimer: (minutes: number, seconds: number) => void;
  onSetPreset: (minutes: number) => void;
}

export function TimerControls({
  showControls,
  isRunning,
  onPlayPause,
  onAdjustTimer,
  onSetPreset,
}: TimerControlsProps) {
  return (
    <div
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 ${fadeInOutClasses} ${
        showControls ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <button
        onClick={onPlayPause}
        className={`${timerButtonClasses} w-12 h-12 rounded-full grid place-items-center`}
        aria-label={isRunning ? "Pause" : "Start"}
      >
        {isRunning ? (
          <PauseIcon className="w-6 h-6" />
        ) : (
          <PlayIcon className="w-6 h-6" />
        )}
      </button>
      <div className="flex items-center gap-3">
        <button
          onClick={() => onAdjustTimer(0, -30)}
          className={`${commonButtonClasses} ${timerButtonClasses}`}
          disabled={isRunning}
        >
          -30s
        </button>
        <button
          onClick={() => onSetPreset(5)}
          className={`${commonButtonClasses} ${timerButtonClasses}`}
          disabled={isRunning}
        >
          5:00
        </button>
        <button
          onClick={() => onSetPreset(10)}
          className={`${commonButtonClasses} ${timerButtonClasses}`}
          disabled={isRunning}
        >
          10:00
        </button>
        <button
          onClick={() => onSetPreset(15)}
          className={`${commonButtonClasses} ${timerButtonClasses}`}
          disabled={isRunning}
        >
          15:00
        </button>
        <button
          onClick={() => onAdjustTimer(0, 30)}
          className={`${commonButtonClasses} ${timerButtonClasses}`}
          disabled={isRunning}
        >
          +30s
        </button>
      </div>
    </div>
  );
}
