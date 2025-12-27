'use client';

import { memo, useCallback } from 'react';

import { SelectOption } from '@/shared/types';
import { Select, SelectProps } from '@/shared/ui';

import { DictionaryKey, useDictionary } from '@/entities';

export interface SelectDictionaryProps extends Omit<SelectProps<SelectOption>, 'options'> {
  dictionaryKey: DictionaryKey;
}

export const SelectDictionary = memo(
  ({ onChange, value, dictionaryKey, ...props }: SelectDictionaryProps) => {
    const { options, status, error } = useDictionary(dictionaryKey);

    const onHandleSelect = useCallback(
      (opt: SelectOption | null) => {
        onChange(opt);
      },
      [onChange]
    );

    const selectedOption = options.find(
      (option) => option.id.toString() === value?.id.toString() || null
    );

    return (
      <Select.Memo<(typeof options)[number]>
        {...props}
        options={options}
        value={selectedOption}
        onChange={onHandleSelect}
        error={error || props.error}
        isLoading={status === 'loading' || props.isLoading}
      />
    );
  }
);

SelectDictionary.displayName = 'SelectDictionary';
