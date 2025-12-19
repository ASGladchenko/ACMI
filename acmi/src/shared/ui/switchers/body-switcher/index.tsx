import { cn } from '@/shared/utils';

import { SyntheticEvent } from 'react';

export interface BodySwitcherProps {
  isWide: boolean;
  className?: string;
  btnClassName?: string;
  setIsWide: (value: boolean) => void;
}

const transitionClasses = 'transition-all duration-300 ease-in-out';

export const BodySwitcher = ({ className, isWide, setIsWide }: BodySwitcherProps) => {
  const wrapper = cn(
    'relative flex items-center bg-bg-secondary h-10 rounded-lg2 flex cursor-pointer border border-iron-gray hover:bg-accent-interactions-lighter',
    transitionClasses,
    className
  );

  const textClass =
    'flex items-center focus:outline-none text-text-secondary flex w-full h-full justify-center text-[15px] leading-[1.2] cursor-pointer z-[11] font-medium';

  const chosenClass = 'text-accent-normal';

  const handleClick = (e: SyntheticEvent<HTMLDivElement>) => {
    const option = (e.target as HTMLElement).dataset.boolean === 'true';
    setIsWide(option);
  };

  return (
    <div className={wrapper} onClick={handleClick}>
      <div
        className={cn(
          'rounded-lg2 border-accent-interactions-dark absolute -left-[1px] z-10 h-[calc(100%+2px)] w-1/2 cursor-pointer border bg-white',
          {
            'left-[calc(100%+1px)] -translate-x-full': isWide,
          },
          transitionClasses
        )}
      />

      <button
        data-boolean={false}
        className={cn(
          textClass,
          transitionClasses,
          !isWide && chosenClass,
          isWide && 'hover:text-text-primary focus:text-text-primary'
        )}
      >
        Narrow-body
      </button>

      <button
        data-boolean={true}
        className={cn(
          textClass,
          transitionClasses,
          isWide && chosenClass,
          !isWide && 'hover:text-text-primary focus:text-text-primary'
        )}
      >
        Wide-body
      </button>
    </div>
  );
};
