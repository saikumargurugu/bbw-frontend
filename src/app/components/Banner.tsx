import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
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
  const router = useRouter();

  return (
    <div
      className="relative w-full"
      style={{
        aspectRatio: '16/9',
        width: '100vw',
        // height: 'clamp(320px, 75vh, 900px)',
        height: '100vh',
        marginTop: '64px', // adjust if your navbar is a different height
        borderRadius: 0,
        paddingTop: 'env(safe-area-inset-top, 0px)',
      }}
    >
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
        className="w-full h-full object-cover sm:rounded-none rounded-none bg-black"
        style={{ height: "100%", objectFit: 'cover', objectPosition: 'center', background: '#000' }}
        priority
      />
      {/* Gradient overlay for a dynamic sports look */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
      <div className="absolute inset-0 flex flex-col justify-end items-start p-6 pb-20 z-20">
        <h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2 drop-shadow-xl font-sans uppercase"
          style={{ letterSpacing: '0.04em', fontFamily: 'Oswald, Montserrat, Arial, sans-serif' }}
          dangerouslySetInnerHTML={{ __html: caption }}
        ></h2>
          {/* {caption} */}
        {/* </h2> */}
        <p className="text-white mb-4 max-w-xl text-sm sm:text-base md:text-lg lg:text-xl drop-shadow font-normal font-sans px-2">
          {description}
        </p>
        {buttons && buttons.length > 0 && (
          <div
            className="flex flex-row gap-4 mb-10 justify-start pl-0 sm:pl-4"
            style={{ flexWrap: 'nowrap' }}
          >
            {buttons.map((btn, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (btn.newTab) {
                    window.open(btn.url, '_blank');
                  } else {
                    router.push(btn.url);
                  }
                }}
                className={sportySectionTheme.sharpButton.className + ' px-6 py-3'}
                style={{ ...sportySectionTheme.sharpButton.style, padding: '0.75rem 1.5rem' }}
              >
                {btn.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}