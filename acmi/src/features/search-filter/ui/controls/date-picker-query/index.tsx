'use client';

import { memo, useCallback } from 'react';

import { DatePickerInput, DatePickerInputProps, DatePickerInputOnChangeProps } from '@/shared/ui';

import { useUrlParam } from '../../../model/useUrlParam';
import { getPreparedDate, normalizeInitialDates } from './helpers';

export type DatePickerQueryProps = Omit<
  DatePickerInputProps,
  'initialStart' | 'initialEnd' | 'onChange'
> & {
  queryKey: string;
};

export const DatePickerQuery = memo(({ queryKey, ...props }: DatePickerQueryProps) => {
  const { value: date, setValue: setDate } = useUrlParam(queryKey);

  const onChange = useCallback(
    (value: DatePickerInputOnChangeProps) => {
      const newDate = getPreparedDate(value);
      if (date !== newDate) {
        setDate(newDate);
      }
    },
    [setDate, date]
  );

  const { start, end } = normalizeInitialDates(date);
  return (
    <DatePickerInput.Memo {...props} onChange={onChange} initialStart={start} initialEnd={end} />
  );
});

DatePickerQuery.displayName = 'DatePickerQuery';
