'use client';

import React from 'react';

import { useQueryStore } from '@/store';

import { FilterItem } from '.';

interface SearchFilterItemProps {
  name: string;
  label: string;
  queryName: string;
}

export const SearchFilterItem = React.memo(({ queryName, ...props }: SearchFilterItemProps) => {
  console.log('SearchFilterItem');
  const value = useQueryStore((s) => s.getQuery(queryName) || '');
  const setQuery = useQueryStore((s) => s.setQuery);

  const onChange = (value: string) => {
    if (value.trim()) {
      setQuery(queryName, value);
    } else {
      setQuery(queryName, null);
    }
  };

  return <FilterItem {...props} value={value} onChange={onChange} />;
});

SearchFilterItem.displayName = 'SearchFilterItem';
