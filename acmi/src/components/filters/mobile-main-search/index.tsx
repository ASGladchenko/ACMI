'use client';

import { useFilters } from '@/context';
import {
  Input,
  Button,
  DateOpsFrom,
  SelectClient,
  BodySwitcher,
  ISelectOption,
} from '@/components/';
import { airports } from '@/components/mock';

export const MobileMainSearch = () => {
  const {
    filter,
    selects,
    setFilter,
    setSelects,
    checkBoxes,
    dateInterval,
    setCheckBoxes,
    setDateInterval,
  } = useFilters();

  const handleSelectChange = (name: string, value: ISelectOption) => {
    setSelects({
      ...selects,
      [name]: value,
    });
  };

  const handleCheckBoxChange = (name: string, value: boolean) => {
    setCheckBoxes({
      ...checkBoxes,
      [name]: value,
    });
  };

  return (
    <div className="bg-white-dark tablet:w-[600px] flex w-[calc(100dvw-40px)] flex-col gap-3 rounded-2xl px-3 py-4">
      <BodySwitcher
        isWide={checkBoxes.isWideBody}
        setIsWide={(value) => handleCheckBoxChange('isWideBody', value)}
        btnClassName="max-w-full"
        className="w-full"
      />

      <SelectClient
        label="Ops from"
        options={airports}
        selected={selects.fromLocation}
        onChange={(option) => handleSelectChange('fromLocation', option as ISelectOption)}
      />

      <Input
        type="number"
        label="Min Pax"
        placeholder="enter"
        value={filter.minPax}
        onChange={(value) => setFilter({ ...filter, minPax: value })}
      />

      <DateOpsFrom
        portalId="calendar-mobile-main"
        initialEnd={dateInterval[1]}
        initialStart={dateInterval[0]}
        onChange={(dates) => setDateInterval(dates)}
      />

      <Button>Find</Button>
    </div>
  );
};
