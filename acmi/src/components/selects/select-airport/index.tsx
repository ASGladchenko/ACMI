'use client';
import { useState } from 'react';

import { useAirportOptions } from '@/hooks';

import { Options } from './options';
import { Selected } from './selected';
import { SelectLogic } from '../select-logic';
import { ISelectOption, SelectLogicWrapperProps } from '../select-logic/types';

export interface SelectClientProps
  extends Omit<
    SelectLogicWrapperProps,
    'selectedOption' | 'renderOptions' | 'renderSelected' | 'onChange' | 'options'
  > {
  label: string;
  selected: string | null;
  onChange: (option: ISelectOption | null) => void;
}

export const SelectAirport = ({
  label,
  selected,
  onChange,
  className,
  isLoading,
  isDisabled,
  ...restProps
}: SelectClientProps) => {
  const [filter, setFilter] = useState('');
  const { options, loading, debouncedFilter } = useAirportOptions(filter, 500);

  return (
    <SelectLogic
      {...restProps}
      className={className}
      isLoading={isLoading}
      isDisabled={isDisabled}
      options={options}
      selectedOption={selected ? ({ value: selected, text: selected } as ISelectOption) : null}
      renderOptions={({ ...props }) => (
        <Options {...props} filter={debouncedFilter} isLoading={loading} onChange={onChange} />
      )}
      renderSelected={({ ...props }) => (
        <Selected
          label={label}
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
