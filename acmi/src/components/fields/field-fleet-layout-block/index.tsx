'use client';

import { Field, FieldProps } from 'formik';

import { LayoutBlock } from '@/components';
import { getSummarySeats, controlFormikError } from '@/utils';
import { SetLayOutProps, LayoutBlockProps } from '@/components/layout-block';

interface FieldFleetLayoutBlockProps extends Omit<LayoutBlockProps, 'layout' | 'setLayout'> {
  name: string;
}

export const FieldFleetLayoutBlock = (props: FieldFleetLayoutBlockProps) => {
  return (
    <Field name={props.name}>
      {({ field: { value: values, ...fieldProps }, form }: FieldProps) => {
        const error = controlFormikError(form.getFieldMeta('layout'), 'layout');

        const setLayout = async ({ key, type, value }: SetLayOutProps) => {
          if (props.name) {
            const currentValues = { ...values, [key]: { ...values[key], [type]: value } };

            await form.setFieldValue(`${props.name}.${key}.${type}`, value);
            await form.setFieldValue('layout', getSummarySeats(currentValues));
          }
        };

        return (
          <LayoutBlock
            {...fieldProps}
            {...props}
            error={error}
            layout={values}
            setLayout={setLayout}
            layoutSummary={form.values.layout}
          />
        );
      }}
    </Field>
  );
};
