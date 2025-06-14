'use client';

import React from 'react';

import { useQueryStore } from '@/store';

import { Checkbox } from '.';

interface SearchCheckboxProps {
  label: string;
  subLabel?: string;
  queryName: string;
  className?: string;
}

export const SearchCheckbox = React.memo(({ queryName, ...props }: SearchCheckboxProps) => {
  const isChecked = useQueryStore((s) => s.getQuery(queryName) === 'true');
  const setQuery = useQueryStore((s) => s.setQuery);

  const onChange = (checked: boolean) => {
    setQuery(queryName, checked ? 'true' : null);
  };

  return <Checkbox {...props} onChange={onChange} checked={isChecked} />;
});

SearchCheckbox.displayName = 'SearchCheckbox';
