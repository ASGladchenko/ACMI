import { useEffect, useMemo } from 'react';

import { useILSCategoryStore } from './store';
import { normalizeILSCategory } from './normalize';

export function useILSCategoryList() {
  const items = useILSCategoryStore((s) => s.items);
  const status = useILSCategoryStore((s) => s.status);
  const error = useILSCategoryStore((s) => s.error);
  const ensureLoaded = useILSCategoryStore((s) => s.ensureLoaded);

  const options = useMemo(() => normalizeILSCategory(items), [items]);

  useEffect(() => {
    ensureLoaded();
  }, [ensureLoaded]);

  return {
    error,
    status,
    options,
    ilsCategoryList: items,
  };
}
