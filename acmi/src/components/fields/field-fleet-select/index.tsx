'use client';

import { useState } from 'react';
import { Field, FieldProps } from 'formik';

import { TypeFleet } from '@/types';
import { FleetSelect } from '@/components';
import { controlFormikError } from '@/utils';

import { FleetItem, getItemText, getStoreFleet } from './config';

interface FieldFleetAircraftTypeSelectProps {
  name: string;
  label: string;
  className?: string;
  typeFleet: TypeFleet;
  isDisabled?: boolean;
  placeholderEmpty?: string;
  placeholderFilter?: string;
}

export const FieldFleetSelect = ({
  name,
  label,
  typeFleet,
  ...props
}: FieldFleetAircraftTypeSelectProps) => {
  const { store, key } = getStoreFleet(typeFleet);
  const storeState = store();

  const raw = storeState[key as keyof typeof storeState] as FleetItem[];

  const [filter, setFilter] = useState('');

  return (
    <Field name={name}>
      {({ field, meta, form }: FieldProps) => {
        const error = controlFormikError(meta, name, label);

        const findOption = field.value ? raw.find((item) => item.id === field.value) : null;

        const selectedOption = findOption
          ? { value: findOption.id, text: getItemText(findOption) }
          : null;

        const onChange = async (optionValue: number) => {
          if (name) {
            await form.setFieldValue(name, optionValue);
          }
        };

        return (
          <FleetSelect
            {...props}
            label={label}
            error={error}
            filter={filter}
            setFilter={setFilter}
            selectedOption={selectedOption}
            onChange={(option) => onChange(option.value as number)}
            placeholderEmpty={props.placeholderEmpty || 'No available options'}
            placeholderFilter={props.placeholderFilter || 'Enter to start search'}
            options={raw
              .filter((item) => getItemText(item).toLowerCase().includes(filter.toLowerCase()))
              .map((item) => ({ value: item.id, text: getItemText(item) }))}
          />
        );
      }}
    </Field>
  );
};
