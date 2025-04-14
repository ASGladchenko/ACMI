'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { useQueryStore } from '@/store';

export const QuerySync = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { queries } = useQueryStore();
  const setQuery = useQueryStore((s) => s.setQuery);

  useEffect(() => {
    const params = new URLSearchParams(queries);

    router.push(`?${params.toString()}`, { scroll: false });
  }, [queries]);

  useEffect(() => {
    const entries = Array.from(searchParams.entries());
    entries.forEach(([key, value]) => {
      setQuery(key, value);
    });
  }, []);

  return null;
};
