'use client';

import { InputHTMLAttributes } from 'react';

import { cn } from '@/utils';
import { regExp } from '@/constants';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  type?: string;
  error?: string;
  className?: string;
  onChange?: (value: string) => void;
}

export const Input = ({
  label,
  error,
  className,
  type = 'string',
  onChange,
  ...props
}: InputProps) => {
  const wrapper = cn(
    'bg-white flex gap-2 has-[input:focus]:border-[3px] has-[input:focus]:px-[10px] has-[input:focus]:py-[7px] text-[16px] rounded-xl border-[1px] border-blue-dark leading-[20px] w-full px-3 py-[9px] font-inter',
    className,
    error && 'border-red-400'
  );

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (type === 'number' && !regExp.digitsAndEmpty.test(value)) {
      return;
    }

    if (onChange) {
      onChange(value);
    }
  };

  return (
    <label className={wrapper}>
      <span className="text-blue-dark w-max max-w-1/2 shrink-0 font-bold text-nowrap">{label}</span>

      <input
        {...props}
        className="text-gray-dark w-full min-w-1/2 font-bold outline-none"
        onChange={onHandleChange}
      />
    </label>
  );
};
