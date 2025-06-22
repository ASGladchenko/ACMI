'use client';

import { Field, FieldProps } from 'formik';

import { controlFormikError } from '@/utils';
import { SelectClient, ISelectOption } from '@/components';
import { SelectClientProps } from '@/components/selects/select-client';

interface FieldClientSelectProps
  extends Omit<SelectClientProps, 'error' | 'onChange' | 'selected'> {
  name: string;
}

export const FieldClientSelect = ({ name, ...props }: FieldClientSelectProps) => {
  return (
    <Field name={name}>
      {({ field: { value, ...fieldProps }, meta, form }: FieldProps) => {
        const error = controlFormikError(meta, name, props.label);

        const change = async (options: ISelectOption | null) => {
          if (name) {
            await form.setFieldValue(name, options);
          }
        };

        return (
          <SelectClient
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
