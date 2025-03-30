import { regExp } from '@/constants';

import { FilterLayoutValue } from '..';
import { lngConfig } from '../config';

export interface FilterItemProps {
  value: string;
  label: string;
  name: keyof FilterLayoutValue;
  onChange: (value: string, name: keyof FilterLayoutValue) => void;
}

export const FilterItem = ({ onChange, value, label, name }: FilterItemProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!regExp.digitsAndEmpty.test(value) || value.length > lngConfig[name]) {
      return;
    }

    onChange(value, name);
  };
  return (
    <div className="flex gap-2">
      <span className="text-blue-dark w-full text-base">{label}</span>

      <input
        type="text"
        value={value}
        placeholder="-"
        onChange={handleChange}
        className="w-full max-w-[80px] text-center outline-none"
      />
    </div>
  );
};
