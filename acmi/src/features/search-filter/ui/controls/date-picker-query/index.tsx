'use client';

import { memo, useCallback } from 'react';

import { DatePickerInput, DatePickerInputProps, DatePickerInputOnChangeProps } from '@/shared/ui';

import { useUrlParam } from '../../model/useUrlParam';
import { getPreparedDate, normalizeInitialDates } from './helpers';

export type DatePickerQueryProps = Omit<
  DatePickerInputProps,
  'initialStart' | 'initialEnd' | 'onChange'
>;

export const DatePickerQuery = memo(({ ...props }: DatePickerQueryProps) => {
  const { value: date, setValue: setDate } = useUrlParam('dates');

  const onChange = useCallback(
    (value: DatePickerInputOnChangeProps) => {
      const newDate = getPreparedDate(value);
      setDate(newDate);
    },
    [setDate]
  );

  const { start, end } = normalizeInitialDates(date);
  return (
    <DatePickerInput.Memo {...props} onChange={onChange} initialStart={start} initialEnd={end} />
  );
});

DatePickerQuery.displayName = 'DatePickerQuery';
