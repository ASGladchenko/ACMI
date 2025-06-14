'use client';

import { useState } from 'react';

import { useAirportOptions } from '@/hooks';

import { Options } from './options';
import { Selected } from './selected';
import { SelectLogic } from '../select-logic';
import { ISelectOption, SelectLogicWrapperProps } from '../select-logic/types';

export interface MultiSelectAirportProps
  extends Omit<
    SelectLogicWrapperProps,
    'selectedOption' | 'renderOptions' | 'renderSelected' | 'onChange' | 'options'
  > {
  label: string;
  selected: string[];
  onChange: (option: (string | number)[]) => void;
}

export const MultiSelectAirport = ({
  label,
  selected,
  onChange,
  className,
  isLoading,
  isDisabled,
  ...restProps
}: MultiSelectAirportProps) => {
  const [filter, setFilter] = useState('');
  const { options, loading, debouncedFilter } = useAirportOptions(filter);

  const handleChange = (option: ISelectOption) => {
    const isInArray = selected.includes(option.text as string);

    onChange(
      isInArray ? selected.filter((item) => item !== option.text) : [...selected, option.text]
    );
  };

  const handleDeleteSelected = (options: string[]) => {
    onChange(options);
  };

  const selectedOption = selected.map((item) => ({ value: item, text: item }));

  return (
    <SelectLogic
      {...restProps}
      options={options}
      className={className}
      isLoading={isLoading}
      isDisabled={isDisabled}
      selectedOption={selectedOption}
      renderOptions={({ ...props }) => (
        <Options
          {...props}
          filter={filter}
          isLoading={loading}
          setFilter={setFilter}
          onChange={handleChange}
          selectedOption={selectedOption}
          debouncedFilter={debouncedFilter}
        />
      )}
      renderSelected={({ option, ...props }) => (
        <Selected
          label={label}
          isDisabled={isDisabled}
          onChange={handleDeleteSelected}
          option={option as ISelectOption[]}
          {...props}
        />
      )}
    />
  );
};
