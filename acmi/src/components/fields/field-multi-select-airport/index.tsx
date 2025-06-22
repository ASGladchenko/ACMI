'use client';

import { Field, FieldProps } from 'formik';

import { controlFormikError } from '@/utils';
import {
  MultiSelectAirport,
  MultiSelectAirportProps,
} from '@/components/selects/multi-select-airport';

interface FieldMultiSelectAirportProps
  extends Omit<MultiSelectAirportProps, 'error' | 'onChange' | 'selected'> {
  name: string;
}

export const FieldMultiSelectAirport = ({ name, ...props }: FieldMultiSelectAirportProps) => {
  return (
    <Field name={name}>
      {({ field: { value, ...fieldProps }, meta, form }: FieldProps) => {
        const error = controlFormikError(meta, name, props.label);

        const change = async (options: (string | number)[]) => {
          if (name) {
            await form.setFieldValue(name, options);
          }
        };

        return (
          <MultiSelectAirport
            {...fieldProps}
            {...props}
            error={error}
            selected={value}
            onChange={change}
          />
        );
      }}
    </Field>
  );
};
