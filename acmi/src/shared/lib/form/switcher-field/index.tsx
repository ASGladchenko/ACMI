'use client';

import { controlFormikError } from '@/shared/utils';
import { AdapterSwitcher, AdapterSwitcherProps } from '@/shared/ui';

import { SmartField } from '../smart-field';

type AdapterSwitcherPropsWithoutValue = Omit<AdapterSwitcherProps, 'value' | 'onChange'>;

export type SwitcherFieldProps = {
  name: string;
} & AdapterSwitcherPropsWithoutValue;

export const SwitcherField = ({ name, styleType = 'default', ...props }: SwitcherFieldProps) => {
  return (
    <SmartField name={name}>
      {({ form, field, meta }) => {
        const error = controlFormikError(meta, name);

        const handleChange = (next: boolean) => {
          form.setFieldValue(name, next);
        };
        return (
          <AdapterSwitcher
            {...props}
            error={error}
            value={field.value}
            styleType={styleType}
            onChange={handleChange}
          />
        );
      }}
    </SmartField>
  );
};
