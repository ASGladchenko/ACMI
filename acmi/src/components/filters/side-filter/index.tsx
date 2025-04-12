'use client';

import {
  SelectClient,
  Checkbox,
  FilterLayout,
  ISelectOption,
  MultiSelectClient,
} from '@/components';
import { cn } from '@/utils';
import { useFilters } from '@/context';
import { useScrollThreshold } from '@/hooks';

import { options } from '@/components/mock';

export interface SideFilterProps {
  className?: string;
}

export const SideFilter = ({ className }: SideFilterProps) => {
  const isFixed = useScrollThreshold(220);

  const { checkBoxes, setCheckBoxes, selects, setSelects, setMultiSelects, multiSelects } =
    useFilters();

  const handleCheckBoxChange = (name: string, value: boolean) => {
    setCheckBoxes({
      ...checkBoxes,
      [name]: value,
    });
  };

  const handleSelectChange = (name: string, value: ISelectOption) => {
    setSelects({
      ...selects,
      [name]: value,
    });
  };

  const handleMultiSelectChange = (name: string, value: ISelectOption[]) => {
    setMultiSelects({
      ...multiSelects,
      [name]: value,
    });
  };

  const cl = cn(
    'bg-white-dark hidden min-[1240px]:flex hidden w-[325px] flex-col gap-1.5 px-2.5 py-4.5',
    className,
    isFixed &&
      'sticky top-[76px] scroll-bar-mini h-[calc(100dvh-76px)] overflow-y-auto shrink-0 rounded-t-2xl'
  );

  return (
    <>
      <div className={cl}>
        <MultiSelectClient
          options={options}
          placeholder="enter"
          label="Aircraft types"
          selected={multiSelects.aircraftTypes || []}
          onChange={(option) => handleMultiSelectChange('aircraftTypes', option as ISelectOption[])}
        />

        <FilterLayout />

        <SelectClient
          options={options}
          placeholder="enter"
          label="Cartifications"
          selected={selects.certifications}
          onChange={(option) => handleSelectChange('certifications', option as ISelectOption)}
        />

        <SelectClient
          label="ETOPS"
          options={options}
          placeholder="enter"
          selected={selects.etops}
          onChange={(option) => handleSelectChange('etops', option as ISelectOption)}
        />

        <SelectClient
          options={options}
          placeholder="enter"
          label="Max age, years"
          selected={selects.maxAge}
          onChange={(option) => handleSelectChange('maxAge', option as ISelectOption)}
        />

        <SelectClient
          options={options}
          placeholder="enter"
          label="Max noise level"
          selected={selects.maxNoiseLevel}
          onChange={(option) => handleSelectChange('maxNoiseLevel', option as ISelectOption)}
        />

        <SelectClient
          options={options}
          placeholder="enter"
          label="Min approach cat"
          selected={selects.minApproachCat}
          onChange={(option) => handleSelectChange('minApproachCat', option as ISelectOption)}
        />

        <Checkbox
          label="IOSA"
          checked={checkBoxes.IOSA}
          onChange={(value) => handleCheckBoxChange('IOSA', value)}
        />
        <Checkbox
          label="ACT"
          checked={checkBoxes.ACT}
          onChange={(value) => handleCheckBoxChange('ACT', value)}
        />
        <Checkbox
          label="Galley ovens"
          checked={checkBoxes.Galley}
          onChange={(value) => handleCheckBoxChange('Galley', value)}
        />
        <Checkbox
          label="WiFi"
          checked={checkBoxes.WiFi}
          onChange={(value) => handleCheckBoxChange('WiFi', value)}
        />
        <Checkbox
          label="IFE"
          checked={checkBoxes.IFE}
          onChange={(value) => handleCheckBoxChange('IFE', value)}
        />
        <Checkbox
          label="ISPS"
          checked={checkBoxes.ISPS}
          onChange={(value) => handleCheckBoxChange('ISPS', value)}
        />
        <Checkbox
          label="All male crew"
          checked={checkBoxes.All}
          onChange={(value) => handleCheckBoxChange('All', value)}
        />
        <Checkbox
          label="Winglets/Sharklets"
          checked={checkBoxes.Winglets}
          onChange={(value) => handleCheckBoxChange('Winglets', value)}
        />
        <Checkbox
          checked={checkBoxes.Dangerous}
          label="Dangerous goods certification"
          onChange={(value) => handleCheckBoxChange('Dangerous', value)}
        />
      </div>
    </>
  );
};
