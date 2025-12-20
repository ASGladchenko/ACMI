'use client';

import { memo, useCallback } from 'react';

import { Checkbox, CheckboxProps } from '@/shared/ui';

import { useUrlParam } from '../../model/useUrlParam';

export interface CheckboxQueryProps extends Omit<CheckboxProps, 'value' | 'checked' | 'onChange'> {
  queryKey: string;
}

export const CheckboxQuery = memo(({ queryKey, ...props }: CheckboxQueryProps) => {
  const { value, setValue } = useUrlParam(queryKey);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) {
        setValue('true');
      } else {
        setValue(null);
      }
    },
    [setValue]
  );

  return <Checkbox.Memo {...props} checked={!!value} onChange={onChange} />;
});

CheckboxQuery.displayName = 'CheckboxQuery';
