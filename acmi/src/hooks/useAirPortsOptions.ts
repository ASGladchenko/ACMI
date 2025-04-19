'use client';
import { useEffect, useState } from 'react';

import { baseApiUrl } from '@/constants';
import { useDebouncedValue } from '@/hooks';
import { ISelectOption } from '@/components';

export function useAirportOptions(filter: string, delay = 500) {
  const debouncedFilter = useDebouncedValue(filter, delay);
  const [options, setOptions] = useState<ISelectOption[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!debouncedFilter || debouncedFilter.length < 3) return;

    const fetchOptions = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${baseApiUrl}/airports/search?q=${debouncedFilter}`);
        const data = await response.json();

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

    fetchOptions();
  }, [debouncedFilter]);

  return { options, loading };
}
