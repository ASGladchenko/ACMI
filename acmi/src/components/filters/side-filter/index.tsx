'use client';

import { cn } from '@/utils';
import { queryParams } from '@/constants';
import { options } from '@/components/mock';
import { useScrollThreshold } from '@/hooks';
import { FilterLayout, SearchCheckbox, SearchMultiSelect, SearchSelectClient } from '@/components';

export interface SideFilterProps {
  className?: string;
}

export const SideFilter = ({ className }: SideFilterProps) => {
  console.log('SideFilter');
  const isFixed = useScrollThreshold(220);

  const cl = cn(
    'bg-white-dark hidden min-[1240px]:flex hidden w-[325px] flex-col gap-1.5 px-2.5 py-4.5',
    className,
    isFixed &&
      'sticky top-[76px] scroll-bar-mini h-[calc(100dvh-76px)] overflow-y-auto shrink-0 rounded-t-2xl'
  );

  return (
    <>
      <div className={cl}>
        <SearchMultiSelect
          options={options}
          placeholder="enter"
          label="Aircraft types"
          queryName={queryParams.aircraftTypes}
        />

        <FilterLayout />

        <SearchSelectClient
          options={options}
          placeholder="enter"
          label="Certifications"
          queryName={queryParams.certifications}
        />

        <SearchSelectClient
          label="ETOPS"
          options={options}
          placeholder="enter"
          queryName={queryParams.etops}
        />

        <SearchSelectClient
          options={options}
          placeholder="enter"
          label="Max age, years"
          queryName={queryParams.maxAge}
        />

        <SearchSelectClient
          options={options}
          placeholder="enter"
          label="Max noise level"
          queryName={queryParams.maxNoiseLevel}
        />

        <SearchSelectClient
          options={options}
          placeholder="enter"
          label="Min approach cat"
          queryName={queryParams.minApproachCat}
        />

        <SearchCheckbox queryName={queryParams.iosa} label="IOSA" />

        <SearchCheckbox queryName={queryParams.act} label="ACT" />

        <SearchCheckbox queryName={queryParams.galley} label="Galley ovens" />

        <SearchCheckbox queryName={queryParams.wifi} label="WiFi" />

        <SearchCheckbox queryName={queryParams.ife} label="IFE" />

        <SearchCheckbox queryName={queryParams.isps} label="ISPS" />

        <SearchCheckbox queryName={queryParams.allMaleCrew} label="All male crew" />

        <SearchCheckbox queryName={queryParams.wingletsSharklets} label="Winglets/Sharklets" />

        <SearchCheckbox queryName={queryParams.dangerous} label="Dangerous goods certification" />
      </div>
    </>
  );
};
