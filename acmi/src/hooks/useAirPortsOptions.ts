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
  const [options, setOptions] = useState<ISelectOption[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!debouncedFilter || debouncedFilter.length < 3) return;

    const fetchOptions = async () => {
      try {
        setLoading(true);
        const data = await apiFetch<{ airports: Airport[] }>(
          `/airports/search?q=${debouncedFilter}`
        );

        if (!data || !data.airports) return;

        const prepareAirports = data.airports.map((airport) => ({
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

    fetchOptions();
  }, [debouncedFilter]);

  console.log({ options, loading });

  return { options, loading };
}
