'use client';

import { useState } from 'react';

import { Options } from './options';
import { Selected } from './selected';
import { SelectLogic } from '../select-logic';
import { ISelectOption, SelectLogicWrapperProps } from '../select-logic/types';

export interface SelectClientProps
  extends Omit<
    SelectLogicWrapperProps,
    'selectedOption' | 'renderOptions' | 'renderSelected' | 'onChange'
  > {
  label: string;
  error?: string;
  selected: ISelectOption | null;
  onChange: (option: ISelectOption | null) => void;
}

export const SelectClient = ({
  label,
  error,
  options,
  selected,
  onChange,
  className,
  isLoading,
  isDisabled,
  ...restProps
}: SelectClientProps) => {
  const [filter, setFilter] = useState('');

  const filteredOptions = options.filter((option) =>
    option.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <SelectLogic
      {...restProps}
      className={className}
      isLoading={isLoading}
      isDisabled={isDisabled}
      options={filteredOptions}
      selectedOption={selected}
      renderOptions={({ ...props }) => (
        <Options
          {...props}
          error={error}
          isLoading={isLoading}
          onChange={onChange}
          setFilter={setFilter}
        />
      )}
      renderSelected={({ ...props }) => (
        <Selected
          label={label}
          error={error}
          filter={filter}
          onChange={onChange}
          setFilter={setFilter}
          isDisabled={isDisabled}
          {...props}
        />
      )}
    />
  );
};
