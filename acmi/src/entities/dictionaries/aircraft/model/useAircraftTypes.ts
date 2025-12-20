import { useMemo, useEffect } from 'react';

import { useAircraftTypesStore } from './store';
import { normalizeAircraftTypes } from './normalize';

export function useAircraftTypes() {
  const items = useAircraftTypesStore((s) => s.items);
  const status = useAircraftTypesStore((s) => s.status);
  const error = useAircraftTypesStore((s) => s.error);
  const ensureLoaded = useAircraftTypesStore((s) => s.ensureLoaded);

  const options = useMemo(() => normalizeAircraftTypes(items), [items]);

  useEffect(() => {
    ensureLoaded();
  }, [ensureLoaded]);

  return {
    error,
    status,
    options,
    airCraftTypes: items,
  };
}
