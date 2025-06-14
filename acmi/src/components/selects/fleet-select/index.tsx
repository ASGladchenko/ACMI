import { cn } from '@/utils';

import { SelectLogic } from '../select-logic';
import { FleetOptions } from './fleet-options';
import { FilterSelected } from './filter-selected';
import { ISelectOption } from '../select-logic/types';

export interface FleetSelectProps {
  label: string;
  error?: string;
  filter: string;
  aircraft?: boolean;
  className?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  options: ISelectOption[];
  placeholderEmpty?: string;
  placeholderFilter?: string;
  selectedOption: ISelectOption | null;
  setFilter: (filter: string) => void;
  onChange: (option: ISelectOption) => void;
}
export const FleetSelect = ({
  label,
  error,
  filter,
  options,
  aircraft,
  onChange,
  isLoading,
  className,
  setFilter,
  isDisabled,
  selectedOption,
  placeholderEmpty,
  placeholderFilter = 'Enter text to start search',
}: FleetSelectProps) => {
  const cl = cn('border-0 h-max', className);
  return (
    <SelectLogic
      className={cl}
      options={options}
      isDisabled={isDisabled}
      selectedOption={selectedOption}
      renderOptions={(props) => (
        <FleetOptions
          {...props}
          filter={filter}
          onChange={onChange}
          isLoading={isLoading}
          onChangeFilter={setFilter}
          placeholder={placeholderFilter}
          placeholderEmpty={placeholderEmpty}
        />
      )}
      renderSelected={(props) => (
        <FilterSelected
          {...props}
          label={label}
          error={error}
          aircraft={aircraft}
          option={selectedOption}
          isDisabled={isDisabled}
        />
      )}
    />
  );
};
