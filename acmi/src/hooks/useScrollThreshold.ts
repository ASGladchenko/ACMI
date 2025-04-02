'use client';

import { useEffect, useState } from 'react';

export const useScrollThreshold = (threshold: number) => {
  const [isPastThreshold, setIsPastThreshold] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsPastThreshold(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isPastThreshold;
};
