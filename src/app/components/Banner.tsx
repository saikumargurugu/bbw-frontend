import React from "react";
import Image from "next/image";

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
                        className="bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-md font-bold uppercase tracking-wider shadow-lg text-base md:text-lg border-2 border-red-700  transition-all duration-200"
                target={btn.newTab ? "_blank" : "_self"}
                rel="noopener noreferrer"
                style={{ fontFamily: 'Oswald, Montserrat, Arial, sans-serif', letterSpacing: '0.08em' }}
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