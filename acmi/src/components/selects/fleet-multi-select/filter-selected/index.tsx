import { cn } from '@/utils';

import { ISelectOption, IRenderSelectedProps } from '../../select-logic/types';

export interface FilterSelectedProps extends Omit<IRenderSelectedProps, 'option'> {
  label: string;
  error?: string;
  isDisabled?: boolean;
  option: ISelectOption[] | null;
}

export const FilterSelected = ({
  label,
  error,
  option,
  isOpen,
  setIsOpen,
  isDisabled,
}: FilterSelectedProps) => {
  const onClick = () => {
    if (!isDisabled) {
      setIsOpen(!isOpen);
    }
  };

  const cl = cn(
    'px-1 cursor-pointer transition-all duration-200 ease-in-out flex gap-2 overflow-hidden items-center',
    isDisabled && 'cursor-not-allowed',
    !isDisabled && !isOpen && 'hover:bg-white-dark',
    isOpen && 'bg-white-dark'
  );

  const labelClass = cn(
    'font-roboto text-[18px] font-bold text-gray-dark shrink-0',
    error && 'text-red-400'
  );

  const valueClass = cn(
    'font-roboto text-[18px] text-gray-dark shrink-1 min-w-0 grow-0 text-ellipsis overflow-hidden whitespace-nowrap underline'
  );
  const preparedSelected = (option || []).map((opt) => opt.text);

  return (
    <div onClick={onClick} className={cl}>
      <span className={labelClass}>{label}</span>

      <p className={valueClass}>{preparedSelected.join(', ')}</p>
    </div>
  );
};
