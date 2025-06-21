'use client';

import { Field, FieldProps } from 'formik';

import { controlFormikError } from '@/utils';
import { ISelectOption, FleetAirportSelect, SelectAirport } from '@/components';
import { FleetAirportSelectProps } from '@/components/selects/fleet-airport-select';

interface FieldFleetAirportProps
  extends Omit<FleetAirportSelectProps, 'error' | 'selectedOption' | 'onChange'> {
  name: string;
  variant?: 'fleet' | 'standard';
}

export const FieldFleetAirport = ({ variant = 'fleet', ...props }: FieldFleetAirportProps) => {
  return (
    <Field name={props.name}>
      {({ field: { value, ...fieldProps }, meta, form }: FieldProps) => {
        const error = controlFormikError(meta, props.name, props.label);

        const change = async (option: ISelectOption | null) => {
          if (props.name) {
            await form.setFieldValue(props.name, option);
          }
        };

        if (variant === 'standard') {
          return (
            <SelectAirport
              label={props.label}
              selected={value || null}
              className={props.className}
              isDisabled={props.isDisabled}
              onChange={(option) => change(option)}
            />
          );
        }

        return (
          <FleetAirportSelect
            {...fieldProps}
            {...props}
            error={error}
            selectedOption={value}
            onChange={(option) => change(option)}
          />
        );
      }}
    </Field>
  );
};
