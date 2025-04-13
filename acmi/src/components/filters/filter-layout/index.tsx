import { cn } from '@/utils';
import { queryParams } from '@/constants';

import { SearchFilterItem } from './filter-item/search-filter-item';

export interface FilterLayoutProps {
  className?: string;
}

export const FilterLayout = ({ className }: FilterLayoutProps) => {
  return (
    <div
      className={cn(
        'text-blue-dark border-blue-dark flex w-full flex-col gap-2.5 rounded-xl border-[1px] bg-white px-3 py-2.5 text-[16px] leading-[19px] has-[input:focus]:border-[3px] has-[input:focus]:px-[10px] has-[input:focus]:py-[8px]',
        className
      )}
    >
      <p className="text-base font-bold">Layout:</p>
      <SearchFilterItem queryName={queryParams.economy} name="economy" label="Economy" />

      <SearchFilterItem
        name="premiumEconomy"
        label="Premium economy"
        queryName={queryParams.premiumEconomy}
      />

      <SearchFilterItem queryName={queryParams.business} name="business" label="Business" />

      <SearchFilterItem queryName={queryParams.first} name="first" label="First" />
    </div>
  );
};
