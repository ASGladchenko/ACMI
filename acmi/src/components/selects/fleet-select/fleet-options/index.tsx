import { cn } from '@/utils';

import { ISelectOption, IRenderOptionsProps } from '../../select-logic/types';

export type FleetOptionsProps = IRenderOptionsProps & {
  filter: string;
  isLoading?: boolean;
  placeholder?: string;
  placeholderEmpty?: string;
  onChangeFilter: (filter: string) => void;
  onChange: (option: ISelectOption) => void;
};

export const FleetOptions = ({
  filter,
  isOpen,
  options,
  onChange,
  setIsOpen,
  isLoading,
  placeholder,
  onChangeFilter,
  placeholderEmpty = 'No available options',
}: FleetOptionsProps) => {
  const isOptions = options.length > 0;

  const wrapper = cn('text-blue-deep flex cursor-pointer flex-col px-1', isOpen && 'bg-white-dark');

  const handleChange = (option: ISelectOption) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={wrapper}>
      <input
        type="text"
        value={filter}
        placeholder={placeholder}
        className="w-full outline-none"
        onChange={(e) => onChangeFilter(e.target.value)}
      />

      <div className="scroll-bar-mini h-[120px] overflow-y-auto">
        {isOptions &&
          !isLoading &&
          options.map((option, index) => (
            <div
              className="cursor-pointer overflow-hidden px-1 py-1 text-[16px] leading-[19px] text-ellipsis whitespace-nowrap duration-200 hover:bg-slate-300"
              onClick={() => handleChange(option)}
              key={`${option.value}-${index}`}
            >
              {option.text}
            </div>
          ))}

        {isLoading && (
          <div className="flex items-center justify-center">
            <span className="border-blue-dark block h-5 w-5 animate-spin rounded-full border-3 border-t-transparent duration-1000"></span>
          </div>
        )}

        {!isOptions && !isLoading && <p>{placeholderEmpty}</p>}
      </div>
    </div>
  );
};
