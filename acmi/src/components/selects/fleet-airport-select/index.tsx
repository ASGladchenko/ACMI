'use client';

import { useState } from 'react';

import { useAirportOptions } from '@/hooks';

import { FleetSelect } from '../fleet-select';
import { ISelectOption } from '../select-logic/types';

interface FleetAirportSelectProps {
  error?: string;
  className?: string;
  isDisabled?: boolean;
  selectedOption: ISelectOption | null;
  onChange: (option: ISelectOption) => void;
}

export const FleetAirportSelect = ({
  error,
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
      label="Base :"
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
