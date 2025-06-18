'use client';

import { useEffect, useRef, useState } from 'react';

interface AdComponentProps {
  slot: string;
  format?: string;
  style?: React.CSSProperties;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function AdComponent() {
  return (
    <div className="w-full p-4 bg-gray-100 rounded-lg my-4 text-center">
      <p className="text-gray-500">Advertisement Space</p>
    </div>
  );
} 