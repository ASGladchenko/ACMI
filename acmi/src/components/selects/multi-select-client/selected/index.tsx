'use client';

import { cn } from '@/utils';
import { Cross } from '@/assets/svg';

import { IRenderSelectedProps, ISelectOption } from '../../select-logic/types';
import { useEffect, useRef } from 'react';

export interface SelectedProps extends Omit<IRenderSelectedProps, 'option'> {
  label: string;
  error?: string;
  filter: string;
  isDisabled?: boolean;
  option: ISelectOption[];
  setFilter: (filter: string) => void;
  onChange: (option: ISelectOption) => void;
}

export const Selected = ({
  label,
  error,
  filter,
  isOpen,
  option,
  onChange,
  setFilter,
  setIsOpen,
  isDisabled,
  placeholder,
}: SelectedProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onInputClick = (e: React.MouseEvent) => {
    if (isOpen) {
      e.stopPropagation();
      e.preventDefault();
      return;
    }
  };

  const wrapper = cn(
    'flex w-full items-center gap-2 bg-white border-[1px] rounded-xl border-blue-dark px-3 py-[7px]',
    isOpen && 'rounded-[12px_12px_0_0] border-[3px] border-b-0 pt-[5px] px-[10px] pb-[8px]',
    error && 'border-red-400'
  );

  const isNotEmpty = option && option.length > 0;

  const handleChange = (
    event: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    item: ISelectOption
  ) => {
    event.stopPropagation();
    event.preventDefault();

    onChange(item);
  };

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <div className={wrapper} onClick={() => setIsOpen(!isOpen)}>
      <span className="text-blue-dark shrink-0 font-bold whitespace-nowrap">{label}</span>

      <div className="flex min-w-0 flex-1 items-center gap-1 overflow-hidden">
        {isNotEmpty && (
          <div className="flex min-w-0 flex-shrink justify-end gap-1 overflow-hidden">
            {option.map((item) => (
              <p
                key={item.value}
                onClick={(e) => handleChange(e, item)}
                className="bg-blue-dark flex flex-shrink-0 cursor-pointer items-center justify-center gap-1 rounded-sm px-2 py-[2px] text-sm text-white hover:text-red-400"
              >
                {item.text}
                <Cross className="h-2.5 w-2.5 shrink-0" />
              </p>
            ))}
          </div>
        )}

        <input
          type="text"
          value={filter}
          ref={inputRef}
          disabled={isDisabled}
          onClick={onInputClick}
          placeholder={placeholder}
          onChange={(e) => setFilter(e.target.value)}
          className="text-gray-dark min-w-[40px] flex-1 truncate bg-transparent text-ellipsis outline-none"
        />
      </div>
    </div>
  );
};
