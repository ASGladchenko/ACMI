import { cn } from '@/utils';
import { Plain } from '@/assets/svg';

import { IRenderOptionsProps, ISelectOption } from '../../select-logic/types';

export interface OptionsProps extends IRenderOptionsProps {
  filter: string;
  isLoading?: boolean;
  onChange: (option: ISelectOption) => void;
}

export const Options = ({
  options,
  isOpen,
  filter,
  onChange,
  isLoading,
  setIsOpen,
}: OptionsProps) => {
  const isEmpty = options.length === 0;

  const onHandleChange = (option: ISelectOption) => {
    onChange(option);
    setIsOpen(false);
  };

  const cl = cn(
    'border-blue-dark text-blue-dark w-full rounded-[0_0_12px_12px] border border-t-0 bg-white px-3 pb-2.5',
    isOpen && 'border-[3px] border-t-0'
  );

  return (
    <div className={cl}>
      {isEmpty && !isLoading && filter.length < 3 && (
        <p className="text-gray-dark w-full text-center">
          Enter at least 3 characters to start the search
        </p>
      )}

      {isEmpty && !isLoading && filter.length >= 3 && (
        <p className="text-gray-dark w-full text-center">No airports found</p>
      )}

      {!isEmpty && !isLoading && (
        <div className="scroll-bar-mini max-h-[120px] overflow-y-auto">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => onHandleChange(option)}
              className="text-blue-dark flex cursor-pointer items-center gap-4 px-1 py-1 text-[16px] leading-[19px] duration-200 hover:bg-slate-300"
            >
              <Plain className="h-3 w-6 shrink-0" />

              <span className="text-[inherit]">{option.text}</span>
            </div>
          ))}
        </div>
      )}

      {isLoading && (
        <div className="flex items-center justify-center">
          <span className="border-blue-dark block h-8 w-8 animate-spin rounded-full border-3 border-t-transparent duration-1000" />
        </div>
      )}
    </div>
  );
};
