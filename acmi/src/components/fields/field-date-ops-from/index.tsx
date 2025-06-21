'use client';

import { Field, FieldProps } from 'formik';

import { controlFormikError } from '@/utils';
import { DateOpsFrom, DateOpsFromProps } from '@/components/date-pickers/date-ops-from';

interface FieldDateOpsFromProps extends Omit<DateOpsFromProps, 'error' | 'onChange' | 'selected'> {
  name: string;
}

export const FieldDateOpsFrom = ({ name, ...props }: FieldDateOpsFromProps) => {
  return (
    <Field name={name}>
      {({ field: { value, ...fieldProps }, meta, form }: FieldProps) => {
        const error = controlFormikError(meta, name, props.label);

        const change = async (dates: [Date | null, Date | null]) => {
          if (name) {
            await form.setFieldValue(name, { datesFrom: dates[0], datesTo: dates[1] });
          }
        };

        return (
          <DateOpsFrom
            {...fieldProps}
            {...props}
            error={error}
            onChange={change}
            initialEnd={value.datesTo}
            initialStart={value.datesFrom}
          />
        );
      }}
    </Field>
  );
};
