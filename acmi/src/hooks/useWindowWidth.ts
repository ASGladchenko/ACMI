'use client';
import { useState, useEffect } from 'react';

export const useWindowWidth = () => {
  const [width, setWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => {
      if (typeof window === 'undefined') return;

      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { width, isMobile: width <= 768 };
};
