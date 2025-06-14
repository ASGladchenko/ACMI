import { useEffect, useState } from 'react';
import { useAirCraftTypesStore } from '@/store';
import { apiClient } from '@/fetch-request';

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
        .then((res) => setAircraftTypes(res.data))
        .catch(() => {
          setAircraftTypes([]);
          setIsError(true);
        })
        .finally(() => setIsLoading(false));
    }
  }, []);

  return { aircraftTypes, isLoading, isError };
}
