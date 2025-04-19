'use client';

import React from 'react';

import { useQueryStore } from '@/store';

import { SelectAirport } from '.';
import { ISelectOption } from '../select-logic/types';

interface SearchSelectAirportProps {
  label: string;
  queryName: string;
  className?: string;
  placeholder?: string;
}

export const SearchSelectAirport = React.memo(
  ({ queryName, ...props }: SearchSelectAirportProps) => {
    const opsFrom = useQueryStore((s) => s.getQuery(queryName));
    const setQuery = useQueryStore((s) => s.setQuery);

    const onChange = (options: ISelectOption | null) => {
      setQuery(queryName, options?.text ?? null);
    };

    return <SelectAirport {...props} selected={opsFrom ?? null} onChange={onChange} />;
  }
);

SearchSelectAirport.displayName = 'SearchSelectAirport';
