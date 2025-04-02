'use client';

import { useState } from 'react';

import { cn } from '@/utils';

import { getStyles } from './getStyles';

export interface BodySwitcherProps {
  className?: string;
  btnClassName?: string;
}

export const BodySwitcher = ({ className, btnClassName }: BodySwitcherProps) => {
  const [isWide, setIsWide] = useState(true);

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
