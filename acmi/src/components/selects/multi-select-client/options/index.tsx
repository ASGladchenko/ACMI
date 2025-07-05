import { useRef, useEffect } from 'react';

import { cn } from '@/utils';
import { Cross } from '@/assets/svg';

import { ISelectOption, IRenderOptionsProps } from '../../select-logic/types';

export interface OptionsProps extends IRenderOptionsProps {
  error?: string;
  filter: string;
  isLoading?: boolean;
  selected: ISelectOption[];
  setFilter: (filter: string) => void;
  onChange: (option: ISelectOption) => void;
}

export const Options = ({
  error,
  isOpen,
  options,
  filter,
  selected,
  onChange,
  setFilter,
  isLoading,
}: OptionsProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onHandleChange = (option: ISelectOption) => {
    onChange(option);
  };
  const cl = cn(
    'border-blue-dark text-blue-dark w-full rounded-[0_0_12px_12px] border border-t-0 bg-white px-3 pb-2.5',
    isOpen && 'border-[3px] border-t-0',
    error && 'border-red-400'
  );

  const isEmpty = options.length === 0;

  const filteredOptions = options.filter((option) => {
    return !selected.some((o) => o.text === option.text);
  });

  useEffect(() => {
    if (isOpen) {
      inputRef?.current?.focus();
    }
  }, [isOpen]);

  return (
    <div className={cl}>
      <input
        type="text"
        ref={inputRef}
        value={filter}
        placeholder="Search option..."
        onChange={(e) => setFilter(e.target.value)}
        className="border-blue-dark mb-2 w-full border-[1px] p-[3px] outline-none focus:border-[2px] focus:p-[2px]"
      />
      {isEmpty && !isLoading && <p className="text-gray-dark w-full text-center">No options</p>}

      {selected.length > 0 && (
        <div className="border-blue-dark mb-2 flex flex-col gap-2 border p-1">
          <span className="text-gray-dark">Selected:</span>

          <div className="scroll-bar-mini flex max-h-[160px] flex-col gap-1 overflow-y-auto">
            {selected.map((option) => (
              <div
                key={option.value}
                onClick={() => onHandleChange(option)}
                className="group bg-blue-dark flex cursor-pointer items-center gap-4 rounded-[4px] px-2 py-1 text-[16px] leading-[19px] text-white duration-200 hover:text-rose-400"
              >
                <span className="text-[inherit]">{option.text}</span>

                <Cross className="ml-auto h-2.5 w-2.5 shrink-0 transition-colors duration-200 group-hover:text-red-400" />
              </div>
            ))}
          </div>
        </div>
      )}

      {!isEmpty && !isLoading && (
        <div className="border-blue-dark mb-2 flex flex-col gap-2 border p-1">
          <span className="text-gray-dark">Available:</span>

          <div className="scroll-bar-mini max-h-[160px] overflow-y-auto">
            {filteredOptions.map((option) => (
              <div
                key={option.value}
                onClick={() => onHandleChange(option)}
                className="text-blue-dark flex cursor-pointer items-center gap-4 px-1 py-1 text-[16px] leading-[19px] duration-200 hover:bg-slate-300"
              >
                <span className="text-[inherit]">{option.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {isLoading && (
        <div className="flex items-center justify-center">
          <span className="border-blue-dark block h-5 w-5 animate-spin rounded-full border-3 border-t-transparent duration-1000"></span>
        </div>
      )}
    </div>
  );
};
