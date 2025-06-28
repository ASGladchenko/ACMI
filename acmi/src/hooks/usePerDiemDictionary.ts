import { useState, useEffect } from 'react';

import { usePerDiemStore } from '@/store';
import { apiClient } from '@/fetch-request';

export function usePerDiemDictionary() {
  const perDiem = usePerDiemStore((s) => s.per_diem);
  const setPerDiem = usePerDiemStore((s) => s.setPerDiem);

  const [isLoading, setIsLoading] = useState(!perDiem.length);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!perDiem.length) {
      setIsLoading(true);
      apiClient
        .get('/perdiem')
        .then((res) => setPerDiem(res.data))
        .catch(() => {
          setPerDiem([]);
          setIsError(true);
        })
        .finally(() => setIsLoading(false));
    }
  }, []);

  return { perDiem, isLoading, isError };
}
