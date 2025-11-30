import { cn } from '@/utils';

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
    'relative flex items-center bg-bg-secondary h-[45px] rounded-lg2 flex cursor-pointer overflow-hidden',
    className
  );

  const textClass =
    'flex items-center focus:outline-none text-text-secondary flex w-full h-full justify-center text-[15px] leading-[1.1] z-20 cursor-pointer';

  const chosenClass = 'text-accent-normal scale-110 font-semibold';

  const handleClick = (e: SyntheticEvent<HTMLDivElement>) => {
    const option = (e.target as HTMLElement).dataset.boolean === 'true';
    setIsWide(option);
  };

  return (
    <div className={wrapper} onClick={handleClick}>
      <div
        className={cn(
          'rounded-lg2 border-iron absolute left-0 z-10 h-full w-1/2 cursor-pointer border-2 bg-white',
          transitionClasses,
          {
            'left-full -translate-x-full': isWide,
          }
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
