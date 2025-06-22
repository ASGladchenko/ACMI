'use client';

import { Field, FieldProps } from 'formik';

import { controlFormikError } from '@/utils';
import { Input, FleetInput } from '@/components';
import { FleetInputProps } from '@/components/inputs/fleet-input';

interface FieldFleetInputProps extends FleetInputProps {
  name: string;
  variant?: 'client' | 'fleet';
}

export const FieldFleetInput = ({ variant = 'fleet', ...props }: FieldFleetInputProps) => {
  return (
    <Field name={props.name}>
      {({ field, meta, form }: FieldProps) => {
        const error = controlFormikError(meta, props.name, props.label);

        const change = async (newValue: string) => {
          if (props.name) {
            await form.setFieldValue(props.name, newValue);
          }
        };

        if (variant === 'client') {
          return <Input {...field} {...props} error={error} onChange={change} />;
        }

        return <FleetInput {...field} {...props} error={error} onChange={change} />;
      }}
    </Field>
  );
};
