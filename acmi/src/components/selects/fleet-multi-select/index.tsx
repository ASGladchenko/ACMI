'use client';

import { useState } from 'react';

import { cn } from '@/utils';

import { SelectLogic } from '../select-logic';
import { FleetOptions } from './fleet-options';
import { FilterSelected } from './filter-selected';
import { ISelectOption } from '../select-logic/types';

export interface FleetMultiSelectProps {
  label: string;
  error?: string;
  className?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  options: ISelectOption[];
  placeholderEmpty?: string;
  placeholderFilter?: string;
  selectedOption: ISelectOption[] | null;
  onChange: (option: ISelectOption[]) => void;
}
export const FleetMultiSelect = ({
  label,
  error,
  options,
  onChange,
  isLoading,
  className,
  isDisabled,
  selectedOption = [],
  placeholderEmpty,
  placeholderFilter = 'Enter text to start search',
}: FleetMultiSelectProps) => {
  const [filter, setFilter] = useState('');

  const cl = cn('border-0 h-max', className);

  const handleOptionChange = (option: ISelectOption) => {
    const currentSelected = selectedOption as ISelectOption[];

    const isOptionInSelected = currentSelected.some((selected) => selected.value === option.value);

    if (!isOptionInSelected) {
      onChange([...currentSelected, option]);
    } else {
      onChange(currentSelected.filter((selected) => selected.value !== option.value));
    }
  };
  const filteredOptions = options.filter((option) =>
    option.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <SelectLogic
      className={cl}
      isDisabled={isDisabled}
      options={filteredOptions}
      selectedOption={selectedOption}
      renderOptions={(props) => (
        <FleetOptions
          {...props}
          filter={filter}
          isLoading={isLoading}
          onChangeFilter={setFilter}
          onChange={handleOptionChange}
          placeholder={placeholderFilter}
          placeholderEmpty={placeholderEmpty}
          selectedOptions={selectedOption || []}
        />
      )}
      renderSelected={(props) => (
        <FilterSelected
          {...props}
          label={label}
          error={error}
          option={selectedOption}
          isDisabled={isDisabled}
        />
      )}
    />
  );
};
