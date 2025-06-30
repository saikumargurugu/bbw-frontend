'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import InlineLoader from './childLoader';

export type Slide = {
  image: string;
  caption: string;
};

export interface CarouselProps {
  slides: Slide[];
  className?: string; // Optional className prop for custom styling
}

export default function Carousel({ slides, className }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (!slides.length) {
    return (
      <div className="flex items-center justify-center">
        <InlineLoader show className="bg-black rounded-full" />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className || 'w-full h-screen'}`}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <Image
            src={slide.image}
            alt={slide.caption}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4 text-lg sm:text-3xl font-semibold">
            <span>{slide.caption}</span>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
      >
        &#9664;
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
      >
        &#9654;
      </button>
    </div>
  );
}
