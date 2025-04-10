'use client';

import { useFilters } from '@/context';
import {
  SelectClient,
  Checkbox,
  FilterLayout,
  ISelectOption,
  MultiSelectClient,
} from '@/components';

const options = [
  { text: 'test', value: 'test' },
  { text: 'test2', value: 'test2' },
  { text: 'test3', value: 'test3' },
  { text: 'test4', value: 'test4' },
  { text: 'test5', value: 'test5' },
  { text: 'test6', value: 'test6' },
  { text: 'test7', value: 'test7' },
  { text: 'test8', value: 'test8' },
  { text: 'test9', value: 'test9' },
];

export const SideFilter = () => {
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

  return (
    <>
      <div className="bg-white-dark shadow-sm-black laptop:flex hidden w-[325px] flex-col gap-1.5 px-2.5 py-4.5">
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
