'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Button, IconButton } from '@mui/material';
import { useRouter } from "next/navigation";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface EventType {
  title: string;
  date: string;
  description: string;
  image: string;
  link: string;
}

export default function CardCarousel({ events }: { events: EventType[] }) {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [centerIdx, setCenterIdx] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 640;
    }
    return false; // or true, depending on your default
  });

  // Detect mobile view
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculate which card is in the center after scroll
  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const children = Array.from(container.children) as HTMLElement[];
      const containerRect = container.getBoundingClientRect();
      let minDiff = Infinity;
      let center = 0;
      children.forEach((child, idx) => {
        const rect = child.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const diff = Math.abs(containerRect.left + containerRect.width / 2 - cardCenter);
        if (diff < minDiff) {
          minDiff = diff;
          center = idx;
        }
      });
      setCenterIdx(center);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener('scroll', handleScroll, { passive: true });
    // Initial center
    handleScroll();
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line
  }, []);

  // Scroll to a specific card index
  const scrollToIndex = (idx: number) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const children = Array.from(container.children) as HTMLElement[];
      if (children[idx]) {
        const containerRect = container.getBoundingClientRect();
        const cardRect = children[idx].getBoundingClientRect();
        const scrollLeft =
          cardRect.left +
          cardRect.width / 2 -
          (containerRect.left + containerRect.width / 2);
        container.scrollBy({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    let newIdx = centerIdx;
    if (direction === 'left') {
      newIdx = centerIdx === 0 ? 0 : centerIdx - 1;
    } else {
      newIdx = centerIdx === events.length - 1 ? events.length - 1 : centerIdx + 1;
    }
    scrollToIndex(newIdx);
    setTimeout(() => setCenterIdx(newIdx), 400);
  };
  console.log(isMobile, "isMobile1");
  

  if (isMobile === null) return null; // Prevents flicker and SSR mismatch

  return (
    <div className="relative max-w-6xl mx-auto px-0 sm:px-6 py-8 sm:py-16">
      <div className="flex items-center">
        {/* Left Arrow */}
        {isMobile ? (
          <IconButton
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 shadow-none"
            onClick={() => scroll('left')}
            style={{
              display: events.length > 1 ? 'flex' : 'none',
              width: 36,
              height: 36,
              minWidth: 0,
              minHeight: 0,
              zIndex: 20,
              pointerEvents: "auto",
            }}
            size="small"
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
        ) : (
          <IconButton
            className="z-10 bg-white/80 hover:bg-white shadow-md mx-1"
            onClick={() => scroll('left')}
            style={{
              display: events.length > 3 ? 'flex' : 'none',
              width: 36,
              height: 36,
              minWidth: 0,
              minHeight: 0,
            }}
            size="small"
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
        )}

        {/* Events Scrollable Row */}
        <div
          ref={scrollRef}
          className={`flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth w-full relative ${
            isMobile ? 'snap-x snap-mandatory' : ''
          }`}
          style={{
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {events.map((event, idx) => (
            <div
              key={idx}
              className={`
                flex-shrink-0 bg-white rounded-2xl shadow-md p-4 sm:p-8 m-2 hover:shadow-xl transition-all duration-500
                ${isMobile
                  ? "w-full min-w-full max-w-full snap-center"
                  : idx === centerIdx
                    ? "scale-105 sm:scale-110 z-20 min-w-[85vw] sm:min-w-[370px] sm:max-w-[400px] max-w-[95vw]"
                    : "scale-95 sm:scale-90 opacity-70 z-10 min-w-[70vw] sm:min-w-[300px] sm:max-w-[320px] max-w-[85vw]"
                }
              `}
              style={{
                boxShadow: idx === centerIdx && !isMobile
                  ? "0 8px 32px 0 rgba(0, 200, 255, 0.25)"
                  : undefined,
              }}
            >
              <Image
                src={event.image}
                alt={event.title}
                width={500}
                height={isMobile ? 220 : 340}
                className={`object-cover w-full rounded-t-xl ${isMobile ? "h-56" : "h-72 sm:h-80"}`}
                style={{ objectFit: isMobile ? "cover" : "contain" }}
              />
              <h3 className="font-bold text-cyan-700 mt-3 mb-1 sm:mt-4 sm:mb-2 text-lg">
                {event.title}
              </h3>
              <p className="text-gray-600 text-lg">
                {event.date}
              </p>
              <p className="text-gray-600 mt-1 sm:mt-2 text-lg">
                {event.description}
              </p>
              <Button
                variant="contained"
                color="primary"
                className="mt-3 sm:mt-4 w-full text-lg"
                onClick={() => router.push(event.link)}
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {isMobile ? (
          <IconButton
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 shadow-none"
            onClick={() => scroll('right')}
            style={{
              display: events.length > 1 ? 'flex' : 'none',
              width: 36,
              height: 36,
              minWidth: 0,
              minHeight: 0,
              zIndex: 20,
              pointerEvents: "auto",
            }}
            size="small"
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        ) : (
          <IconButton
            className="z-10 bg-white/80 hover:bg-white shadow-md mx-1"
            onClick={() => scroll('right')}
            style={{
              display: events.length > 3 ? 'flex' : 'none',
              width: 36,
              height: 36,
              minWidth: 0,
              minHeight: 0,
            }}
            size="small"
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        )}
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}