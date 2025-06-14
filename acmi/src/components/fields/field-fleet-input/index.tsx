'use client';

import { Field, FieldProps } from 'formik';

import { FleetInput } from '@/components';
import { controlFormikError } from '@/utils';
import { FleetInputProps } from '@/components/inputs/fleet-input';

interface FieldFleetInputProps extends FleetInputProps {
  name: string;
}

export const FieldFleetInput = (props: FieldFleetInputProps) => {
  return (
    <Field name={props.name}>
      {({ field, meta, form }: FieldProps) => {
        const error = controlFormikError(meta, props.name, props.label);

        const change = async (newValue: string) => {
          if (props.name) {
            await form.setFieldValue(props.name, newValue);
          }
        };

        return <FleetInput {...field} {...props} error={error} onChange={change} />;
      }}
    </Field>
  );
};
