import { cn } from '@/utils';

import { useFilters } from '@/context';

import { FilterItem } from './filter-item';

export interface FilterLayoutProps {
  className?: string;
}

export const FilterLayout = ({ className }: FilterLayoutProps) => {
  const { filter, setFilter } = useFilters();
  const handleEconomyChange = (value: string, type: keyof typeof filter) => {
    setFilter({
      ...filter,
      [type]: value,
    });
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
        value={filter.economy}
        onChange={handleEconomyChange}
      />
      <FilterItem
        name="premiumEconomy"
        label="Premium economy"
        value={filter.premiumEconomy}
        onChange={handleEconomyChange}
      />
      <FilterItem
        name="business"
        label="Business"
        value={filter.business}
        onChange={handleEconomyChange}
      />
      <FilterItem name="first" label="First" value={filter.first} onChange={handleEconomyChange} />
    </div>
  );
};
