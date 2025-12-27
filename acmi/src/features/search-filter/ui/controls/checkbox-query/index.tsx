'use client';

import { memo, useCallback } from 'react';

import { Checkbox, CheckboxProps } from '@/shared/ui';

import { useUrlParam } from '../../../model/useUrlParam';

export type CheckboxQueryProps = Omit<CheckboxProps, 'onChange' | 'checked' | 'type'> & {
  queryKey: string;
} & ({ type: 'radio'; value: string } | { type?: 'checkbox' });

export const CheckboxQuery = memo(({ queryKey, value, type, ...props }: CheckboxQueryProps) => {
  const { value: incomeValue, setValue } = useUrlParam(queryKey);

  const onChange = useCallback(
    (value: string | boolean) => {
      if (value) {
        setValue(String(value));
      } else {
        setValue(null);
      }
    },
    [setValue]
  );

  if (type === 'radio') {
    return (
      <Checkbox.Memo
        {...props}
        type={'radio'}
        value={value ?? ''}
        onChange={onChange}
        checked={value === incomeValue}
      />
    );
  }

  return <Checkbox.Memo {...props} type={type} onChange={onChange} checked={value === 'true'} />;
});

CheckboxQuery.displayName = 'CheckboxQuery';
