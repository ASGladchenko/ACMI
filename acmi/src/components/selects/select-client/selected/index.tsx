import { useState } from 'react';

import { cn } from '@/utils';
import { Cross } from '@/assets/svg';

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

  const wrapper = cn(
    'w-full bg-white flex border-[1px] rounded-xl border-blue-dark px-3 py-[7px] items-center gap-2',
    isOpen && 'rounded-[12px_12px_0_0] border-[3px] border-b-0 pt-[5px] px-[10px] pb-[8px]'
  );

  return (
    <div className={wrapper} onClick={() => !isDisabled && setIsOpen(true)}>
      <span className="text-blue-dark text-[16px] font-bold text-nowrap">{label}</span>

      {option ? (
        <div className="flex w-full gap-2">
          <p
            onClick={() => onChange(null)}
            className="bg-blue-dark flex w-full cursor-pointer items-center justify-between gap-2 rounded-sm px-2 py-[3px] text-[14px] leading-[17px] font-medium text-white duration-100 hover:text-red-400"
          >
            {(option as ISelectOption)?.text}

            <Cross className="h-2.5 w-2.5 shrink-0" />
          </p>
        </div>
      ) : (
        <input
          type="text"
          value={filter}
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
