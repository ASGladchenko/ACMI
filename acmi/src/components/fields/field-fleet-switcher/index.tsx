'use client';

import { Field, FieldProps } from 'formik';

import { Switcher } from '@/components';
import { controlFormikError } from '@/utils';
import { SwitcherProps } from '@/components/switchers/switcher';
import { validationSchema } from '@/app/(divider)/(dashboard)/dashboard-provider/components/fleet-card/config';

interface FieldFleetSwitcherProps extends Omit<SwitcherProps, 'isActive' | 'onClick'> {
  id: string;
  name: string;
  disabled?: boolean;
  onSendActive: (id: string, value: boolean) => void;
}

export const FieldFleetSwitcher = (props: FieldFleetSwitcherProps) => {
  return (
    <Field name={props.name}>
      {({ field: { value, ...fieldProps }, meta, form }: FieldProps) => {
        const error = controlFormikError(meta, props.name);

        const checkFieldsValidity = () => {
          try {
            const initialValuesWithoutIsActive = { ...form.initialValues };
            delete initialValuesWithoutIsActive[props.name];

            const schemaWithoutIsActive = validationSchema.omit(['isActive']);

            schemaWithoutIsActive.validateSync(initialValuesWithoutIsActive, { abortEarly: false });

            return true;
          } catch {
            return false;
          }
        };

        const isDisabled = props.disabled || !checkFieldsValidity();

        const onClick = async (isActive: boolean) => {
          if (props.name && !isDisabled) {
            await form.setFieldValue(props.name, isActive);
            await props.onSendActive(props.id, isActive);
          }
        };

        return (
          <Switcher
            {...fieldProps}
            {...props}
            error={error}
            isActive={value}
            disabled={isDisabled}
            onClick={isDisabled ? undefined : onClick}
          />
        );
      }}
    </Field>
  );
};
