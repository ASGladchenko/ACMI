'use client';

import { useQueryStore } from '@/store';

export const useUrlWithParams = ({ url }: { url: string }) => {
  const { queries } = useQueryStore();

  return `${url}?${new URLSearchParams(queries).toString()}`;
};
