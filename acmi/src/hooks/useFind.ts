'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { useQueryStore } from '@/store';

export type UseFindFetch<T> = () => Promise<T>;

export const useFind = <T>(fetch?: UseFindFetch<T>) => {
  const router = useRouter();
  const { queries } = useQueryStore();
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFind = async ({ path }: { path: string }) => {
    router.push(`${path}?${new URLSearchParams(queries).toString()}`, { scroll: false });
    //   TODO Validation here
    if (!fetch) return;

    try {
      setIsLoading(true);

      const newData = await fetch();
      setData(newData);
    } catch (error) {
      // Mb error on toast
      setError(error as string);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleFind, isLoading, data, error };
};
