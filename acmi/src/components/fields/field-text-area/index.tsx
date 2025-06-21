'use client';

import { Field, FieldProps } from 'formik';

import { TextArea } from '@/components';
import { controlFormikError } from '@/utils';
import { TextAreaProps } from '@/components/text-area';

interface FieldTextAreaProps extends Omit<TextAreaProps, 'onChange' | 'value'> {
  name: string;
}

export const FieldTextArea = ({ name, ...props }: FieldTextAreaProps) => {
  return (
    <Field name={name}>
      {({ field, meta, form }: FieldProps) => {
        const error = controlFormikError(meta, name, '');

        const change = async (value: string) => {
          if (name) {
            await form.setFieldValue(name, value);
          }
        };

        return <TextArea {...props} value={field.value} error={error} onChange={change} />;
      }}
    </Field>
  );
};
