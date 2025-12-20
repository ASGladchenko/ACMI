'use client';

import { memo, useCallback } from 'react';

import { BodySwitcher, BodySwitcherProps } from '@/shared/ui';

import { useUrlParam } from '../../model/useUrlParam';

export type BodySwitcherQueryProps = Omit<BodySwitcherProps, 'isWide' | 'setIsWide'>;

export const BodySwitcherQuery = memo((props: BodySwitcherQueryProps) => {
  const { value, setValue } = useUrlParam('is_wide');

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

  return <BodySwitcher.Memo {...props} isWide={!!value} setIsWide={onChange} />;
});

BodySwitcherQuery.displayName = 'BodySwitcherQuery';
