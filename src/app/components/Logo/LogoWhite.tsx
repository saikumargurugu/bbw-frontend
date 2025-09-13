import React from "react";
import Image from "next/image";

export default function LogWhite({
  variant = "full",
  height = 32,
  width = 32,
}: {
  variant?: "min" | "full";
  height?: number;
  width?: number;
}) {
  return (
    <div
      style={{
        height: `${height}px`,
        width: `${width}px`,
      }}
    >
      <Image
        src={
          variant === "min"
            ? "/logos/LogoFullWhite.svg"
            : "/logos/LogoFullWhite.svg"
        }
        alt="Brisbane Badminton"
        height={height}
        width={width}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}