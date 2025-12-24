'use client';
import { useMemo, useCallback } from 'react';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export const useUrlParam = (k: string) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const setValue = useCallback(
    (paramValue: string | null) => {
      const currentParams = new URLSearchParams(window.location.search);

      if (paramValue === null || paramValue === '') {
        currentParams.delete(k);
      } else {
        currentParams.set(k, paramValue);
      }

      router.push(`${pathname}?${currentParams.toString()}`);
    },
    [router, pathname, k]
  );

  const value = params.get(k) ?? '';

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => ({ value, setValue }), [value]);
};
