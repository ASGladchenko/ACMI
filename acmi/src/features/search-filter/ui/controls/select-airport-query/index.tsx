'use client';

import { memo } from 'react';

import { SelectOption } from '@/shared/types';

import { useUrlParam } from '../../../model/useUrlParam';
import { SelectAirport, SelectAirportProps } from '@/entities';

export type SelectAirportQueryProps = Omit<SelectAirportProps<SelectOption>, 'value' | 'onChange'>;

export const SelectAirportQuery = memo(({ ...props }: SelectAirportQueryProps) => {
  const { value, setValue } = useUrlParam('airport_code');

  const onSelect = (opt: SelectOption | null) => {
    setValue(opt ? `${opt.id}, ${opt.label}` : null);
  };

  const [code, airport] = value.split(',').map((v) => v.trim());

  const selected = code && airport ? { id: code, label: `${code}, ${airport}` } : null;

  return <SelectAirport {...props} value={selected} onChange={onSelect} />;
});

SelectAirportQuery.displayName = 'SelectAirportQuery';
