'use client';

import React from 'react';

import { useQueryStore } from '@/store';

import { SelectClient } from '.';
import { ISelectOption } from '../select-logic/types';

interface SearchSelectClientProps {
  label: string;
  queryName: string;
  className?: string;
  placeholder?: string;
  options: ISelectOption[];
}

export const SearchSelectClient = React.memo(
  ({ options, queryName, ...props }: SearchSelectClientProps) => {

    const opsFrom = useQueryStore((s) => s.getQuery(queryName));
    const setQuery = useQueryStore((s) => s.setQuery);

    const selected = options.find((option) => option.text === opsFrom) || null;

    const onChange = (options: ISelectOption | null) => {
      setQuery(queryName, options?.text ?? null);
    };

    return <SelectClient {...props} selected={selected} options={options} onChange={onChange} />;
  }
);

SearchSelectClient.displayName = 'SearchSelectClient';
