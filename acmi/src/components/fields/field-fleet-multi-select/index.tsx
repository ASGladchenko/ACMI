'use client';

import { Field, FieldProps } from 'formik';

import { controlFormikError } from '@/utils';
import { ISelectOption, FleetMultiSelect } from '@/components';

interface FieldFleetMultiSelectProps {
  name: string;
  label: string;
  className?: string;
  isDisabled?: boolean;
  placeholderEmpty?: string;
  options?: ISelectOption[];
  placeholderFilter?: string;
}

export const FieldFleetMultiSelect = ({
  name,
  label,
  options = [],
  ...props
}: FieldFleetMultiSelectProps) => {
  return (
    <Field name={name}>
      {({ field, meta, form }: FieldProps) => {
        const error = controlFormikError(meta, name, label);

        const selected = options.filter((option) => field.value?.includes(option.value));

        const onChange = async (options: ISelectOption[]) => {
          const preparedOptions = options.map((option) => option.value);

          form.setFieldValue(name, preparedOptions);
        };

        return (
          <FleetMultiSelect
            {...props}
            label={label}
            error={error}
            options={options || []}
            selectedOption={selected}
            onChange={(option) => onChange(option)}
            placeholderEmpty={props.placeholderEmpty || 'No available options'}
            placeholderFilter={props.placeholderFilter || 'Enter to start search'}
          />
        );
      }}
    </Field>
  );
};
