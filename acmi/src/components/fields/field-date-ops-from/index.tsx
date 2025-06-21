'use client';

import { Field, FieldProps } from 'formik';

import { controlFormikError } from '@/utils';
import { DateOpsFrom, DateOpsFromProps } from '@/components/date-pickers/date-ops-from';

interface FieldDateOpsFromProps
  extends Omit<DateOpsFromProps, 'error' | 'onChange' | 'initialEnd' | 'initialStart'> {
  name: string;
}

export const FieldDateOpsFrom = ({ name, ...props }: FieldDateOpsFromProps) => {
  return (
    <Field name={name}>
      {({ field: { value, ...fieldProps }, meta, form }: FieldProps) => {
        const error = controlFormikError(meta, name, props.label);

        const change = async (dates: [Date | null, Date | null]) => {
          if (name) {
            await form.setFieldValue(name, { from: dates[0], to: dates[1] });
          }
        };

        return (
          <DateOpsFrom
            {...fieldProps}
            {...props}
            error={error}
            onChange={change}
            initialEnd={value.to}
            initialStart={value.from}
          />
        );
      }}
    </Field>
  );
};
