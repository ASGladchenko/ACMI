import { useEffect, useState } from 'react';
import { useETOPSStore } from '@/store';
import { apiClient } from '@/fetch-request';

type ETOPS = {
  etops_rating: string;
  id: number;
};

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
        .then((res) => {
          const sorted = res.data.sort(
            (a: ETOPS, b: ETOPS) => Number(a.etops_rating) - Number(b.etops_rating)
          );

          setETOPS(sorted);
        })
        .catch(() => {
          setETOPS([]);
          setIsError(true);
        })
        .finally(() => setIsLoading(false));
    }
  }, []);

  return { etops, isLoading, isError };
}
