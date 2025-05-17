'use client';

import { useETOPSStore } from '@/store';
import { queryParams } from '@/constants';

import { SearchSelectClient } from '../select-client/search-select-client';
import { apiClient } from '@/fetch-request';
import { useEffect } from 'react';

export const SelectETOPS = ({}) => {
  const raw = useETOPSStore((s) => s.etops);
  const setQuery = useETOPSStore((s) => s.setEtops);

  const getETOPS = async () => {
    try {
      const res = await apiClient.get('/etops-ratings');
      setQuery(res.data);
    } catch (error) {
      console.log({ error });
      setQuery([]);
    }
  };

  useEffect(() => {
    if (!raw.length) {
      getETOPS();
    }
  }, [raw]);
  return (
    <SearchSelectClient
      label="ETOPS"
      options={raw.map((item) => ({
        value: item.id,
        text: item.etops_rating,
      }))}
      placeholder="enter"
      queryName={queryParams.etops}
    />
  );
};
