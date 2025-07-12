import React from "react";
import Image from "next/image";

export default function LogoBlack({ variant = "full" }: { variant?: "min" | "full" }) {
  return (
    <Image
      src={variant === "min" ? "/logos/logoMinBlack.svg" : "/logos/logoFullBlack.svg"}
      alt="Brisbane Badminton"
      width={32}
      height={32}
      className="h-8 w-auto object-contain"
    />
  );
}