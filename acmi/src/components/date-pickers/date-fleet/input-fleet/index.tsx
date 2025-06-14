import { forwardRef, InputHTMLAttributes } from 'react';

import { cn } from '@/utils';

export interface FleetDateInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  value?: string;
  error?: string;
  className?: string;
  isDisabled?: boolean;
  onChange?: (value: string) => void;
}

export const FleetDateInput = forwardRef<HTMLInputElement, FleetDateInputProps>(
  ({ label, value = '', className, error, onChange, isDisabled, ...props }, ref) => {
    const wrapper = cn(
      'flex items-center gap-2 text-[18px] w-full pl-1 cursor-pointer',
      className,
      isDisabled && 'cursor-default',
      !isDisabled && 'hover:bg-white-dark'
    );

    const labelClass = cn(
      'text-blue-deep font-bold shrink-0 text-nowrap font-roboto text-[18px]',
      error && 'text-red-400'
    );

    const valueClass = cn('font-bold font-roboto text-[18px] text-gray-dark');

    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      if (onChange) {
        onChange(value);
      }
    };

    return (
      <label className={wrapper}>
        <span className={labelClass}>{label}</span>

        <span className={valueClass}>{value}</span>

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

FleetDateInput.displayName = 'FleetDateInput';
