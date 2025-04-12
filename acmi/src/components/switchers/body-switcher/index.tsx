'use client';

import { cn } from '@/utils';

import { getStyles } from './getStyles';

export interface BodySwitcherProps {
  className?: string;
  btnClassName?: string;
  isWide: boolean;
  setIsWide: (value: boolean) => void;
}

export const BodySwitcher = ({ className, btnClassName, isWide, setIsWide }: BodySwitcherProps) => {
  const { narrow, wide } = getStyles(isWide, btnClassName);
  const wrapper = cn(
    'p-[2px_3px] rounded-xl border-[1px] border-black bg-white flex gap-[4px]',
    className
  );

  return (
    <div className={wrapper}>
      <button onClick={() => setIsWide(false)} className={narrow}>
        Narrow-body
      </button>

      <button onClick={() => setIsWide(true)} className={wide}>
        Wide-body
      </button>
    </div>
  );
};
