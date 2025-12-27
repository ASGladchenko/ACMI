'use client';

import { memo, useMemo, useCallback } from 'react';

import { SelectOption } from '@/shared/types';
import { DictionaryKey, useDictionary } from '@/entities';
import { MultiSelect, MultiSelectProps } from '@/shared/ui';

import { useUrlParam } from '../../../model/useUrlParam';

export interface MultiSelectQueryProps
  extends Omit<
    MultiSelectProps<SelectOption>,
    'options' | 'value' | 'onChange' | 'error' | 'isLoading'
  > {
  queryKey: string;
  dictionaryKey: DictionaryKey;
}

export const MultiSelectQuery = memo(
  ({ queryKey, dictionaryKey, ...props }: MultiSelectQueryProps) => {
    const { value, setValue } = useUrlParam(queryKey);
    const { options, status, error } = useDictionary(dictionaryKey);

    const stableOptions = useMemo(() => options, [options]);

    const onSelect = useCallback(
      (opt: SelectOption[] | null) => {
        setValue(opt ? opt.map((o) => o.id).join(',') : null);
      },
      [setValue]
    );

    const selected = useMemo(() => {
      const allTypes = value?.split(',') ?? [];
      return stableOptions.filter((option) => allTypes.includes(`${option.id}`));
    }, [value, stableOptions]);

    return (
      <MultiSelect.Memo<(typeof stableOptions)[number]>
        {...props}
        value={selected}
        onChange={onSelect}
        options={stableOptions}
        error={error || undefined}
        isLoading={status === 'loading'}
      />
    );
  }
);

MultiSelectQuery.displayName = 'MultiSelectQuery';
