'use client';

import { cn } from '@/shared/utils';

export interface SwitcherProps {
  error?: string;
  isActive: boolean;
  disabled?: boolean;
  onClick?: (isActive: boolean) => void;
}

const transitionClasses = 'transform duration-200 ease-in-out';

export const Switcher = ({ isActive, disabled, onClick }: SwitcherProps) => {
  const switcherClass = cn(
    'relative w-11 h-[22px] rounded-2xl cursor-pointer bg-iron overflow-hidden',
    transitionClasses,
    {
      'bg-accent-normal': isActive,
      'bg-[#E2E5EA]': !isActive && disabled,
      'cursor-not-allowed opacity-30': disabled,
    }
  );

  const switcherCircleClass = cn(
    'absolute w-[18px] h-[18px] left-[2px] top-1/2 -translate-y-1/2 shrink-0 bg-white rounded-full shadow-switcher cursor-pointer',
    {
      'left-[calc(100%-2px)] -translate-x-full': isActive,
    },
    transitionClasses
  );

  const handleClick = () => {
    if (disabled) return;

    onClick?.(!isActive);
  };

  return (
    <div className={switcherClass} onClick={handleClick}>
      <button type="button" className={switcherCircleClass} />
    </div>
  );
};
