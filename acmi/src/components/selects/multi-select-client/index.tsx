'use client';
import { useState } from 'react';

import { Options } from './options';
import { Selected } from './selected';
import { SelectLogic } from '../select-logic';
import { ISelectOption, SelectLogicWrapperProps } from '../select-logic/types';

export interface MultiSelectClientProps
  extends Omit<
    SelectLogicWrapperProps,
    'selectedOption' | 'renderOptions' | 'renderSelected' | 'onChange'
  > {
  label: string;
  selected: ISelectOption[];
  onChange: (option: ISelectOption[]) => void;
}

export const MultiSelectClient = ({
  label,
  options,
  onChange,
  isLoading,
  isDisabled,
  placeholder,
  selected = [],
  ...restProps
}: MultiSelectClientProps) => {
  const [filter, setFilter] = useState('');

  const handleOptionChange = (option: ISelectOption) => {
    const currentSelected = selected as ISelectOption[];

    const isOptionInSelected = currentSelected.some(
      (selectedOption) => selectedOption.value === option.value
    );

    if (!isOptionInSelected) {
      onChange([...currentSelected, option]);
    } else {
      onChange(currentSelected.filter((selectedOption) => selectedOption.value !== option.value));
    }
  };

  const filteredOptions = options.filter((option) =>
    option.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <SelectLogic
      {...restProps}
      isLoading={isLoading}
      options={filteredOptions}
      selectedOption={selected}
      renderOptions={({ ...props }) => (
        <Options
          {...props}
          selected={selected}
          isLoading={isLoading}
          onChange={handleOptionChange}
        />
      )}
      renderSelected={({ ...props }) => (
        <Selected
          {...props}
          label={label}
          filter={filter}
          setFilter={setFilter}
          isDisabled={isDisabled}
          placeholder={placeholder}
          onChange={handleOptionChange}
          option={selected as ISelectOption[]}
        />
      )}
    />
  );
};
