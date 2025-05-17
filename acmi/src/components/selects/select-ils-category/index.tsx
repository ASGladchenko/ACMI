'use client';
import { useEffect } from 'react';

import { queryParams } from '@/constants';
import { apiClient } from '@/fetch-request';
import { useILSCategoryStore } from '@/store';

import { SearchSelectClient } from '../select-client/search-select-client';

export const SelectILSCategory = () => {
  const raw = useILSCategoryStore((s) => s.ilsCategory);
  const setQuery = useILSCategoryStore((s) => s.setILSCategory);

  const getILSCategory = async () => {
    try {
      const res = await apiClient.get('/ils-categories');
      setQuery(res.data);
    } catch (error) {
      console.log({ error });
      setQuery([]);
    }
  };

  useEffect(() => {
    if (!raw.length) {
      getILSCategory();
    }
  }, [raw]);

  return (
    <SearchSelectClient
      options={raw.map((item) => ({
        value: item.id,
        text: item.category,
      }))}
      placeholder="enter"
      label="ILS Category"
      queryName={queryParams.ilsCategory}
    />
  );
};
