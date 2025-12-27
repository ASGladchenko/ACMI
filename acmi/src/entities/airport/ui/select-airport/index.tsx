'use client';
import { useCallback } from 'react';

import { Select, SelectProps } from '@/shared/ui';
import { useDebouncedCallback } from '@/shared/hooks';
import { SelectOption, LoadingStatus } from '@/shared/types';

import { useAirportOptions } from '../..';

export type SelectAirportProps<T extends SelectOption> = Omit<
  SelectProps<T>,
  'options' | 'isLoading' | 'onSearchChange'
>;

const DELAY = 300;
const MIN_LENGTH = 3;

const dynamicPlaceholder = (input: string, status: LoadingStatus): string => {
  if (input.length >= MIN_LENGTH && status !== 'idle') {
    return 'No airports found';
  }
  return `Type at least ${MIN_LENGTH} characters to search`;
};

export const SelectAirport = ({
  placeholder = 'Type to search airports...',
  ...props
}: SelectAirportProps<SelectOption>) => {
  const { clearState, fetchOptions, error, status, items } = useAirportOptions();

  const debounced = useDebouncedCallback(fetchOptions, DELAY);

  const onSearchChange = useCallback(
    (value: string) => {
      if (value.length < MIN_LENGTH) {
        clearState();
        debounced.cancel();
        return;
      }
      debounced(value);
    },
    [clearState, debounced]
  );

  return (
    <Select.Memo
      {...props}
      options={items}
      onSearchChange={onSearchChange}
      isLoading={status === 'loading'}
      error={(error || props.error) ?? undefined}
      placeholder={placeholder}
      placeholderDropdown={(v) => dynamicPlaceholder(v, status)}
    />
  );
};
