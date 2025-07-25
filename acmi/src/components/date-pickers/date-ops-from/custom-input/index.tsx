import { forwardRef, InputHTMLAttributes } from 'react';
import { format } from 'date-fns';

import { cn } from '@/utils';
import { Cross } from '@/assets/svg';

export interface CustomInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  type?: string;
  error?: string;
  className?: string;
  onClear: () => void;
  endDate?: Date | null;
  startDate?: Date | null;
  onChange?: (value: string) => void;
}

export const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, error, startDate, endDate, className, onChange, onClear, ...props }, ref) => {
    const wrapper = cn(
      'bg-white flex items-center gap-2 text-[16px] rounded-xl border-[1px] border-blue-dark leading-[19px] w-full px-3 py-2.5 cursor-pointer',
      className,
      error && 'border-red-400'
    );

    const spanClass =
      'text-gray-dark flex-1 leading-[120%] w-max-content text-xs min-[390px]:text-base shrink-0 text-center';

    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      if (onChange) {
        onChange(value);
      }
    };
    const start = startDate ? format(startDate, 'dd/MM/yyyy') : '';
    const end = endDate ? format(endDate, 'dd/MM/yyyy') : '';
    const value = `${start} - ${end}`;

    const handleClear = (e: React.MouseEvent) => {
      if (onChange) {
        e.preventDefault();

        onChange('');
      }
      onClear();
    };

    return (
      <label className={wrapper}>
        <span className="text-blue-dark w-full max-w-max min-w-min flex-0 grow-1 font-bold text-nowrap">
          {label}
        </span>

        <span className={spanClass}>{start || 'from'}</span>
        <span className="text-gray-dark">-</span>
        <span className={spanClass}>{end || 'to'}</span>

        {value && (
          <Cross
            onClick={handleClear}
            className="text-gray-dark ml-auto h-4 w-4 shrink-0 transition-colors duration-75 hover:text-red-400"
          />
        )}

        <input
          ref={ref}
          {...props}
          value={value}
          onChange={onHandleChange}
          className="peer absolute h-0 w-0 appearance-none"
        />
      </label>
    );
  }
);

CustomInput.displayName = 'CustomInput';
