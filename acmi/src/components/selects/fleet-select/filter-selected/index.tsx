import { cn } from '@/utils';
import { Plain } from '@/assets/svg';

import { ISelectOption, IRenderSelectedProps } from '../../select-logic/types';

export interface FilterSelectedProps extends Omit<IRenderSelectedProps, 'option'> {
  label: string;
  error?: string;
  aircraft?: boolean;
  isDisabled?: boolean;
  option: ISelectOption | null;
}

export const FilterSelected = ({
  label,
  error,
  option,
  isOpen,
  aircraft,
  setIsOpen,
  isDisabled,
}: FilterSelectedProps) => {
  const onClick = () => {
    if (!isDisabled) {
      setIsOpen(!isOpen);
    }
  };

  const cl = cn(
    'px-1 cursor-pointer transition-all duration-200 ease-in-out flex gap-2',
    isDisabled && 'cursor-not-allowed',
    !isDisabled && !isOpen && 'hover:bg-white-dark',
    isOpen && 'bg-white-dark'
  );

  const labelClass = cn(
    'font-roboto text-[18px] font-bold text-gray-dark',
    aircraft && 'text-blue-dark',
    error && 'text-red-400'
  );

  const valueClass = cn(
    'font-roboto text-[18px] text-gray-dark shrink-1 min-w-0 text-ellipsis overflow-hidden whitespace-nowrap',
    aircraft && 'font-bold',
    !aircraft && 'underline'
  );

  const iconClass = cn('text-blue-dark h-6 w-6 shrink-0', error && 'text-red-400');

  return (
    <div onClick={onClick} className={cl}>
      <p className="flex shrink-0 items-center gap-2">
        {aircraft && <Plain className={iconClass} />}

        <span className={labelClass}>{label}</span>
      </p>

      {option && <span className={valueClass}>{option.text}</span>}
    </div>
  );
};
