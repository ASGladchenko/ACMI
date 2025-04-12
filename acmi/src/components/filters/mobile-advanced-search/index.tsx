'use client';

import { useFilters } from '@/context';
import {
  Button,
  Checkbox,
  SelectClient,
  FilterLayout,
  ISelectOption,
  MultiSelectClient,
} from '@/components';
import { options } from '@/components/mock';

export const MobileAdvancedSearch = () => {
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
    <div className="bg-white-dark tablet:w-[600px] flex w-[calc(100dvw-40px)] flex-wrap gap-2 rounded-2xl px-3 py-4">
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
        label="Certifications"
        selected={selects.certifications}
        className="tablet:w-[calc(50%-4px)]"
        onChange={(option) => handleSelectChange('certifications', option as ISelectOption)}
      />
      <SelectClient
        label="ETOPS"
        options={options}
        placeholder="enter"
        selected={selects.etops}
        className="tablet:w-[calc(50%-4px)]"
        onChange={(option) => handleSelectChange('etops', option as ISelectOption)}
      />
      <SelectClient
        options={options}
        placeholder="enter"
        label="Max age, years"
        selected={selects.maxAge}
        className="tablet:w-[calc(50%-4px)]"
        onChange={(option) => handleSelectChange('maxAge', option as ISelectOption)}
      />
      <SelectClient
        options={options}
        placeholder="enter"
        label="Max noise level"
        selected={selects.maxNoiseLevel}
        className="tablet:w-[calc(50%-4px)]"
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
        checked={checkBoxes.Dangerous}
        label="Dangerous goods certification"
        onChange={(value) => handleCheckBoxChange('Dangerous', value)}
      />
      <Checkbox
        label="IOSA"
        checked={checkBoxes.IOSA}
        className="w-[calc(50%-4px)]"
        onChange={(value) => handleCheckBoxChange('IOSA', value)}
      />
      <Checkbox
        label="ACT"
        checked={checkBoxes.ACT}
        className="w-[calc(50%-4px)]"
        onChange={(value) => handleCheckBoxChange('ACT', value)}
      />
      <Checkbox
        label="Galley ovens"
        checked={checkBoxes.Galley}
        className="w-[calc(50%-4px)]"
        onChange={(value) => handleCheckBoxChange('Galley', value)}
      />
      <Checkbox
        label="WiFi"
        checked={checkBoxes.WiFi}
        className="w-[calc(50%-4px)]"
        onChange={(value) => handleCheckBoxChange('WiFi', value)}
      />
      <Checkbox
        label="IFE"
        checked={checkBoxes.IFE}
        className="w-[calc(50%-4px)]"
        onChange={(value) => handleCheckBoxChange('IFE', value)}
      />
      <Checkbox
        label="ISPS"
        checked={checkBoxes.ISPS}
        className="w-[calc(50%-4px)]"
        onChange={(value) => handleCheckBoxChange('ISPS', value)}
      />
      <Checkbox
        label="All male crew"
        checked={checkBoxes.All}
        className="tablet:w-[calc(50%-4px)]"
        onChange={(value) => handleCheckBoxChange('All', value)}
      />
      <Checkbox
        label="Winglets/Sharklets"
        checked={checkBoxes.Winglets}
        className="tablet:w-[calc(50%-4px)]"
        onChange={(value) => handleCheckBoxChange('Winglets', value)}
      />

      <Button loading className="tablet:max-w-[180px] ml-auto">
        Find
      </Button>
    </div>
  );
};
