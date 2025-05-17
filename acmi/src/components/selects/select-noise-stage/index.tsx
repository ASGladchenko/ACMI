'use client';

import { useEffect } from 'react';

import { queryParams } from '@/constants';
import { apiClient } from '@/fetch-request';
import { useNoiseStageStore } from '@/store';

import { SearchSelectClient } from '../select-client/search-select-client';

export const SelectNoiseStage = () => {
  const raw = useNoiseStageStore((s) => s.noiseStage);
  const setQuery = useNoiseStageStore((s) => s.setNoiseStage);

  const getNoiseStage = async () => {
    try {
      const res = await apiClient.get('/noise-stages');
      setQuery(res.data);
    } catch (error) {
      console.log({ error });
      setQuery([]);
    }
  };

  useEffect(() => {
    if (!raw.length) {
      getNoiseStage();
    }
  }, [raw]);

  return (
    <SearchSelectClient
      options={raw.map((item) => ({
        value: item.id,
        text: item.noise_stage,
      }))}
      placeholder="enter"
      label="Max noise level"
      queryName={queryParams.maxNoiseLevel}
    />
  );
};
