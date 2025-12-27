'use client';

import { memo, useCallback } from 'react';

import { AdapterSwitcher, AdapterSwitcherProps } from '@/shared/ui';

import { useUrlParam } from '../../../model/useUrlParam';

type AdapterSwitcherPropsWithoutValue = Omit<AdapterSwitcherProps, 'value' | 'onChange'>;

export type SwitcherQueryProps = {
  queryKey: string;
} & AdapterSwitcherPropsWithoutValue;

export const SwitcherQuery = memo(({ queryKey, ...props }: SwitcherQueryProps) => {
  const { value, setValue } = useUrlParam(queryKey);

  const onChange = useCallback(
    (isWide: boolean) => {
      if (isWide) {
        setValue('true');
      } else {
        setValue(null);
      }
    },
    [setValue]
  );

  return <AdapterSwitcher {...props} value={!!value} onChange={onChange} />;
});

SwitcherQuery.displayName = 'SwitcherQuery';
