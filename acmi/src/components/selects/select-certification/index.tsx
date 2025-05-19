'use client';

import { useEffect } from 'react';

import { queryParams } from '@/constants';
import { apiClient } from '@/fetch-request';
import { useCertificationsStore } from '@/store';

import { SearchSelectClient } from '../select-client/search-select-client';

export const SelectCertification = () => {
  const raw = useCertificationsStore((s) => s.certifications);
  const setQuery = useCertificationsStore((s) => s.setCertifications);

  const getCertifications = async () => {
    try {
      const res = await apiClient.get('/certifications');
      setQuery(res.data);
    } catch (error) {
      console.log({ error });
      setQuery([]);
    }
  };

  useEffect(() => {
    if (!raw.length) {
      getCertifications();
    }
  }, [raw]);

  return (
    <SearchSelectClient
      keyName="value"
      options={raw.map((item) => ({
        value: item.id,
        text: item.certification,
      }))}
      placeholder="enter"
      label="Certifications"
      queryName={queryParams.certifications}
    />
  );
};
