import { useEffect, useState } from 'react';
import { useNoiseStageStore } from '@/store';
import { apiClient } from '@/fetch-request';

export function useNoiseStageDictionary() {
  const noiseStage = useNoiseStageStore((s) => s.noiseStage);
  const setNoiseStage = useNoiseStageStore((s) => s.setNoiseStage);

  const [isLoading, setIsLoading] = useState(!noiseStage.length);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!noiseStage.length) {
      setIsLoading(true);
      apiClient
        .get('/noise-stages')
        .then((res) => setNoiseStage(res.data))
        .catch(() => {
          setNoiseStage([]);
          setIsError(true);
        })
        .finally(() => setIsLoading(false));
    }
  }, []);

  return { noiseStage, isLoading, isError };
}
