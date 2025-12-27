'use client';

import { SmartField } from '@/shared/lib';
import { SelectOption } from '@/shared/types';
import { controlFormikError } from '@/shared/utils';

import { SelectAirport, SelectAirportProps } from '../select-airport';

type IncomeSelectAirportFieldProps = Omit<SelectAirportProps<SelectOption>, 'value' | 'onChange'>;

export type SelectAirportFieldProps = {
  name: string;
} & IncomeSelectAirportFieldProps;

export const SelectAirportField = ({ name }: SelectAirportFieldProps) => {
  return (
    <SmartField name={name}>
      {({ form: { setFieldValue }, field, meta }) => {
        const error = controlFormikError(meta, name);

        const handleChange = (next: SelectOption | null) => {
          setFieldValue(name, next);
        };

        return <SelectAirport error={error} onChange={handleChange} value={field.value ?? null} />;
      }}
    </SmartField>
  );
};
