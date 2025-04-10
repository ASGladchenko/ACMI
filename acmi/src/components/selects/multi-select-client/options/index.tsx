import { cn } from '@/utils';

import { Cross } from '@/assets/svg';

import { IRenderOptionsProps, ISelectOption } from '../../select-logic/types';

export interface OptionsProps extends IRenderOptionsProps {
  isLoading?: boolean;
  selected: ISelectOption[];
  onChange: (option: ISelectOption) => void;
}

export const Options = ({ options, isLoading, selected, onChange, isOpen }: OptionsProps) => {
  const isEmpty = options.length === 0;

  const cl = cn(
    'border-blue-dark text-blue-dark w-full rounded-[0_0_12px_12px] border border-t-0 bg-white px-3 pb-2.5',
    isOpen && 'border-[3px] border-t-0'
  );

  return (
    <div className={cl}>
      {isEmpty && !isLoading && <p className="text-gray-dark w-full text-center">No options</p>}

      {!isEmpty && !isLoading && (
        <div className="scroll-bar-mini max-h-[120px] overflow-y-auto">
          {options.map((option) => {
            const isSelected = selected.some(
              (selectedOption) => selectedOption.value === option.value
            );

            const className = cn(
              'leading-[19px] flex items-center text-[16px] py-1 px-1 cursor-pointer hover:bg-slate-400 duration-200',
              isSelected && 'bg-slate-300'
            );

            return (
              <div key={option.value} onClick={() => onChange(option)} className={className}>
                <span className="text-blue-dark text-[inherit w-full">{option.text}</span>
                {isSelected && <Cross className="text-blue-dark h-4 w-4 shrink-0" />}
              </div>
            );
          })}
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
