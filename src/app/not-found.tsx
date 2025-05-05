// app/not-found.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-cyan-600 to-emerald-500 text-white text-center p-6">
      <div className="w-64 h-64 relative mb-6">
        <Image
          src="/images/socials/badminton-shuttle.jpg"
          alt="Badminton Shuttle"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h1 className="text-6xl font-bold mb-4">Oops! Page Not Found</h1>
      <p className="text-lg mb-4">The page you are looking for might have been moved or deleted.</p>
      <Link href="/" className="text-2xl font-semibold underline hover:text-cyan-300 transition">
        Go Back to Home
      </Link>
    </div>
  );
}
