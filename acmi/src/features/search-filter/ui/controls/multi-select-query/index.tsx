'use client';

import { memo, useMemo, useCallback } from 'react';

import { SelectOption } from '@/shared/types';
import { DictionaryKey, useDictionary } from '@/entities';
import { MultiSelect, MultiSelectProps } from '@/shared/ui';

import { useUrlParam } from '../../../model/useUrlParam';

export interface MultiSelectQueryProps
  extends Omit<
    MultiSelectProps<SelectOption>,
    'data' | 'selected' | 'onSelect' | 'error' | 'isLoading'
  > {
  queryKey: string;
  dictionaryKey: DictionaryKey;
}

export const MultiSelectQuery = memo(
  ({ queryKey, dictionaryKey, ...props }: MultiSelectQueryProps) => {
    const { value, setValue } = useUrlParam(queryKey);
    const { options, status, error } = useDictionary(dictionaryKey);

    const onSelect = useCallback(
      (opt: SelectOption[] | null) => {
        setValue(opt ? opt.map((o) => o.id).join(',') : null);
      },
      [setValue]
    );

    const selected = useMemo(() => {
      const allTypes = value?.split(',') ?? [];
      return options.filter((option) => allTypes.includes(`${option.id}`));
    }, [value, options]);

    return (
      <MultiSelect.Memo<(typeof options)[number]>
        {...props}
        data={options}
        selected={selected}
        onSelect={onSelect}
        error={error || undefined}
        isLoading={status === 'loading'}
      />
    );
  }
);

MultiSelectQuery.displayName = 'MultiSelectQuery';
