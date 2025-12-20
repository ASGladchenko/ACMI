'use client';

import { memo, useState, useCallback } from 'react';

import { useDebouncedCallback } from '@/shared/hooks';
import { InputBase, InputBaseProps } from '@/shared/ui';

import { useUrlParam } from '../../model/useUrlParam';

export interface InputQueryProps extends Omit<InputBaseProps, 'value' | 'onChange'> {
  queryKey: string;
}

export const InputQuery = memo(({ queryKey, onBlur, ...props }: InputQueryProps) => {
  const { value: urlValue, setValue } = useUrlParam(queryKey);
  const [localValue, setLocalValue] = useState(urlValue);

  const setValueStable = useCallback(
    (val: string | null) => {
      console.log('Setting value:', val);
      setValue(val);
      setLocalValue(val ?? '');
    },
    [setValue]
  );

  const debounced = useDebouncedCallback(setValueStable, 300);

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      debounced.flush();
      onBlur?.(e);
    },
    [onBlur, debounced]
  );

  const handleChange = useCallback(
    (val: string) => {
      setLocalValue(val);
      debounced(val);
    },
    [debounced]
  );

  return <InputBase {...props} value={localValue} onChange={handleChange} onBlur={handleBlur} />;
});

InputQuery.displayName = 'InputQuery';
