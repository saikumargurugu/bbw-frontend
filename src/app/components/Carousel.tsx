'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

type Slide = {
  image: string;
  caption: string;
};

interface CarouselProps {
  slides: Slide[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const getImageSrc = (image: string) => {
    if (image.startsWith('http')) return image;
    return '/' + image.replace(/^\/?/, '');
  };

  if (!slides.length) return <div className="h-screen">Loading...</div>;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <Image
            src={getImageSrc(slide.image)}
            alt={slide.caption}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-center p-4 text-lg sm:text-3xl font-semibold backdrop-blur-sm">
            <span className="animate-fade-in">{slide.caption}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
