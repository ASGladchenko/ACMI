import { cn } from '@/utils';

import { emptyState } from './config';
import { FilterItem } from './filter-item';

export interface FilterLayoutValue {
  first: string;
  economy: string;
  business: string;
  premiumEconomy: string;
}

export interface FilterLayoutProps {
  className?: string;
  values: FilterLayoutValue;
  onChange: (values: FilterLayoutValue) => void;
}

export const FilterLayout = ({ className, values = emptyState, onChange }: FilterLayoutProps) => {
  const handleEconomyChange = (value: string, type: keyof FilterLayoutValue) => {
    const newValues = { ...values, [type]: value };
    onChange(newValues);
  };

  return (
    <div
      className={cn(
        'text-blue-dark border-blue-dark flex w-full flex-col gap-2.5 rounded-xl border-[1px] bg-white px-3 py-2.5 text-[16px] leading-[19px]',
        className
      )}
    >
      <p className="text-base font-bold">Layout:</p>
      <FilterItem
        name="economy"
        label="Economy"
        value={values.economy}
        onChange={handleEconomyChange}
      />
      <FilterItem
        name="premiumEconomy"
        label="Premium economy"
        value={values.premiumEconomy}
        onChange={handleEconomyChange}
      />
      <FilterItem
        name="business"
        label="Business"
        value={values.business}
        onChange={handleEconomyChange}
      />
      <FilterItem name="first" label="First" value={values.first} onChange={handleEconomyChange} />
    </div>
  );
};
