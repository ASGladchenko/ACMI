import { cn } from '@/utils';
import { Cross, Calendar } from '@/shared/assets';

import { handleDivKeyDown } from '../helpers';

export interface CustomDateTriggerProps {
  value: string;
  isError?: boolean;
  isActive?: boolean;
  onOpen: () => void;
  onClear: () => void;
  isDisabled?: boolean;
  placeholder?: string;
  containerClass?: string;
}

export const CustomDateTrigger = ({
  value,
  onOpen,
  onClear,
  isError,
  isActive,
  isDisabled,
  placeholder,
  containerClass,
}: CustomDateTriggerProps) => {
  const canFocused = !isDisabled && !isActive && !isError;

  const containerClassName = cn(
    'flex gap-2.5 cursor-pointer outline-none items-center border border-iron bg-white text-text-primary px-[15px] py-[7px] rounded-lg2 items-center transition-all duration-100 ease-linear max-w-full ',
    isError && 'border-error-normal ',
    isDisabled && 'cursor-not-allowed bg-bg-secondary text-text-secondary',
    canFocused && 'focus:border-text-additional hover:border-text-additional',
    !isError && !isDisabled && isActive && 'border-accent-interactions-dark',
    containerClass
  );

  const valueClassName = cn(
    'outline-none text-text-primary grow shrink leading-[30px] min-w-0 bg-transparent  transition-all duration-100 ease-linear max-w-full truncate',
    !isDisabled && 'cursor-pointer',
    !value && 'text-text-secondary'
  );

  return (
    <div
      tabIndex={0}
      onClick={onOpen}
      className={containerClassName}
      onKeyDown={(e) => handleDivKeyDown(e, onOpen)}
    >
      <Calendar className="text-iron h-5 w-5 shrink-0" />

      <p className={valueClassName}>{value || placeholder}</p>

      {value && (
        <Cross
          className="text-color-iron hover:text-error-normal h-5 w-5 transition duration-150"
          onClick={onClear}
        />
      )}
    </div>
  );
};
