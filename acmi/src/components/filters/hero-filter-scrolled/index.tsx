'use client';

import { cn } from '@/utils';
import { useDelay, useScrollThreshold, useWindowWidth } from '@/hooks';

import { HeroFilter } from '../hero-filter';
import { MobileScrolledFilter } from '../mobile-scrolled-filter';

export const HeroFilterScrolled = ({}) => {
  const { width } = useWindowWidth();
  const point = width < 1240 ? 380 : 220;

  const isRender = useScrollThreshold(point);
  const isAnimated = useDelay(isRender, 5);

  const cl = cn(
    'fixed top-0 hidden tablet:hidden min-[1240px]:flex min-[1240px]:flex-nowrap scroll-bar-mini max-w-[calc(100%-109px)] left-1/2 -translate-x-1/2 w-full z-[999] ease-linear duration-75 !shadow-none max-w-[1376px]',
    isAnimated && 'opacity-100',
    !isAnimated && 'opacity-0'
  );

  if (!isRender) {
    return null;
  }

  return (
    <>
      <MobileScrolledFilter />

      <HeroFilter
        className={cl}
        portalId="calendar-hero-scrolled"
        onFind={() => console.log('find')}
      />
    </>
  );
};
