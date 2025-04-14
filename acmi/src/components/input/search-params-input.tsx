'use client';

import React, { useEffect, useMemo, useState } from 'react';

import { debounce } from '@/hooks';
import { useQueryStore } from '@/store';

import { Input } from './input';

export type SearchParamsInputProps = {
  type?: string;
  label: string;
  queryName: string;
  className?: string;
  placeholder?: string;
};

export const SearchParamsInput = React.memo(({ queryName, ...props }: SearchParamsInputProps) => {
  console.log('SearchParamsInput');
  const rawValue = useQueryStore((s) => s.getQuery(queryName) || '');
  const setQuery = useQueryStore((s) => s.setQuery);

  const [value, setValue] = useState(rawValue);

  useEffect(() => {
    setValue(rawValue);
  }, [rawValue]);

  const debouncedPush = useMemo(() => {
    return debounce((inputValue: string | null) => {
      setQuery(queryName, inputValue);
    });
  }, []);

  const onChange = (value: string) => {
    setValue(value);
    if (value.trim()) {
      debouncedPush(value);
    } else {
      debouncedPush(null);
    }
  };

  return <Input {...props} value={value} onChange={onChange} />;
});

SearchParamsInput.displayName = 'SearchParamsInput';
