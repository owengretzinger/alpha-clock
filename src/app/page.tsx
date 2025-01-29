"use client";

import { useState } from "react";
import { Clock } from "./components/Clock";
import { Timer } from "./components/Timer";
import { Logo } from "./components/Logo";
import { ModeToggle } from "./components/ModeToggle";
import { useMouseIdle } from "./components/useMouseIdle";

export default function Home() {
  const [isTimerMode, setIsTimerMode] = useState(false);
  const showControls = useMouseIdle();

  const toggleTimer = () => {
    setIsTimerMode(!isTimerMode);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <ModeToggle
        isTimerMode={isTimerMode}
        showControls={showControls}
        onToggle={toggleTimer}
      />

      <div className="flex flex-col items-center gap-4 pt-24">
        {isTimerMode ? <Timer showControls={showControls} /> : <Clock />}
        <Logo />
      </div>
    </div>
  );
}
