'use client';

import { Field, FieldProps } from 'formik';

import { FleetCheckbox } from '@/components';
import { controlFormikError } from '@/utils';
import { FleetCheckboxProps } from '@/components/checkboxes/fleet-checkbox';

interface FieldFleetCheckboxProps extends Omit<FleetCheckboxProps, 'checked' | 'onChange'> {
  name: string;
  label: string;
}

export const FieldFleetCheckbox = (props: FieldFleetCheckboxProps) => {
  return (
    <Field name={props.name}>
      {({ field: { value, ...fieldProps }, meta, form }: FieldProps) => {
        const error = controlFormikError(meta, props.name, props.label);

        const change = async (newValue: boolean) => {
          if (props.name) {
            await form.setFieldValue(props.name, newValue);
          }
        };

        return (
          <FleetCheckbox
            {...fieldProps}
            {...props}
            error={error}
            onChange={change}
            checked={value}
          />
        );
      }}
    </Field>
  );
};
