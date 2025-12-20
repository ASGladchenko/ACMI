import { useEffect, useMemo } from 'react';

import { useCertificationStore } from './store';
import { normalizeCertifications } from './normalize';

export function useCertificationList() {
  const items = useCertificationStore((s) => s.items);
  const status = useCertificationStore((s) => s.status);
  const error = useCertificationStore((s) => s.error);
  const ensureLoaded = useCertificationStore((s) => s.ensureLoaded);

  const options = useMemo(() => normalizeCertifications(items), [items]);

  useEffect(() => {
    ensureLoaded();
  }, [ensureLoaded]);

  return {
    error,
    status,
    certifications: items,
    options,
  };
}
