"use client";

import {
  commonButtonClasses,
  timerButtonClasses,
  fadeInOutClasses,
} from "./styles";

interface ModeToggleProps {
  isTimerMode: boolean;
  showControls: boolean;
  onToggle: () => void;
}

export function ModeToggle({
  isTimerMode,
  showControls,
  onToggle,
}: ModeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={`absolute top-4 right-4 ${commonButtonClasses} ${timerButtonClasses} w-40 ${fadeInOutClasses} ${
        showControls ? "opacity-100" : "opacity-0"
      }`}
    >
      {isTimerMode ? "Switch to Clock" : "Switch to Timer"}
    </button>
  );
}
