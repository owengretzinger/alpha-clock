"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const displayHours = hours % 12 || 12;
      setTime(`${displayHours}:${minutes}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="flex flex-col items-center gap-4">
        <div className="text-8xl font-normal">{time}</div>
        <div className="text-xl font-thin">@alpha.mcmaster</div>
      </div>

      <div className="absolute -bottom-8 -right-8">
        <div className="w-96 h-96 relative">
          <Image
            src="/alpha_pfp_no_bg.png"
            alt="Alpha logo"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
