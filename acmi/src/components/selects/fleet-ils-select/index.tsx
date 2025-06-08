'use client';

import { useState } from 'react';

import { useILSCategoryStore } from '@/store';

import { FleetSelect } from '../fleet-select';

interface FleetIlsSelectProps {
  error?: string;
  className?: string;
  selected?: number;
  isDisabled?: boolean;
  onChange: (value: number) => void;
}

export const FleetIlsSelect = ({
  error,
  onChange,
  selected,
  className,
  isDisabled,
}: FleetIlsSelectProps) => {
  const raw = useILSCategoryStore((s) => s.ilsCategory);

  const [filter, setFilter] = useState('');

  const findOption = selected ? raw.find((item) => item.id === selected) : null;

  const selectedOption = findOption ? { value: findOption.id, text: findOption.category } : null;

  return (
    <FleetSelect
      error={error}
      filter={filter}
      className={className}
      setFilter={setFilter}
      label="ILS Category :"
      isDisabled={isDisabled}
      selectedOption={selectedOption}
      placeholderEmpty="No available options"
      placeholderFilter="Enter to start search"
      onChange={(option) => onChange(option.value as number)}
      options={raw
        .filter((item) => item.category.toLowerCase().includes(filter.toLowerCase()))
        .map((item) => ({ value: item.id, text: item.category }))}
    />
  );
};
