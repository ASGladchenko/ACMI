'use client';

import { toISO, fromISO, controlFormikError } from '@/shared/utils';
import {
  Label,
  DatePickerInput,
  AppliedLabelProps,
  DatePickerInputProps,
  DatePickerInputOnChangeProps,
} from '@/shared/ui';

import { SmartField } from '../smart-field';

type IncomeDatePickerFieldProps = Omit<
  DatePickerInputProps,
  'error' | 'onChange' | 'initialEnd' | 'initialStart' | 'name'
>;
export type DatePickerFieldProps = {
  name: string;
} & IncomeDatePickerFieldProps &
  AppliedLabelProps;

export const DatePickerField = ({ name, label, labelAs, ...props }: DatePickerFieldProps) => {
  return (
    <SmartField name={name}>
      {({ form: { setFieldValue }, field, meta }) => {
        const error = controlFormikError(meta, name);

        const handleChange = (next: DatePickerInputOnChangeProps) => {
          const value = { start: toISO(next[0]) ?? '', end: toISO(next[1]) || '' };
          setFieldValue(name, value);
        };

        return (
          <Label as={labelAs} label={label}>
            <DatePickerInput
              {...props}
              error={error}
              onChange={handleChange}
              initialEnd={fromISO(field.value?.end || field.value)}
              initialStart={fromISO(field.value?.start || field.value)}
            />
          </Label>
        );
      }}
    </SmartField>
  );
};
