'use client';

import { useEffect } from 'react';

import { queryParams } from '@/constants';
import { apiClient } from '@/fetch-request';
import { useAirCraftTypesStore } from '@/store';

import { SearchMultiSelect } from '../multi-select-client/search-multi-select';

export const SelectAircraftTypes = () => {
  const raw = useAirCraftTypesStore((s) => s.aircraftTypes);
  const setQuery = useAirCraftTypesStore((s) => s.setAircraftTypes);

  const getAirCraft = async () => {
    try {
      const res = await apiClient.get('/aircraft-types');
      setQuery(res.data);
    } catch (error) {
      console.log({ error });
      setQuery([]);
    }
  };

  useEffect(() => {
    if (!raw.length) {
      getAirCraft();
    }
  }, [raw]);

  return (
    <SearchMultiSelect
      keyName="value"
      options={raw.map((item) => ({
        value: item.id,
        text: item.model,
      }))}
      placeholder="enter"
      label="Aircraft types"
      queryName={queryParams.aircraftTypes}
    />
  );
};
