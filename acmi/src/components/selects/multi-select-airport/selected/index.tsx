'use client';

import { useRef, useEffect } from 'react';

import { cn } from '@/utils';
import { Plain } from '@/assets/svg';

import { ISelectOption } from '../../select-logic/types';
import { IRenderSelectedProps } from '../../select-logic/types';

export interface SelectedProps extends Omit<IRenderSelectedProps, 'option'> {
  label: string;
  error?: string;
  isDisabled?: boolean;
  option: ISelectOption[];
  onChange: (option: string[]) => void;
}

export const Selected = ({
  error,
  label,
  isOpen,
  option,
  setIsOpen,
  isDisabled,
  placeholder,
}: SelectedProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const wrapper = cn(
    'w-full bg-white flex border-[1px] rounded-xl border-blue-dark px-3 py-[7px] items-center gap-2 overflow-hidden cursor-pointer',
    isOpen && 'rounded-[12px_12px_0_0] border-[3px] border-b-0 pt-[5px] px-[10px] pb-[8px]',
    isDisabled && 'cursor-not-allowed',
    error && 'border-red-400'
  );

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo({
        left: ref.current.scrollWidth,
        behavior: 'smooth',
      });
    }
  }, [option, ref]);

  return (
    <div className={wrapper} onClick={() => !isDisabled && setIsOpen(true)}>
      <span className="text-blue-dark shrink-0 text-[16px] font-bold text-nowrap">{label}</span>

      {option.length > 0 && (
        <div
          ref={ref}
          className="scroll-bar-mini scrollbar-hidden flex max-w-max min-w-0 flex-1 gap-2 overflow-x-auto whitespace-nowrap"
        >
          {option.map((item) => {
            return (
              <div key={item.value} className="flex max-w-max shrink-0">
                <div className="bg-blue-dark flex w-full cursor-pointer items-center gap-2 rounded-sm px-2 py-[2px] text-[14px] leading-[17px] font-medium text-white duration-200">
                  <Plain className="h-2 w-4 shrink-0" />

                  <span className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                    {item.text}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {option.length === 0 && placeholder && <span>{placeholder}</span>}
    </div>
  );
};
