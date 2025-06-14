'use client';

import { Field, FieldProps } from 'formik';

import { controlFormikError } from '@/utils';
import { ISelectOption, FleetAirportSelect } from '@/components';
import { FleetAirportSelectProps } from '@/components/selects/fleet-airport-select';

interface FieldFleetAirportProps
  extends Omit<FleetAirportSelectProps, 'error' | 'selectedOption' | 'onChange'> {
  name: string;
}

export const FieldFleetAirport = (props: FieldFleetAirportProps) => {
  return (
    <Field name={props.name}>
      {({ field: { value, ...fieldProps }, meta, form }: FieldProps) => {
        const error = controlFormikError(meta, props.name, props.label);

        const change = async (option: ISelectOption | null) => {
          if (props.name && option) {
            await form.setFieldValue(props.name, option);
          }
        };

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
