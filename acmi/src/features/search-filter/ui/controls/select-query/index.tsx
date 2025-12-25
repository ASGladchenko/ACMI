'use client';

import { memo, useMemo, useCallback } from 'react';

import { SelectOption } from '@/shared/types';
import { Select, SelectProps } from '@/shared/ui';

import { useUrlParam } from '../../../model/useUrlParam';
import { DictionaryKey, useDictionary } from '@/entities';

export interface SelectQueryProps
  extends Omit<
    SelectProps<SelectOption>,
    'data' | 'selected' | 'onSelect' | 'error' | 'isLoading'
  > {
  queryKey: string;
  dictionaryKey: DictionaryKey;
}

export const SelectQuery = memo(({ queryKey, dictionaryKey, ...props }: SelectQueryProps) => {
  const { value, setValue } = useUrlParam(queryKey);
  const { options, status, error } = useDictionary(dictionaryKey);

  const onSelect = useCallback(
    (opt: SelectOption | null) => {
      setValue(opt ? opt.id.toString() : null);
    },
    [setValue]
  );

  const selected = useMemo(() => {
    return options.find((option) => option.id.toString() === value);
  }, [value, options]);

  return (
    <Select.Memo<(typeof options)[number]>
      {...props}
      data={options}
      selected={selected}
      onSelect={onSelect}
      error={error || undefined}
      isLoading={status === 'loading'}
    />
  );
});

SelectQuery.displayName = 'SelectQuery';
