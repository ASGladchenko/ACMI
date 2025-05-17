'use client';

import { useEffect, useState } from 'react';

import { apiClient } from '@/fetch-request';
import { useDebouncedValue } from '@/hooks';
import { ISelectOption } from '@/components';

interface Airport {
  code: string;
  name: string;
}

export function useAirportOptions(filter: string, delay = 500) {
  const debouncedFilter = useDebouncedValue(filter, delay);

  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState<ISelectOption[]>([]);

  const fetchOptions = async (filter: string) => {
    try {
      setLoading(true);
      const response = await apiClient<{ airports: Airport[] }>(`/airports/search?q=${filter}`);

      if (!response || !response.data.airports) return;

      const prepareAirports = response.data.airports.map(
        (airport: { code: string; name: string }) => ({
          value: airport.code,
          text: `${airport.code}, ${airport.name}`,
        })
      );

      setOptions(prepareAirports);
    } catch (e) {
      console.error('Failed to load airports:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (filter === '') {
      setOptions([]);
      return;
    }

    if (debouncedFilter.length < 3) return;

    fetchOptions(debouncedFilter);
  }, [debouncedFilter, filter]);

  return { options, loading, debouncedFilter };
}
