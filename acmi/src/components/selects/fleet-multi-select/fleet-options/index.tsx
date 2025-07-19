import { cn } from '@/utils';
import { Cross } from '@/assets/svg';

import { ISelectOption, IRenderOptionsProps } from '../../select-logic/types';

export type FleetOptionsProps = IRenderOptionsProps & {
  filter: string;
  isLoading?: boolean;
  placeholder?: string;
  placeholderEmpty?: string;
  selectedOptions?: ISelectOption[];
  onChangeFilter: (filter: string) => void;
  onChange: (option: ISelectOption) => void;
};

export const FleetOptions = ({
  filter,
  isOpen,
  options,
  onChange,
  isLoading,
  placeholder,
  onChangeFilter,
  selectedOptions = [],
  placeholderEmpty = 'No available options',
}: FleetOptionsProps) => {
  const handleChange = (option: ISelectOption) => {
    onChange(option);
  };

  const filteredOptions = options.filter((option) => {
    return !selectedOptions.some((o) => o.value === option.value);
  });

  const isEmpty = filteredOptions.length === 0;

  const wrapper = cn(
    'text-blue-deep flex cursor-pointer flex-col px-1 pb-2 gap-2',
    isOpen && 'bg-white-dark'
  );

  const itemWrapper =
    'group flex w-full items-center justify-between gap-1 px-1 hover:bg-slate-300';

  const itemSpan =
    'cursor-pointer overflow-hidden px-1 py-1 text-[16px] leading-[19px] text-ellipsis whitespace-nowrap duration-200';

  return (
    <div className={wrapper}>
      <input
        type="text"
        value={filter}
        placeholder={placeholder}
        className="w-full outline-none"
        onChange={(e) => onChangeFilter(e.target.value)}
      />

      {selectedOptions.length > 0 && (
        <div className="border-bue-dark scroll-bar-mini flex w-full flex-col gap-1 border py-1">
          <span className="pl-1">Selected : </span>

          <div className="scroll-bar-mini flex max-h-[120px] w-full flex-col overflow-x-hidden overflow-y-auto">
            {selectedOptions.map((opt) => (
              <div key={opt.value} className={itemWrapper} onClick={() => handleChange(opt)}>
                <span className={cn(itemSpan, 'group-hover:text-red-400')}>{opt.text}</span>

                <Cross className="h-2.5 w-2.5 shrink-0 transition-colors duration-200 group-hover:text-red-400" />
              </div>
            ))}
          </div>
        </div>
      )}

      {!isLoading && !isEmpty && (
        <div className="border-bue-dark flex w-full flex-col gap-1 border py-1">
          <span className="pl-1">Available : </span>

          <div className="scroll-bar-mini flex max-h-[120px] w-full flex-col overflow-x-hidden overflow-y-auto">
            {filteredOptions.map((option, index) => (
              <div
                className={itemWrapper}
                key={`${option.value}-${index}`}
                onClick={() => handleChange(option)}
              >
                <span className={itemSpan}>{option.text}</span>
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

      {isEmpty && !isLoading && (
        <p className="text-gray-dark w-full text-center">{placeholderEmpty}</p>
      )}
    </div>
  );
};
