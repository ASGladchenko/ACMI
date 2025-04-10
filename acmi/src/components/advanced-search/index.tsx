'use client';

import { useState } from 'react';
import { RemoveScroll } from 'react-remove-scroll';

import { Cross } from '@/assets/svg';
import { useFilters } from '@/context';
import { useScrollThreshold, useWindowWidth } from '@/hooks';
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
  MultiSelectClient,
} from '@/components';

import { airports, options } from './config';

import { getStyles } from './styles';

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
    multiSelects,
    setMultiSelects,
    setCheckBoxes,
    setDateInterval,
  } = useFilters();

  const [isOpen, setIsOpen] = useState(false);

  const handleMultiSelectChange = (name: string, value: ISelectOption[]) => {
    setMultiSelects({
      ...multiSelects,
      [name]: value,
    });
  };

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
                <Cross className="text-blue-dark group-hover:drop-shadow-link h-6 w-6 cursor-pointer duration-200" />
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

              <MultiSelectClient
                className={item}
                options={options}
                placeholder="enter"
                label="Aircraft types"
                selected={multiSelects.aircraftTypes || []}
                onChange={(option) =>
                  handleMultiSelectChange('aircraftTypes', option as ISelectOption[])
                }
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
                onChange={(value) => handleCheckBoxChange('IOSA', value)}
              />

              <Checkbox
                label="ACT"
                className={item}
                checked={checkBoxes.ACT}
                onChange={(value) => handleCheckBoxChange('ACT', value)}
              />

              <Checkbox
                className={item}
                label="Galley ovens"
                checked={checkBoxes.Galley}
                onChange={(value) => handleCheckBoxChange('Galley', value)}
              />

              <Checkbox
                label="WiFi"
                className={item}
                checked={checkBoxes.WiFi}
                onChange={(value) => handleCheckBoxChange('WiFi', value)}
              />
              <Checkbox
                label="IFE"
                className={item}
                checked={checkBoxes.IFE}
                onChange={(value) => handleCheckBoxChange('IFE', value)}
              />

              <Checkbox
                label="ISPS"
                className={item}
                checked={checkBoxes.ISPS}
                onChange={(value) => handleCheckBoxChange('ISPS', value)}
              />
              <Checkbox
                className={item}
                label="All male crew"
                checked={checkBoxes.All}
                onChange={(value) => handleCheckBoxChange('All', value)}
              />

              <Checkbox
                className={item}
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
          </div>
        </div>
      </RemoveScroll>
    </>
  );
};
