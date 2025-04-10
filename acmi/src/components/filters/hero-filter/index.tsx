'use client';

import {
  Input,
  Button,
  DateOpsFrom,
  BodySwitcher,
  SelectClient,
  ISelectOption,
} from '@/components';

import { useFilters } from '@/context';

const airports = [
  { text: 'LCA Larnaca, Cyprus', value: 'LCA' },
  { text: 'LAR Laramie, USA', value: 'LAR' },
  { text: 'LAS Las-Vegas, USA', value: 'LAS' },
  { text: 'LAX Los Angeles, USA', value: 'LAX' },
  { text: 'LCY London City, UK', value: 'LCY' },
  { text: 'LED Saint Petersburg, Russia', value: 'LED' },
  { text: 'LIS Lisbon, Portugal', value: 'LIS' },
  { text: 'LIM Lima, Peru', value: 'LIM' },
  { text: 'LHE Lahore, Pakistan', value: 'LHE' },
  { text: 'LYS Lyon, France', value: 'LYS' },
];

export const HeroFilter = ({}) => {
  const { filter, selects, setFilter, setSelects, dateInterval, setDateInterval } = useFilters();

  const handleSelectChange = (name: string, value: ISelectOption) => {
    setSelects({
      ...selects,
      [name]: value,
    });
  };

  return (
    <div className="bg-white-dark shadow-sm-black tablet: flex flex-wrap items-start justify-end gap-2.5 rounded-xl px-2.5 py-4">
      <BodySwitcher
        btnClassName="max-w-full tablet:max-w-max"
        className="tablet:-order-2 tablet:max-w-max desktop:order-1 w-full"
      />

      <SelectClient
        label="Ops from"
        options={airports}
        selected={selects.fromLocation}
        onChange={(option) => handleSelectChange('fromLocation', option as ISelectOption)}
        className="laptop:basis-[330px] tablet:-order-0 desktop:order-2 grow-1"
      />
      <Input
        type="number"
        label="Min Pax"
        placeholder="enter"
        value={filter.minPax}
        onChange={(value) => setFilter({ ...filter, minPax: value })}
        className="laptop:max-w-[180px] tablet:max-w-[calc(100%-206px)] tablet:-order-1 desktop:order-3"
      />
      <DateOpsFrom
        initialEnd={dateInterval[1]}
        initialStart={dateInterval[0]}
        onChange={(dates) => setDateInterval(dates)}
        className="laptop:basis-[380px] tablet:max-w-[calc(100%-190px)] desktop:order-4 grow-1"
      />
      <Button loading className="tablet:max-w-[180px] desktop:order-5">
        Find
      </Button>
    </div>
  );
};
