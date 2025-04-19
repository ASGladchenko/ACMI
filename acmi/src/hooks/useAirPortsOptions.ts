'use client';

import { useEffect, useState } from 'react';

import { apiFetch } from '@/fetch-request';
import { useDebouncedValue } from '@/hooks';
import { ISelectOption } from '@/components';

interface Airport {
  icao: string;
  name: string;
}

export function useAirportOptions(filter: string, delay = 500) {
  const debouncedFilter = useDebouncedValue(filter, delay);

  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState<ISelectOption[]>([]);

  const fetchOptions = async (filter: string) => {
    try {
      setLoading(true);
      const data = await apiFetch<{ airports: Airport[] }>(`/airports/search?q=${filter}`);

      if (!data || !data.airports) return;

      const prepareAirports = data.airports.map((airport: { icao: string; name: string }) => ({
        value: airport.icao,
        text: `${airport.icao}, ${airport.name}`,
      }));

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
