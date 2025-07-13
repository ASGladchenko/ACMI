'use client';

import { useEffect } from 'react';

import { queryParams } from '@/constants';
import { apiClient } from '@/fetch-request';
import { useCertificationsStore } from '@/store';

import { SearchMultiSelect } from '../multi-select-client/search-multi-select';

export const SelectCertification = () => {
  const raw = useCertificationsStore((s) => s.certifications);
  const setQuery = useCertificationsStore((s) => s.setCertifications);

  const getCertifications = async () => {
    try {
      const res = await apiClient.get('/certifications');
      const sorted = [...res.data].sort((a, b) =>
        (a.certification || '').localeCompare(b.certification || '')
      );
      setQuery(sorted);
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
    <SearchMultiSelect
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
