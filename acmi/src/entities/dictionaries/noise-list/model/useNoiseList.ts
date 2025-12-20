import { useEffect, useMemo } from 'react';

import { useNoiseListStore } from './store';
import { normalizeNoiseList } from './normalize';

export function useNoiseList() {
  const items = useNoiseListStore((s) => s.items);
  const status = useNoiseListStore((s) => s.status);
  const error = useNoiseListStore((s) => s.error);
  const ensureLoaded = useNoiseListStore((s) => s.ensureLoaded);

  const options = useMemo(() => normalizeNoiseList(items), [items]);

  useEffect(() => {
    ensureLoaded();
  }, [ensureLoaded]);

  return {
    error,
    status,
    options,
    noiseList: items,
  };
}
