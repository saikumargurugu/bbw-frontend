import React from "react";
import Image from "next/image";
import { sportySectionTheme } from "../styles/sportyTheme";

interface BannerButton {
  label: string;
  url: string;
  newTab?: boolean;
}

interface BannerObject {
  image: string;
  caption: string;
  description: string;
  buttons?: BannerButton[];
}

export default function Banner({ banner }: { banner: BannerObject }) {
  const { image, caption, description, buttons } = banner;
  return (
    <div className="relative w-full" style={{ height: "75vh", marginTop: 0, borderRadius: 0 }}>
      {/* Bottom shadow for visual depth */}
      <div className="absolute left-0 right-0 bottom-0 h-8 z-30 pointer-events-none" style={{
        boxShadow: '0 12px 32px 0 #000a',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      }} />
      <Image
        src={image}
        alt={caption}
        fill
        className="object-cover w-full h-full"
        style={{ width: "100%", height: "100%" }}
        priority
      />
      {/* Gradient overlay for a dynamic sports look */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
      <div className="absolute inset-0 flex flex-col justify-end items-start p-6 z-20">
        <h2
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3 drop-shadow-xl font-sans uppercase"
          style={{ letterSpacing: '0.04em', fontFamily: 'Oswald, Montserrat, Arial, sans-serif' }}
        >
          {caption}
        </h2>
        <p className="text-white mb-6 max-w-2xl text-lg md:text-2xl drop-shadow font-medium font-sans">
          {description}
        </p>
        {buttons && buttons.length > 0 && (
          <div className="flex gap-4 flex-wrap mb-10">
            {buttons.map((btn, idx) => (
              <a
                key={idx}
                href={btn.url}
                className={sportySectionTheme.sharpButton.className}
                style={sportySectionTheme.sharpButton.style}
                target={btn.newTab ? "_blank" : "_self"}
                rel="noopener noreferrer"
              >
                {btn.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}