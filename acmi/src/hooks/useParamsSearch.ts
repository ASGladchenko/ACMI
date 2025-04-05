'use client';

import { useEffect, useRef } from 'react';
import { useFilters } from '@/context';
import { parseSearchParams } from '@/utils';

export const useParamsSearch = ({
  searchParams = {},
}: {
  searchParams?: Record<string, string>;
}) => {
  const prevParamsRef = useRef('');
  const { setCheckBoxes, setFilter, setSelects, setDateInterval } = useFilters();

  useEffect(() => {
    const current = JSON.stringify(searchParams);

    if (prevParamsRef.current === current) return;
    prevParamsRef.current = current;

    const parsed = parseSearchParams(searchParams);

    setCheckBoxes(parsed.checkBoxes);
    setFilter(parsed.filter);
    setSelects(parsed.selects);
    setDateInterval(parsed.dateInterval);
  }, [searchParams]);
};
