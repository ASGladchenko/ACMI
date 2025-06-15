'use client';

import { Field, FieldProps } from 'formik';

import { Switcher } from '@/components';
import { SwitcherProps } from '@/components/switchers/switcher';
import { controlFormikError } from '@/utils';

interface FieldFleetSwitcherProps extends Omit<SwitcherProps, 'isActive' | 'onClick'> {
  name: string;
  disabled?: boolean;
}

export const FieldFleetSwitcher = (props: FieldFleetSwitcherProps) => {
  return (
    <Field name={props.name}>
      {({ field: { value, ...fieldProps }, meta, form }: FieldProps) => {
        const error = controlFormikError(meta, props.name);

        const onClick = async (isActive: boolean) => {
          if (props.name) {
            await form.setFieldValue(props.name, isActive);
          }
        };

        return (
          <Switcher
            {...fieldProps}
            {...props}
            error={error}
            isActive={value}
            onClick={props.disabled ? undefined : onClick}
          />
        );
      }}
    </Field>
  );
};
