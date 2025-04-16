'use client';

import React from 'react';

import { useQueryStore } from '@/store';

import { DateOpsFrom } from '.';

interface SearchDateOpsFromProps {
  portalId?: string;
  queryName: string;
  className?: string;
}

export const SearchDateOpsFrom = React.memo(({ queryName, ...props }: SearchDateOpsFromProps) => {
  const [from, to] = queryName.split(',');

  const queryFrom = useQueryStore((s) => s.getQuery(from) || null);
  const queryTo = useQueryStore((s) => s.getQuery(to) || null);
  const setQuery = useQueryStore((s) => s.setQuery);

  const dateFrom = queryFrom ? new Date(Number(queryFrom)) : null;
  const dateTo = queryTo ? new Date(Number(queryTo)) : null;

  const onChange = ([start, end]: [Date | null, Date | null]) => {
    setQuery(from, start ? start.getTime().toString() : null);
    setQuery(to, end ? end.getTime().toString() : null);
  };

  return <DateOpsFrom {...props} onChange={onChange} initialEnd={dateTo} initialStart={dateFrom} />;
});

SearchDateOpsFrom.displayName = 'SearchDateOpsFrom';
