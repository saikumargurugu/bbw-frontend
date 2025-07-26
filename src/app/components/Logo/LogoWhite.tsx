import React from "react";
import Image from "next/image";

export default function LogWhite({ variant = "full" }: { variant?: "min" | "full" }) {
  return (
    <Image
      src={variant === "min" ? "/logos/LogoFullWhite.svg" : "/logos/LogoFullWhite.svg"}
      alt="Brisbane Badminton"
      width={32}
      height={32}
      className="h-8 w-auto object-contain"
    />
  );
}