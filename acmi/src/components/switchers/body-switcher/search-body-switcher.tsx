'use client';

import React from 'react';

import { useQueryStore } from '@/store';

import { BodySwitcher } from '.';

interface SearchBodySwitcherProps {
  queryName: string;
  className?: string;
  btnClassName?: string;
}

export const SearchBodySwitcher = React.memo(({ queryName, ...props }: SearchBodySwitcherProps) => {
  const isWide = useQueryStore((s) => s.getQuery(queryName) === 'true');
  const setQuery = useQueryStore((s) => s.setQuery);

  const handleSelectChange = (isWide: boolean) => {
    setQuery(queryName, isWide ? 'true' : null);
  };

  return <BodySwitcher {...props} setIsWide={handleSelectChange} isWide={Boolean(isWide)} />;
});

SearchBodySwitcher.displayName = 'SearchBodySwitcher';
