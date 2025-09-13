'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { sportySectionTheme } from '../styles/sportyTheme';

export type Slide = {
  image: string;
  caption: string;
  description?: string;
  buttons?: { label: string; url: string; newTab?: boolean }[];
};

export interface CarouselProps {
  slides: Slide[];
  className?: string;
}

export default function Carousel({ slides, className }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [slides?.length]);

  const getImageSrc = (image: string) => {
    if (image.startsWith('http')) return image;
    return '/' + image.replace(/^\/?/, '');
  };

  if (!slides.length) return <div className="h-screen">Loading...</div>;

  return (
    <div className={`relative overflow-hidden ${className || 'w-full h-[70vh]'}`}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <Image
            src={getImageSrc(slide.image)}
            alt={slide.caption}
            fill
            priority
            className="object-cover"
          />
          {/* Overlay with caption and buttons */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 text-white text-center p-4"
          >
            <div
              className="w-full absolute left-0 right-0"
              style={{
                top: "35%", // Move overlay a little bit down from the top
                bottom: "auto",
                transform: "translateY(0)",
              }}
            >
              <span className="text-lg sm:text-3xl font-semibold mb-2" style={{ fontFamily: sportySectionTheme.font.title.style.fontFamily }}>
                {slide.caption}
              </span>
              {slide.description && (
                <span className="text-base sm:text-xl font-normal mb-4 block" style={{ fontFamily: sportySectionTheme.font.description.style.fontFamily }}>
                  {slide.description}
                </span>
              )}
              {slide.buttons && (
                <div className="flex flex-wrap gap-3 justify-center mt-2">
                  {slide.buttons.map((btn, idx) => (
                    <a
                      key={idx}
                      href={btn.url}
                      target={btn.newTab ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition"
                      style={{ fontFamily: sportySectionTheme.font.button.style.fontFamily }}
                    >
                      {btn.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
