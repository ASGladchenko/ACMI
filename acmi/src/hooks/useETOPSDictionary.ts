import { useEffect, useState } from 'react';
import { useETOPSStore } from '@/store';
import { apiClient } from '@/fetch-request';

export function useETOPSDictionary() {
  const etops = useETOPSStore((s) => s.etops);
  const setETOPS = useETOPSStore((s) => s.setEtops);

  const [isLoading, setIsLoading] = useState(!etops.length);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!etops.length) {
      setIsLoading(true);
      apiClient
        .get('/etops-ratings')
        .then((res) => setETOPS(res.data))
        .catch(() => {
          setETOPS([]);
          setIsError(true);
        })
        .finally(() => setIsLoading(false));
    }
  }, []);

  return { etops, isLoading, isError };
}
