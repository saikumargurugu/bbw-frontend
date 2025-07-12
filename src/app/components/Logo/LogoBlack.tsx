import React from "react";
import Image from "next/image";
import logoMinBlack from "@/public/logos/logoMinBlack.svg";
import logoFullBlack from "@/public/logos/logoFullBlack.svg";
  export default function LogoBlack({ variant = "full" }: { variant?: "min" | "full" }) {
  return (
      <Image
        src={variant === "min" ? logoMinBlack : logoFullBlack}
        alt="Brisbane Badmintion"
        width={32} // Adjust width as needed
        height={32} // Adjust height as needed
        className="h-8 w-auto object-contain"
      />
  );
}