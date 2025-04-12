'use client';

import { useEffect, useState } from 'react';

export const useScrollDirection = (): boolean => {
  const [scrollDown, setScrollDown] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && !scrollDown) {
        setScrollDown(true);
      } else if (currentScrollY < lastScrollY && scrollDown) {
        setScrollDown(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollDown]);

  return scrollDown; // true — вниз, false — вверх
};
