import { useRef, useState } from 'react';

import { cn } from '@/utils';
import { useOutsideClick } from '@/hooks';

import { SelectLogicWrapperProps } from './types';

export const SelectLogic = ({
  options,
  className,
  isDisabled,
  placeholder,
  listClassName,
  renderOptions,
  renderSelected,
  selectedOption,
}: SelectLogicWrapperProps) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useOutsideClick(() => setIsOpen(false), [wrapperRef, containerRef]);

  const wrapperClass = cn('w-full relative', className);

  return (
    <div className={wrapperClass} ref={wrapperRef}>
      <div className={cn('w-full', isDisabled && 'cursor-not-allowed')}>
        {renderSelected({ option: selectedOption, placeholder, isOpen, setIsOpen })}
      </div>

      {isOpen && (
        <div
          className={cn('h-auto absolute top-full w-full z-10 ', listClassName)}
          ref={containerRef}
        >
          {renderOptions({ options, isOpen, setIsOpen })}
        </div>
      )}
    </div>
  );
};
