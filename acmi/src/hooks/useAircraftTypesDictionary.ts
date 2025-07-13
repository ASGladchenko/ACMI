import { useState, useEffect } from 'react';

import { apiClient } from '@/fetch-request';
import { useAirCraftTypesStore } from '@/store';

export function useAircraftTypesDictionary() {
  const aircraftTypes = useAirCraftTypesStore((s) => s.aircraftTypes);
  const setAircraftTypes = useAirCraftTypesStore((s) => s.setAircraftTypes);

  const [isLoading, setIsLoading] = useState(!aircraftTypes.length);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!aircraftTypes.length) {
      setIsLoading(true);
      apiClient
        .get('/aircraft-types')
        .then((res) => {
          const sorted = [...res.data].sort((a, b) => (a.model || '').localeCompare(b.model || ''));
          setAircraftTypes(sorted);
        })
        .catch(() => {
          setAircraftTypes([]);
          setIsError(true);
        })
        .finally(() => setIsLoading(false));
    }
  }, []);

  return { aircraftTypes, isLoading, isError };
}
