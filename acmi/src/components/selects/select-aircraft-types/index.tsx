'use client';

import { queryParams } from '@/constants';
import { useAircraftTypesDictionary } from '@/hooks';

import { SearchMultiSelect } from '../multi-select-client/search-multi-select';

export const SelectAircraftTypes = () => {
  const { aircraftTypes } = useAircraftTypesDictionary();

  return (
    <SearchMultiSelect
      keyName="value"
      options={aircraftTypes.map((item) => ({
        value: item.id,
        text: item.model,
      }))}
      placeholder="enter"
      label="Aircraft types"
      queryName={queryParams.aircraftTypes}
    />
  );
};
