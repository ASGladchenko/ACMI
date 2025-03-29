import { InputHTMLAttributes } from 'react';

import { cn } from '@/utils';
import { Check } from '@/assets/svg';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  type?: string;
  subLabel?: string;
  className?: string;
  onChange?: (checked: boolean) => void;
}

export const Checkbox = ({ label, subLabel, className, onChange, ...props }: CheckboxProps) => {
  const wrapper = cn(
    'bg-white flex gap-3 text-[16px] rounded-xl border border-blue-dark leading-[19px] w-full px-3 py-2.5 cursor-pointer',
    className
  );

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;

    if (onChange) {
      onChange(checked);
    }
  };

  return (
    <label className={wrapper}>
      <input
        {...props}
        type="checkbox"
        onChange={onHandleChange}
        className="peer absolute appearance-none"
      />

      <span className="border-blue-dark peer-checked:bg-blue-dark flex h-5 w-5 items-center justify-center rounded-sm border-2 transition-colors duration-100 ease-in-out peer-checked:border-0">
        <Check className="text-white" />
      </span>

      <span className="align-start flex flex-col">
        <span className="text-blue-dark font-bold text-nowrap">{label}</span>
        {subLabel && <span className="text-blue-dark text-nowrap">{subLabel}</span>}
      </span>
    </label>
  );
};
