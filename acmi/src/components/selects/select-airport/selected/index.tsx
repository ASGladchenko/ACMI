import { useRef, useState } from 'react';

import { cn } from '@/utils';
import { Cross, Plain } from '@/assets/svg';

import { IRenderSelectedProps, ISelectOption } from '../../select-logic/types';

export interface SelectedProps extends IRenderSelectedProps {
  label: string;
  filter: string;
  isDisabled?: boolean;
  setFilter: (filter: string) => void;
  onChange: (option: ISelectOption | null) => void;
}

export const Selected = ({
  label,
  filter,
  isOpen,
  option,
  onChange,
  setFilter,
  setIsOpen,
  isDisabled,
  placeholder,
}: SelectedProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const onInputClick = (e: React.MouseEvent) => {
    if (isFocused) {
      e.stopPropagation();
      e.preventDefault();
      return;
    }
  };

  const onInputFocus = () => {
    if (!isFocused) {
      setIsOpen(true);
    }
  };

  const handleDeleteSelected = () => {
    onChange(null);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 1);
  };

  const wrapper = cn(
    'w-full bg-white flex border-[1px] rounded-xl border-blue-dark px-3 py-[7px] items-center gap-2 overflow-hidden',
    isOpen && 'rounded-[12px_12px_0_0] border-[3px] border-b-0 pt-[5px] px-[10px] pb-[8px]'
  );

  return (
    <div className={wrapper} onClick={() => !isDisabled && setIsOpen(true)}>
      <span className="text-blue-dark shrink-0 text-[16px] font-bold text-nowrap">{label}</span>

      {option ? (
        <div className="flex max-w-max min-w-0 flex-1">
          <div
            onClick={handleDeleteSelected}
            className="bg-blue-dark flex w-full cursor-pointer items-center gap-2 rounded-sm px-2 py-[3px] text-[14px] leading-[17px] font-medium text-white hover:text-red-400"
          >
            <Plain className="h-2 w-4 shrink-0" />

            <span className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
              {(option as ISelectOption)?.text}
            </span>

            <Cross className="h-2.5 w-2.5 shrink-0" />
          </div>
        </div>
      ) : (
        <input
          type="text"
          value={filter}
          ref={inputRef}
          disabled={isDisabled}
          onClick={onInputClick}
          onFocus={onInputFocus}
          placeholder={placeholder}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setFilter(e.target.value)}
          className="text-gray-dark h-5 w-full min-w-1/2 outline-none disabled:cursor-not-allowed"
        />
      )}
    </div>
  );
};
