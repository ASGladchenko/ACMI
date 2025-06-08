'use client';

import { useState } from 'react';

import { useAirCraftTypesStore } from '@/store';

import { FleetSelect } from '../fleet-select';

interface FleetAircraftTypeSelectProps {
  error?: string;
  selected?: number;
  className?: string;
  isDisabled?: boolean;
  onChange: (value: number) => void;
}

export const FleetAircraftTypeSelect = ({
  error,
  selected,
  onChange,
  className,
  isDisabled,
}: FleetAircraftTypeSelectProps) => {
  const raw = useAirCraftTypesStore((s) => s.aircraftTypes);

  const [filter, setFilter] = useState('');

  const findOption = selected ? raw.find((item) => item.id === selected) : null;

  const selectedOption = findOption ? { value: findOption.id, text: findOption.model } : null;

  return (
    <FleetSelect
      aircraft
      error={error}
      label="Type :"
      filter={filter}
      className={className}
      setFilter={setFilter}
      isDisabled={isDisabled}
      selectedOption={selectedOption}
      placeholderEmpty="No available options"
      placeholderFilter="Enter to start search"
      onChange={(option) => onChange(option.value as number)}
      options={raw
        .filter((item) => item.model.toLowerCase().includes(filter.toLowerCase()))
        .map((item) => ({ value: item.id, text: item.model }))}
    />
  );
};
