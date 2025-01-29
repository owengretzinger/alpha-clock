"use client";

import Image from "next/image";

export function Logo() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-xl font-thin">@alpha.mcmaster</div>
      <div className="w-16 h-16 relative">
        <Image
          src="/alpha_pfp_no_bg.png"
          alt="Alpha logo"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
    </div>
  );
}
