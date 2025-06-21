import { cn } from '@/utils';
import { IRenderOptionsProps, ISelectOption } from '../../select-logic/types';

export interface OptionsProps extends IRenderOptionsProps {
  error?: string;
  isLoading?: boolean;
  setFilter: (filter: string) => void;
  onChange: (option: ISelectOption) => void;
}

export const Options = ({
  error,
  isOpen,
  options,
  onChange,
  isLoading,
  setIsOpen,
  setFilter,
}: OptionsProps) => {
  const isEmpty = options.length === 0;

  const handleChange = (option: ISelectOption) => {
    onChange(option);
    setFilter('');
    setIsOpen(false);
  };

  const cl = cn(
    'border-blue-dark text-blue-dark w-full rounded-[0_0_12px_12px] border border-t-0 bg-white px-3 pb-2.5',
    isOpen && 'border-[3px] border-t-0',
    error && 'border-red-400'
  );

  return (
    <div className={cl}>
      {isEmpty && !isLoading && <p className="text-gray-dark w-full text-center">No options</p>}

      {!isEmpty && !isLoading && (
        <div className="scroll-bar-mini max-h-[120px] overflow-y-auto">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleChange(option)}
              className="cursor-pointer px-1 py-1 text-[16px] leading-[19px] duration-200 hover:bg-slate-300"
            >
              <span className="text-blue-dark text-[inherit">{option.text}</span>
            </div>
          ))}
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
