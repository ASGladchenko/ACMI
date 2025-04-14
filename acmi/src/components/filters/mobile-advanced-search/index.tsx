'use client';

import {
  Button,
  FilterLayout,
  SearchCheckbox,
  SearchMultiSelect,
  SearchSelectClient,
} from '@/components';
import { options } from '@/components/mock';
import { queryParams } from '@/constants';

export const MobileAdvancedSearch = () => {
  return (
    <div className="bg-white-dark tablet:w-[600px] flex w-[calc(100dvw-40px)] flex-wrap gap-2 rounded-2xl px-3 py-4">
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
        className="tablet:w-[calc(50%-4px)]"
        queryName={queryParams.certifications}
      />

      <SearchSelectClient
        label="ETOPS"
        options={options}
        placeholder="enter"
        queryName={queryParams.etops}
        className="tablet:w-[calc(50%-4px)]"
      />

      <SearchSelectClient
        options={options}
        placeholder="enter"
        label="Max age, years"
        queryName={queryParams.maxAge}
        className="tablet:w-[calc(50%-4px)]"
      />

      <SearchSelectClient
        options={options}
        placeholder="enter"
        label="Max noise level"
        className="tablet:w-[calc(50%-4px)]"
        queryName={queryParams.maxNoiseLevel}
      />

      <SearchSelectClient
        options={options}
        placeholder="enter"
        label="Min approach cat"
        queryName={queryParams.minApproachCat}
      />

      <SearchCheckbox queryName={queryParams.dangerous} label="Dangerous goods certification" />

      <SearchCheckbox queryName={queryParams.iosa} label="IOSA" className="w-[calc(50%-4px)]" />

      <SearchCheckbox queryName={queryParams.act} label="ACT" className="w-[calc(50%-4px)]" />

      <SearchCheckbox
        label="Galley ovens"
        className="w-[calc(50%-4px)]"
        queryName={queryParams.galley}
      />

      <SearchCheckbox queryName={queryParams.wifi} label="WiFi" className="w-[calc(50%-4px)]" />

      <SearchCheckbox queryName={queryParams.ife} label="IFE" className="w-[calc(50%-4px)]" />

      <SearchCheckbox queryName={queryParams.isps} label="ISPS" className="w-[calc(50%-4px)]" />

      <SearchCheckbox
        label="All male crew"
        className="w-[calc(50%-4px)]"
        queryName={queryParams.allMaleCrew}
      />

      <SearchCheckbox
        label="Winglets/Sharklets"
        className="w-[calc(50%-4px)]"
        queryName={queryParams.wingletsSharklets}
      />

      <Button loading className="tablet:max-w-[180px] ml-auto">
        Find
      </Button>
    </div>
  );
};
