import { useEffect, useState } from 'react';
import { useILSCategoryStore } from '@/store';
import { apiClient } from '@/fetch-request';

export function useILSCategoryDictionary() {
  const ilsCategory = useILSCategoryStore((s) => s.ilsCategory);
  const setILSCategory = useILSCategoryStore((s) => s.setILSCategory);

  const [isLoading, setIsLoading] = useState(!ilsCategory.length);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!ilsCategory.length) {
      setIsLoading(true);
      apiClient
        .get('/ils-categories')
        .then((res) => setILSCategory(res.data))
        .catch(() => {
          setILSCategory([]);
          setIsError(true);
        })
        .finally(() => setIsLoading(false));
    }
  }, []);

  return { ilsCategory, isLoading, isError };
}
