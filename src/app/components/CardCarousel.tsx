'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Button, IconButton } from '@mui/material';
import { sportySectionTheme } from '../styles/sportyTheme';
import { useRouter } from "next/navigation";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { motion } from "framer-motion";

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
    return false;
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

  if (isMobile === null) return null; // Prevents flicker and SSR mismatch

  return (
    <div className="relative max-w-7xl mx-auto px-0 sm:px-6 py-8 sm:py-16">
      <div className="flex items-center">
        {/* Left Arrow */}
        <IconButton
          className={`z-10 ${isMobile ? "absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 shadow-none" : "bg-white/80 hover:bg-white shadow-md mx-1"}`}
          onClick={() => scroll('left')}
          style={{
            display: isMobile ? (events.length > 1 ? 'flex' : 'none') : (events.length > 3 ? 'flex' : 'none'),
            width: 36,
            height: 36,
            minWidth: 0,
            minHeight: 0,
            zIndex: 20,
            pointerEvents: "auto",
          }}
          size="small"
        >
          <ArrowBackIosNewIcon fontSize="small" sx={{ color: '#fff' }} />
        </IconButton>

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
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className={
                `${sportySectionTheme.card.className} flex-shrink-0 m-2 hover:shadow-2xl transition-all duration-500 ` +
                (isMobile
                  ? "w-full min-w-full max-w-full snap-center"
                  : idx === centerIdx
                    ? "scale-105 sm:scale-110 z-20 min-w-[85vw] sm:min-w-[370px] sm:max-w-[400px] max-w-[95vw]"
                    : "scale-95 sm:scale-90 opacity-70 z-10 min-w-[70vw] sm:min-w-[300px] sm:max-w-[320px] max-w-[85vw]"
                )
              }
              style={{
                ...(sportySectionTheme.card.style || {}),
                boxShadow: idx === centerIdx && !isMobile
                  ? "0 8px 32px 0 #c53030cc"
                  : sportySectionTheme.card.style?.boxShadow,
              }}
            >
              <Image
                src={event.image}
                alt={event.title}
                width={500}
                height={isMobile ? 220 : 340}
                className={`object-cover w-full rounded-t-xl ${isMobile ? "h-56" : "h-72 sm:h-80"}`}
                style={{ objectFit: "cover" }}
              />
              <h3 className="font-extrabold text-white mt-3 mb-1 sm:mt-4 sm:mb-2 text-2xl uppercase tracking-wider" style={{fontFamily: sportySectionTheme.font.title.style.fontFamily}}>
                {event.title}
              </h3>
              <p className="text-white/80 text-base font-semibold mb-1" style={{fontFamily: sportySectionTheme.font.description.style.fontFamily}}>
                {event.date}
              </p>
              <p className="text-white mt-1 sm:mt-2 text-base font-medium" style={{fontFamily: sportySectionTheme.font.description.style.fontFamily}}>
                {event.description}
              </p>
              <Button
                variant="contained"
                className={sportySectionTheme.sharpButton.className + ' mt-4 w-full'}
                style={sportySectionTheme.sharpButton.style}
                onClick={() => router.push(event.link)}
              >
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Right Arrow */}
        <IconButton
          className={`z-10 ${isMobile ? "absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 shadow-none" : "bg-white/80 hover:bg-white shadow-md mx-1"}`}
          onClick={() => scroll('right')}
          style={{
            display: isMobile ? (events.length > 1 ? 'flex' : 'none') : (events.length > 3 ? 'flex' : 'none'),
            width: 36,
            height: 36,
            minWidth: 0,
            minHeight: 0,
            zIndex: 20,
            pointerEvents: "auto",
          }}
          size="small"
        >
          <ArrowForwardIosIcon fontSize="small" sx={{ color: '#fff' }} />
        </IconButton>
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