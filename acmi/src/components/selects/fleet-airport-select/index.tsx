'use client';

import { useState } from 'react';

import { useAirportOptions } from '@/hooks';

import { FleetSelect } from '../fleet-select';
import { ISelectOption } from '../select-logic/types';

export interface FleetAirportSelectProps {
  label: string;
  error?: string;
  className?: string;
  isDisabled?: boolean;
  placeholderEmpty?: string;
  placeholderFilter?: string;
  selectedOption: ISelectOption | null;
  onChange: (option: ISelectOption) => void;
}

export const FleetAirportSelect = ({
  error,
  label,
  onChange,
  className,
  isDisabled,
  selectedOption,
}: FleetAirportSelectProps) => {
  const [filter, setFilter] = useState('');
  const { options, loading } = useAirportOptions(filter);

  return (
    <FleetSelect
      error={error}
      label={label}
      filter={filter}
      options={options}
      onChange={onChange}
      isLoading={loading}
      className={className}
      setFilter={setFilter}
      isDisabled={isDisabled}
      selectedOption={selectedOption}
      placeholderEmpty="No available options"
      placeholderFilter="Enter to start search"
    />
  );
};
