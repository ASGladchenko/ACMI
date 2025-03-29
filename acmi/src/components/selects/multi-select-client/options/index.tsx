import { cn } from '@/utils';

import { Cross } from '@/assets/svg';

import { IRenderOptionsProps, ISelectOption } from '../../select-logic/types';

export interface OptionsProps extends IRenderOptionsProps {
  isLoading?: boolean;
  selected: ISelectOption[];
  onChange: (option: ISelectOption) => void;
}

export const Options = ({ options, isLoading, selected, onChange }: OptionsProps) => {
  const isEmpty = options.length === 0;

  return (
    <div className="bg-white border w-full rounded-[0_0_12px_12px] border-t-0 border-blue-dark px-3 pb-2.5 text-blue-dark">
      {isEmpty && !isLoading && <p className="text-gray-dark w-full text-center">No options</p>}

      {!isEmpty && !isLoading && (
        <div className="overflow-y-auto scroll-bar-mini max-h-[120px]">
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
                <span className="w-full text-blue-dark text-[inherit">{option.text}</span>
                {isSelected && <Cross className="w-4 h-4 text-blue-dark shrink-0" />}
              </div>
            );
          })}
        </div>
      )}

      {isLoading && (
        <div className=" flex items-center justify-center">
          <span className="block w-5 h-5  border-3 border-blue-dark rounded-full border-t-transparent animate-spin duration-1000"></span>
        </div>
      )}
    </div>
  );
};
