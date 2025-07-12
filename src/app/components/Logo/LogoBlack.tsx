import React from "react";
import Image from "next/image";

export default function LogoBlack({ variant = "full" }: { variant?: "min" | "full" }) {
  return (
    <Image
      src={variant === "min" ? "/logos/LogoMinBlack.svg" : "/logos/LogoFullBlack.svg"}
      alt="Brisbane Badminton"
      width={32}
      height={32}
      className="h-8 w-auto object-contain"
    />
  );
}