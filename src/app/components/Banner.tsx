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
      <div className="absolute inset-0 flex flex-col justify-end items-start bg-black/30 p-6 z-10">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 drop-shadow-lg">
          {caption}
        </h2>
        <p className="text-white mb-4 max-w-2xl text-lg md:text-2xl drop-shadow">
          {description}
        </p>
        {buttons && buttons.length > 0 && (
          <div className="flex gap-4 flex-wrap mb-10">
            {buttons.map((btn, idx) => (
              <a
                key={idx}
                href={btn.url}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition shadow-lg text-base md:text-lg"
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