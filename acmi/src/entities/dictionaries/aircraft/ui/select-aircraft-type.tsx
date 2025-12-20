import { memo } from 'react';

import { SelectOption } from '@/shared/types';
import { MultiSelect, MultiSelectProps } from '@/shared/ui';

import { useAircraftTypes } from '../model/useAircraftTypes';

export type SelectAircraftProp<T> = Omit<MultiSelectProps<T>, 'data'>;

export const SelectAircraft = memo(
  <T extends SelectOption>({ error, isLoading, ...props }: SelectAircraftProp<T>) => {
    const { airCraftTypes, status, error: storeError } = useAircraftTypes();

    const options = airCraftTypes.map((item) => ({
      id: item.id,
      label: item.model,
    })) as T[];

    return (
      <MultiSelect
        data={options}
        error={storeError || error}
        isLoading={isLoading || status === 'loading'}
        {...props}
      />
    );
  }
);

SelectAircraft.displayName = 'SelectAircraft';
