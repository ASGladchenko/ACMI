'use client';

import { Field, FieldProps } from 'formik';

import { controlFormikError } from '@/utils';
import { FleetDatePicker } from '@/components';
import { FleetDatePickerProps } from '@/components/date-pickers/date-fleet';

interface FieldFleetDatePickerProps
  extends Omit<FleetDatePickerProps, 'error' | 'onChange' | 'initialDate'> {
  name: string;
}

export const FieldFleetDatePicker = (props: FieldFleetDatePickerProps) => {
  return (
    <Field name={props.name}>
      {({ field: { value, ...fieldProps }, meta, form }: FieldProps) => {
        const error = controlFormikError(meta, props.name, props.label);

        const change = async (date: Date | null) => {
          if (props.name) {
            await form.setFieldValue(props.name, date);
          }
        };

        return (
          <FleetDatePicker
            {...fieldProps}
            {...props}
            error={error}
            onChange={change}
            initialDate={value}
          />
        );
      }}
    </Field>
  );
};
