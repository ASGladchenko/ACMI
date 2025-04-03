'use client';

import { useState } from 'react';
import { RemoveScroll } from 'react-remove-scroll';

import { Cross } from '@/assets/svg';
import {
  Input,
  Button,
  Checkbox,
  DateOpsFrom,
  BodySwitcher,
  FilterLayout,
  SelectClient,
  ISelectOption,
  SelectAirport,
} from '@/components';
import { useScrollThreshold, useWindowWidth } from '@/hooks';

import { airports, options } from './config';

import { getStyles } from './styles';
import { useFilters } from '@/context';

export const AdvancedSearch = ({}) => {
  const { width } = useWindowWidth();
  const isNeedSearch = useScrollThreshold(1300);

  const {
    filter,
    selects,
    setFilter,
    checkBoxes,
    setSelects,
    dateInterval,
    setCheckBoxes,
    setDateInterval,
  } = useFilters();

  const [isOpen, setIsOpen] = useState(false);

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

  const isAlwaysSearch = width < 1024;
  if (!isAlwaysSearch && !isNeedSearch) {
    return null;
  }

  const { container, button, wrapper, overlay, itemContainer, item } = getStyles(isOpen);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className={button}>
        Advanced search
      </button>

      <RemoveScroll enabled={isOpen}>
        <div className={wrapper}>
          <div className={overlay} onClick={() => setIsOpen(false)} />

          <div className={container}>
            <div className="mb-2 flex justify-between">
              <Button loading className="max-w-[180px]">
                Find
              </Button>

              <button className="group" onClick={() => setIsOpen(false)}>
                <Cross className="text-blue-dark hover:shadow-link h-8 w-8 cursor-pointer duration-100" />
              </button>
            </div>

            <div className={itemContainer}>
              <BodySwitcher className={item} btnClassName="max-w-full" />

              <Input
                type="number"
                value={filter.minPax}
                label="Min Pax"
                className={item}
                placeholder="enter"
                onChange={(value) => setFilter({ ...filter, minPax: value })}
              />
              <SelectAirport
                label="Ops from"
                className={item}
                options={airports}
                selected={selects.fromLocation}
                onChange={(option) => handleSelectChange('fromLocation', option as ISelectOption)}
              />

              <DateOpsFrom
                className={item}
                initialEnd={dateInterval[1]}
                initialStart={dateInterval[0]}
                onChange={(dates) => setDateInterval(dates)}
              />

              <FilterLayout />
              <SelectClient
                className={item}
                options={options}
                placeholder="enter"
                label="Aircraft types"
                selected={selects.aircraftTypes}
                onChange={(option) => handleSelectChange('aircraftTypes', option as ISelectOption)}
              />

              <SelectClient
                className={item}
                options={options}
                placeholder="enter"
                label="Cartifications"
                selected={selects.certifications}
                onChange={(option) => handleSelectChange('certifications', option as ISelectOption)}
              />

              <SelectClient
                label="ETOPS"
                className={item}
                options={options}
                placeholder="enter"
                selected={selects.etops}
                onChange={(option) => handleSelectChange('etops', option as ISelectOption)}
              />

              <SelectClient
                className={item}
                options={options}
                placeholder="enter"
                label="Max age, years"
                selected={selects.maxAge}
                onChange={(option) => handleSelectChange('maxAge', option as ISelectOption)}
              />

              <SelectClient
                className={item}
                options={options}
                placeholder="enter"
                label="Max noise level"
                selected={selects.maxNoiseLevel}
                onChange={(option) => handleSelectChange('maxNoiseLevel', option as ISelectOption)}
              />

              <SelectClient
                className={item}
                options={options}
                placeholder="enter"
                label="Min approach cat"
                selected={selects.minApproachCat}
                onChange={(option) => handleSelectChange('minApproachCat', option as ISelectOption)}
              />

              <Checkbox
                label="IOSA"
                checked={checkBoxes.IOSA}
                className={item}
                subLabel="tick if mandatory"
                onChange={(value) => handleCheckBoxChange('IOSA', value)}
              />
              <Checkbox
                label="ACT"
                className={item}
                checked={checkBoxes.ACT}
                subLabel="tick if mandatory"
                onChange={(value) => handleCheckBoxChange('ACT', value)}
              />
              <Checkbox
                className={item}
                label="Galley ovens"
                checked={checkBoxes.Galley}
                subLabel="tick if mandatory"
                onChange={(value) => handleCheckBoxChange('Galley', value)}
              />
              <Checkbox
                label="WiFi"
                className={item}
                checked={checkBoxes.WiFi}
                subLabel="tick if mandatory"
                onChange={(value) => handleCheckBoxChange('WiFi', value)}
              />
              <Checkbox
                label="IFE"
                className={item}
                checked={checkBoxes.IFE}
                subLabel="tick if mandatory"
                onChange={(value) => handleCheckBoxChange('IFE', value)}
              />
              <Checkbox
                label="ISPS"
                className={item}
                checked={checkBoxes.ISPS}
                subLabel="tick if mandatory"
                onChange={(value) => handleCheckBoxChange('ISPS', value)}
              />
              <Checkbox
                className={item}
                label="All male crew"
                checked={checkBoxes.All}
                subLabel="tick if mandatory"
                onChange={(value) => handleCheckBoxChange('All', value)}
              />
              <Checkbox
                className={item}
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
          </div>
        </div>
      </RemoveScroll>
    </>
  );
};
