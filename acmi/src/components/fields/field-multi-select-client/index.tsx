'use client';

import { Field, FieldProps } from 'formik';

import { controlFormikError } from '@/utils';
import { ISelectOption } from '@/components/selects';
import {
  MultiSelectClient,
  MultiSelectClientProps,
} from '@/components/selects/multi-select-client';

interface FieldMultiSelectClientProps
  extends Omit<MultiSelectClientProps, 'selected' | 'onChange' | 'error'> {
  name: string;
}

export const FieldMultiSelectClient = ({ name, ...props }: FieldMultiSelectClientProps) => {
  return (
    <Field name={name}>
      {({ field: { value, ...fieldProps }, meta, form }: FieldProps) => {
        const error = controlFormikError(meta, name, props.label);

        const change = async (options: ISelectOption[]) => {
          if (name) {
            await form.setFieldValue(name, options);
          }
        };

        return (
          <MultiSelectClient
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
