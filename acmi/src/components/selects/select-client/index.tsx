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
  selected: ISelectOption | null;
  onChange: (option: ISelectOption) => void;
}

export const SelectClient = ({
  selected,
  label,
  onChange,
  isLoading,
  isDisabled,
  ...restProps
}: SelectClientProps) => {
  const [filter, setFilter] = useState('');

  return (
    <SelectLogic
      {...restProps}
      isLoading={isLoading}
      isDisabled={isDisabled}
      selectedOption={selected}
      renderOptions={({ ...props }) => (
        <Options {...props} isLoading={isLoading} onChange={onChange} />
      )}
      renderSelected={({ ...props }) => (
        <Selected
          label={label}
          filter={filter}
          setFilter={setFilter}
          isDisabled={isDisabled}
          {...props}
        />
      )}
    />
  );
};
