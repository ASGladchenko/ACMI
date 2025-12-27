'use client';

import { controlFormikError } from '@/shared/utils';
import { Checkbox, CheckboxProps } from '@/shared/ui';

import { FieldMode, SmartField } from '../smart-field';

type CheckboxIncomeProps = Omit<
  CheckboxProps,
  'onChange' | 'onChange' | 'checked' | 'name' | 'type'
>;

export type CheckboxFieldProps = CheckboxIncomeProps & {
  name: string;
  mode?: FieldMode;
} & ({ type: 'radio'; value: string } | { type?: 'checkbox' });

export const CheckboxField = ({
  name,
  mode,
  value,
  type = 'checkbox',
  ...props
}: CheckboxFieldProps) => {
  return (
    <SmartField mode={mode} name={name}>
      {({ form, field, meta }) => {
        const error = controlFormikError(meta, name);

        const handleChange = (next: boolean | string) => {
          form.setFieldValue(name, next);
        };

        if (type === 'radio') {
          return (
            <Checkbox
              {...props}
              name={name}
              error={error}
              type={'radio'}
              value={value ?? ''}
              onChange={handleChange}
              checked={field.value === value}
            />
          );
        }

        return (
          <Checkbox
            {...props}
            type={type}
            error={error}
            onChange={handleChange}
            checked={field.value ?? false}
          />
        );
      }}
    </SmartField>
  );
};
