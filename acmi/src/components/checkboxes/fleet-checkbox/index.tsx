import { InputHTMLAttributes } from 'react';

import { cn } from '@/utils';
import { Check } from '@/assets/svg';

export interface FleetCheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  error?: string;
  checked: boolean;
  className?: string;
  isDisabled?: boolean;
  onChange: (checked: boolean) => void;
}

export const FleetCheckbox = ({
  label,
  error,
  checked,
  onChange,
  className,
  isDisabled,
  ...props
}: FleetCheckboxProps) => {
  const wrapperClass = cn(
    'flex gap-2 items-center',
    !isDisabled && 'hover:bg-white-dark',
    isDisabled && 'cursor-default',
    className
  );

  const labelClass = cn(
    'text-[18px] font-roboto font-bold shrink-0 pl-1 text-gray-dark',
    error && 'text-red-400',
    isDisabled && 'cursor-default'
  );

  const textClass = cn(
    'text-[18px] font-roboto underline min-w-8 text-gray-dark',
    error && 'text-red-400',
    isDisabled && 'cursor-default'
  );

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;

    if (onChange) {
      onChange(checked);
    }
  };

  return (
    <div className={wrapperClass}>
      <span className={labelClass}>{label}</span>

      <div className="flex items-center gap-2">
        <span className={textClass}>{checked ? 'yes' : 'no'}</span>

        {!isDisabled && (
          <label className="cursor-pointer">
            <input
              {...props}
              type="checkbox"
              checked={checked}
              onChange={onHandleChange}
              className="peer absolute appearance-none"
            />

            <span className="border-blue-dark peer-checked:bg-blue-dark flex h-5 w-5 items-center justify-center rounded-sm border-2 transition-colors duration-100 ease-in-out peer-checked:border-0">
              <Check className="text-white" />
            </span>
          </label>
        )}
      </div>
    </div>
  );
};
