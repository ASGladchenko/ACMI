'use client';

import { useState } from 'react';

import { SelectClient, Checkbox, FilterLayout, ISelectOption } from '@/components';

import { emptyState } from '../filter-layout/config';
import { FilterLayoutValue } from '../filter-layout';

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

const initialCheckBoxes = {
  ACT: false,
  IFE: false,
  All: false,
  IOSA: false,
  WiFi: false,
  ISPS: false,
  Galley: false,
  Winglets: false,
  Dangerous: false,
};

const initialSelects = {
  aircraftTypes: null as ISelectOption | null,
  certifications: null as ISelectOption | null,
  etops: null as ISelectOption | null,
  maxAge: null as ISelectOption | null,
  maxNoiseLevel: null as ISelectOption | null,
  minApproachCat: null as ISelectOption | null,
};

export const SideFilter = ({}) => {
  const [filter, setFilter] = useState<FilterLayoutValue>(emptyState);
  const [selects, setSelects] = useState<typeof initialSelects>(initialSelects);
  const [checkBoxes, setCheckBoxes] = useState<typeof initialCheckBoxes>(initialCheckBoxes);

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

  return (
    <>
      <div className="bg-white-dark shadow-sm-black laptop:flex hidden w-[325px] flex-col gap-1.5 px-2.5 py-4.5">
        <SelectClient
          options={options}
          placeholder="enter"
          label="Aircraft types"
          selected={selects.aircraftTypes}
          onChange={(option) => handleSelectChange('aircraftTypes', option as ISelectOption)}
        />

        <FilterLayout values={filter} onChange={setFilter} />

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
          subLabel="tick if mandatory"
          onChange={(value) => handleCheckBoxChange('IOSA', value)}
        />
        <Checkbox
          label="ACT"
          checked={checkBoxes.ACT}
          subLabel="tick if mandatory"
          onChange={(value) => handleCheckBoxChange('ACT', value)}
        />
        <Checkbox
          label="Galley ovens"
          checked={checkBoxes.Galley}
          subLabel="tick if mandatory"
          onChange={(value) => handleCheckBoxChange('Galley', value)}
        />
        <Checkbox
          label="WiFi"
          checked={checkBoxes.WiFi}
          subLabel="tick if mandatory"
          onChange={(value) => handleCheckBoxChange('WiFi', value)}
        />
        <Checkbox
          label="IFE"
          checked={checkBoxes.IFE}
          subLabel="tick if mandatory"
          onChange={(value) => handleCheckBoxChange('IFE', value)}
        />
        <Checkbox
          label="ISPS"
          checked={checkBoxes.ISPS}
          subLabel="tick if mandatory"
          onChange={(value) => handleCheckBoxChange('ISPS', value)}
        />
        <Checkbox
          label="All male crew"
          checked={checkBoxes.All}
          subLabel="tick if mandatory"
          onChange={(value) => handleCheckBoxChange('All', value)}
        />
        <Checkbox
          label="Winglets/Sharklets"
          subLabel="tick if mandatory"
          checked={checkBoxes.Winglets}
          onChange={(value) => handleCheckBoxChange('Winglets', value)}
        />
        <Checkbox
          subLabel="tick if mandatory"
          checked={checkBoxes.Dangerous}
          label="Dangerous goods certification"
          onChange={(value) => handleCheckBoxChange('Dangerous', value)}
        />
      </div>
    </>
  );
};
