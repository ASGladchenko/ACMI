import { cn } from '@/utils';

import { IRenderOptionsProps, ISelectOption } from '../../select-logic/types';

export interface OptionsProps extends IRenderOptionsProps {
  selected: ISelectOption;
  onChange: (option: ISelectOption) => void;
}

export const Options = ({ options, onChange, setIsOpen, selected }: OptionsProps) => {
  const handleChange = (option: ISelectOption) => {
    if (option.value === selected.value) return;
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="border-blue-dark text-blue-dark w-full rounded-xl border border-t-transparent bg-white px-1 py-2.5">
      <div className="scroll-bar-mini max-h-[120px] overflow-y-auto">
        {options.map((option) => {
          const isSelected = option.value === selected.value;
          return (
            <div
              key={option.value}
              onClick={() => handleChange(option)}
              className={cn(
                'flex cursor-pointer justify-items-start py-1 pl-4 text-[16px] leading-[19px] duration-200 hover:bg-slate-300',
                isSelected && 'bg-slate-300'
              )}
            >
              <span className="text-blue-dark text-[inherit">{option.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
