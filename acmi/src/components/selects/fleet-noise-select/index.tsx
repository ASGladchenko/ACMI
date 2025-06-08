'use client';

import { useState } from 'react';

import { useNoiseStageStore } from '@/store';

import { FleetSelect } from '../fleet-select';

interface FleetNoiseSelectProps {
  error?: string;
  selected?: number;
  className?: string;
  isDisabled?: boolean;
  onChange: (value: number) => void;
}

export const FleetNoiseSelect = ({
  error,
  onChange,
  selected,
  className,
  isDisabled,
}: FleetNoiseSelectProps) => {
  const raw = useNoiseStageStore((s) => s.noiseStage);

  const [filter, setFilter] = useState('');

  const findOption = selected ? raw.find((item) => item.id === selected) : null;

  const selectedOption = findOption ? { value: findOption.id, text: findOption.noise_stage } : null;

  return (
    <FleetSelect
      error={error}
      label="Noise Stage :"
      filter={filter}
      className={className}
      setFilter={setFilter}
      isDisabled={isDisabled}
      selectedOption={selectedOption}
      placeholderEmpty="No available options"
      placeholderFilter="Enter to start search"
      onChange={(option) => onChange(option.value as number)}
      options={raw
        .filter((item) => item.noise_stage.toLowerCase().includes(filter.toLowerCase()))
        .map((item) => ({ value: item.id, text: item.noise_stage }))}
    />
  );
};
