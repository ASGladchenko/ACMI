import { useState } from 'react';

import { cn } from '@/utils';

import { IRenderSelectedProps } from '../../select-logic/types';

export interface SelectedProps extends IRenderSelectedProps {
  label: string;
  filter: string;
  isDisabled?: boolean;
  setFilter: (filter: string) => void;
}

export const Selected = ({
  label,
  filter,
  isOpen,
  setIsOpen,
  isDisabled,
  setFilter,
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
    'w-full flex gap-2 bg-white border rounded-xl border-blue-dark px-3 py-2.5 text-[16px] leading-[19px]',
    isOpen && 'rounded-[12px_12px_0_0] border-b-0'
  );

  return (
    <div className={wrapper} onClick={() => !isDisabled && setIsOpen(true)}>
      <span className="text-blue-dark">{label}</span>

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
  );
};
