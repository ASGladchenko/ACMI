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
  FilterLayoutValue,
} from '@/components';

import { emptyState } from '../filters/filter-layout/config';
import { airports, initialCheckBoxes, initialSelects, options } from './config';

import { getStyles } from './styles';

export interface IAdvancedSearchProps {
  mainSearch?: boolean;
}

export const AdvancedSearch = ({ mainSearch = false }: IAdvancedSearchProps) => {
  const [minPax, setMinPax] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<ISelectOption | null>(null);

  const handleSelect = (option: ISelectOption | null) => {
    setSelected(option);
  };

  const [date, setDate] = useState<[Date | null, Date | null]>([null, null]);

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
              {mainSearch && (
                <>
                  <BodySwitcher className={item} btnClassName="max-w-full" />

                  <Input
                    type="number"
                    value={minPax}
                    label="Min Pax"
                    className={item}
                    placeholder="enter"
                    onChange={(value) => setMinPax(value)}
                  />
                  <SelectAirport
                    label="Ops from"
                    options={airports}
                    selected={selected}
                    className={item}
                    onChange={handleSelect}
                  />

                  <DateOpsFrom
                    className={item}
                    initialEnd={date[1]}
                    initialStart={date[0]}
                    onChange={(dates) => setDate(dates)}
                  />
                </>
              )}

              <FilterLayout values={filter} onChange={setFilter} />
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
