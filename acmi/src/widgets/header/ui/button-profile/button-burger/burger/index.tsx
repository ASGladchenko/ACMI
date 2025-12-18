import React from 'react';

import { cn } from '@/utils';

import './styles.css';

interface BurgerProps {
  isOpen: boolean;
  duration: number;
}

export const Burger = ({ isOpen, duration }: BurgerProps) => {
  return (
    <div className="relative h-5 w-5">
      <span
        style={
          {
            '--duration': `${duration}ms`,
          } as React.CSSProperties
        }
        className={cn('burger', isOpen && 'active')}
      ></span>
    </div>
  );
};
