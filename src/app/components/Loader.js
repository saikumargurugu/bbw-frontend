'use client';

import React from 'react';

export default function LoaderModal() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 pointer-events-auto">
      <span className="text-6xl animate-spin-slow">🏸</span>
    </div>
  );
}
