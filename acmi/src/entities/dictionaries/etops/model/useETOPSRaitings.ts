import { useMemo, useEffect } from 'react';

import { useETOPSStore } from './store';
import { normalizeETOPS } from './normalize';

export function useETOPSRaiting() {
  const items = useETOPSStore((s) => s.items);
  const status = useETOPSStore((s) => s.status);
  const error = useETOPSStore((s) => s.error);
  const ensureLoaded = useETOPSStore((s) => s.ensureLoaded);

  const options = useMemo(() => normalizeETOPS(items), [items]);

  useEffect(() => {
    ensureLoaded();
  }, [ensureLoaded]);

  return {
    error,
    status,
    options,
    etops: items,
  };
}
