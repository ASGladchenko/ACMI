import { useState, useEffect } from 'react';

import { apiClient } from '@/fetch-request';
import { useCertificationsStore } from '@/store';

export function useCertificationDictionary() {
  const certifications = useCertificationsStore((s) => s.certifications);
  const setCertifications = useCertificationsStore((s) => s.setCertifications);

  const [isLoading, setIsLoading] = useState(!certifications.length);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!certifications.length) {
      setIsLoading(true);
      apiClient
        .get('/certifications')
        .then((res) => setCertifications(res.data))
        .catch(() => {
          setCertifications([]);
          setIsError(true);
        })
        .finally(() => setIsLoading(false));
    }
  }, []);

  return { certifications, isLoading, isError };
}
