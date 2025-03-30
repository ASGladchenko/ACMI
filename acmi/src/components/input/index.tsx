'use client';

import { InputHTMLAttributes } from 'react';

import { cn } from '@/utils';
import { regExp } from '@/constants';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  type?: string;
  className?: string;
  onChange?: (value: string) => void;
}

export const Input = ({ label, className, type = 'string', onChange, ...props }: InputProps) => {
  const wrapper = cn(
    'bg-white flex gap-2 text-[16px] rounded-xl border-[1px] border-blue-dark leading-[19px] w-full px-3 py-2.5',
    className
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
      <span className="text-blue-dark w-max max-w-1/2 text-nowrap">{label}</span>

      <input
        {...props}
        className="text-gray-dark w-full min-w-1/2 outline-none"
        onChange={onHandleChange}
      />
    </label>
  );
};
