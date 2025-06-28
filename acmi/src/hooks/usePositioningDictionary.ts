import { useState, useEffect } from 'react';

import { apiClient } from '@/fetch-request';
import { usePositioningStore } from '@/store';

export function usePositioningDictionary() {
  const positioning = usePositioningStore((s) => s.positioning);
  const setPositioning = usePositioningStore((s) => s.setPositioning);

  const [isLoading, setIsLoading] = useState(!positioning.length);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!positioning.length) {
      setIsLoading(true);
      apiClient
        .get('/positioning')
        .then((res) => setPositioning(res.data))
        .catch(() => {
          setPositioning([]);
          setIsError(true);
        })
        .finally(() => setIsLoading(false));
    }
  }, []);

  return { positioning, isLoading, isError };
}
