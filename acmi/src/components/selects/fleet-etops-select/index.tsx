'use client';

import { useState } from 'react';

import { useETOPSStore } from '@/store';

import { FleetSelect } from '../fleet-select';

interface FleetAircraftTypeSelectProps {
  error?: string;
  selected?: number;
  className?: string;
  isDisabled?: boolean;
  onChange: (value: number) => void;
}

export const FleetETOPSSelect = ({
  error,
  onChange,
  selected,
  className,
  isDisabled,
}: FleetAircraftTypeSelectProps) => {
  const raw = useETOPSStore((s) => s.etops);

  const [filter, setFilter] = useState('');

  const findOption = selected ? raw.find((item) => item.id === selected) : null;

  const selectedOption = findOption
    ? { value: findOption.id, text: findOption.etops_rating }
    : null;

  return (
    <FleetSelect
      error={error}
      label="ETOPS :"
      filter={filter}
      className={className}
      setFilter={setFilter}
      isDisabled={isDisabled}
      selectedOption={selectedOption}
      placeholderEmpty="No available options"
      placeholderFilter="Enter to start search"
      onChange={(option) => onChange(option.value as number)}
      options={raw
        .filter((item) => item.etops_rating.toLowerCase().includes(filter.toLowerCase()))
        .map((item) => ({ value: item.id, text: item.etops_rating }))}
    />
  );
};
