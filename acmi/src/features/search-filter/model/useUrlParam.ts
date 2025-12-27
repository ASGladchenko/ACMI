'use client';

import { useMemo, useState, useEffect, useCallback } from 'react';

import { useRouter, usePathname } from 'next/navigation';

export const useUrlParam = (k: string) => {
  const router = useRouter();
  const pathname = usePathname();

  const [value, setValue] = useState('');

  const update = useCallback(
    (paramValue: string | null) => {
      const currentParams = new URLSearchParams(window.location.search);

      if (paramValue === null || paramValue === '') {
        currentParams.delete(k);
      } else {
        currentParams.set(k, paramValue);
      }
      setValue(paramValue ?? '');

      router.replace(`${pathname}?${currentParams.toString()}`, { scroll: false });
    },
    [router, pathname, k]
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const v = params.get(k) ?? '';
    setValue(v);
  }, [k]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => ({ value, setValue: update }), [value]);
};
