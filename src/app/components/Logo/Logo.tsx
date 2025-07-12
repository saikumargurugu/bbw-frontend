import React from "react";
import Image from "next/image";

export default function Logo({ variant = "full" }: { variant?: "min" | "full" }) {
  return (
      <Image
        src={variant === "min" ? "/logos/logoMin.svg" : "/logos/logoFull.svg"}
        alt="Brisbane Badmintion"
        width={32} // Adjust width as needed
        height={32} // Adjust height as needed
        className="h-8 w-auto object-contain"
      />
  );
}