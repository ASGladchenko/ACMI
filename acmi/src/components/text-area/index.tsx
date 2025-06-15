'use client';

import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

import { cn } from '@/utils';

export interface TextAreaProps
  extends Omit<
    DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>,
    'onChange' | 'className'
  > {
  value: string;
  error?: string;
  className?: string;
  onChange: (value: string) => void;
}

export const TextArea = ({ value, error, onChange, className, ...props }: TextAreaProps) => {
  const wrapper = cn(
    'bg-white flex gap-2 has-[textarea:focus]:border-[3px] has-[textarea:focus]:px-[10px] has-[textarea:focus]:py-[7px] text-[16px] rounded-xl border-[1px] border-blue-dark leading-[20px] w-full px-3 py-[9px] font-inter',
    className,
    error && 'border-red-400'
  );

  const onHandleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    if (onChange) {
      onChange(value);
    }
  };

  return (
    <label className={wrapper}>
      <textarea
        {...props}
        value={value}
        onChange={onHandleChange}
        className="text-gray-dark scroll-bar-mini blue w-full resize-none font-bold outline-none"
      />
    </label>
  );
};
