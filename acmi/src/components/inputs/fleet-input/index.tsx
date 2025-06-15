'use client';

import { InputHTMLAttributes } from 'react';

import { cn } from '@/utils';
import { regExp } from '@/constants';

import './styles.scss';

export interface FleetInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  error?: string;
  type?: string;
  head?: boolean;
  decimal?: boolean;
  className?: string;
  onChange?: (value: string) => void;
}

export const FleetInput = ({
  head,
  label,
  error,
  decimal,
  onChange,
  className,
  type = 'string',
  ...props
}: FleetInputProps) => {
  const wrapperClass = cn(
    'fleet-input flex gap-2 pl-1 text-[18px] font-roboto flex-nowrap flex',
    className
  );

  const labelClass = cn(
    'text-gray-dark shrink-0 font-bold',
    head && 'text-blue-deep ',
    error && 'text-red-400'
  );

  const inputClass = cn(
    'appearance-none border-none bg-transparent p-0 m-0 outline-none focus:outline-none focus:ring-0 text-gray-dark w-full shrink-1 min-w-0 underline',
    head && 'font-bold no-underline'
  );

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (type === 'number' && !decimal && !regExp.digitsAndEmpty.test(value)) {
      return;
    }

    if (type === 'number' && decimal && !regExp.decimalOrEmpty.test(value)) {
      return;
    }

    if (onChange) {
      onChange(value);
    }
  };
  return (
    <label className={wrapperClass}>
      <span className={labelClass}>{label}</span>

      <input {...props} onChange={onHandleChange} className={inputClass} />
    </label>
  );
};
