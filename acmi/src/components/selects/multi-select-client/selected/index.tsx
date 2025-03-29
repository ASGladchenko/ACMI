import { useState } from 'react';

import { cn } from '@/utils';
import { Cross } from '@/assets/svg';

import { IRenderSelectedProps, ISelectOption } from '../../select-logic/types';

export interface SelectedProps extends Omit<IRenderSelectedProps, 'option'> {
  label: string;
  filter: string;
  option: ISelectOption[];
  isDisabled?: boolean;
  setFilter: (filter: string) => void;
  onChange: (option: ISelectOption) => void;
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
    'w-full bg-white flex flex-col gap-1 border rounded-xl border-blue-dark px-3 py-2.5 text-[16px] leading-[19px]',
    isOpen && 'rounded-[12px_12px_0_0] border-b-0'
  );

  const isNotEmpty = option && option.length > 0;

  return (
    <div className={wrapper}>
      <div className="flex gap-2 " onClick={() => !isDisabled && setIsOpen(true)}>
        <span className="text-blue-dark text-nowrap">{label}</span>

        <input
          type="text"
          value={filter}
          disabled={isDisabled}
          onClick={onInputClick}
          onFocus={onInputFocus}
          placeholder={placeholder}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setFilter(e.target.value)}
          className="text-gray-dark outline-none w-full min-w-1/2 disabled:cursor-not-allowed"
        />
      </div>

      {isNotEmpty && (
        <div className="flex gap-2 scroll-bar-mini overflow-x-auto pb-0.5">
          {option.map((item) => (
            <p
              key={item.value}
              onClick={() => onChange(item as ISelectOption)}
              className="flex gap-1 cursor-pointer hover:text-red-400 duration-100 items-center justify-center text-white text-sm bg-blue-dark px-2 py-[2px]"
            >
              {(item as ISelectOption)?.text}

              <Cross className="w-4 h-4" />
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
