'use client';

import { Options } from './options';
import { Selected } from './selected';
import { SelectLogic } from '../select-logic';
import { ISelectOption, SelectLogicWrapperProps } from '../select-logic/types';

import { cn } from '@/utils';

export interface PickerSelectProps
  extends Omit<
    SelectLogicWrapperProps,
    'selectedOption' | 'renderOptions' | 'renderSelected' | 'onChange'
  > {
  selected: ISelectOption;
  onChange: (option: ISelectOption | null) => void;
}

export const PickerSelect = ({
  selected,
  onChange,
  className,
  isLoading,
  isDisabled,
  ...restProps
}: PickerSelectProps) => {
  return (
    <SelectLogic
      {...restProps}
      isLoading={isLoading}
      isDisabled={isDisabled}
      selectedOption={selected}
      className={cn('max-w-[150px]', className)}
      renderOptions={({ ...props }) => (
        <Options selected={selected} {...props} onChange={onChange} />
      )}
      renderSelected={({ ...props }) => <Selected isDisabled={isDisabled} {...props} />}
    />
  );
};
