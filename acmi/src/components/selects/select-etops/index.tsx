'use client'

import { queryParams } from '@/constants';
import { useETOPSDictionary } from '@/hooks';

import { SearchSelectClient } from '../select-client/search-select-client';

export const SelectETOPS = () => {
  const { etops } = useETOPSDictionary();

  return (
    <SearchSelectClient
      label="ETOPS"
      keyName="value"
      options={etops.map((item) => ({
        value: item.id,
        text: item.etops_rating,
      }))}
      placeholder="enter"
      queryName={queryParams.etops}
    />
  );
};
