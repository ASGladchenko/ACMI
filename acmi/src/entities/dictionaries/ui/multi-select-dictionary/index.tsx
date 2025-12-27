'use client';

import { memo, useMemo, useCallback } from 'react';

import { SelectOption } from '@/shared/types';
import { DictionaryKey, useDictionary } from '@/entities';
import { MultiSelect, MultiSelectProps } from '@/shared/ui';

export interface MultiSelectDictionaryProps
  extends Omit<MultiSelectProps<SelectOption>, 'options'> {
  dictionaryKey: DictionaryKey;
}

export const MultiSelectDictionary = memo(
  ({ value, onChange, dictionaryKey, ...props }: MultiSelectDictionaryProps) => {
    const { options, status, error } = useDictionary(dictionaryKey);

    const stableOptions = useMemo(() => options, [options]);

    const onHandleChange = useCallback(
      (opt: SelectOption[] | null) => {
        onChange(opt);
      },
      [onChange]
    );

    return (
      <MultiSelect.Memo<(typeof stableOptions)[number]>
        {...props}
        value={value}
        options={stableOptions}
        onChange={onHandleChange}
        error={error || props.error}
        isLoading={status === 'loading' || props.isLoading}
      />
    );
  }
);

MultiSelectDictionary.displayName = 'MultiSelectDictionary';
