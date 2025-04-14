'use client';

import React from 'react';

import { useQueryStore } from '@/store';

import { MultiSelectClient } from '.';
import { ISelectOption } from '../select-logic/types';

interface SearchMultiSelectProps {
  label: string;
  queryName: string;
  className?: string;
  placeholder?: string;
  options: ISelectOption[];
}

export const SearchMultiSelect = React.memo(({ queryName, options, ...props }: SearchMultiSelectProps) => {
  const raw = useQueryStore((s) => s.getQuery(queryName) || '');
  const setQuery = useQueryStore((s) => s.setQuery);

  const allParams = raw?.split(',') ?? [];

  const selected = options.filter((option) => allParams.includes(option.text));

  const onChange = (options: ISelectOption[]) => {
    if (options.length) {
      const joined = options.map((opt) => opt.text).join(',');
      setQuery(queryName, joined);
    } else {
      setQuery(queryName, null);
    }
  };

  return <MultiSelectClient {...props} onChange={onChange} selected={selected} options={options} />;
});

SearchMultiSelect.displayName = 'SearchMultiSelect';
