'use client';

import { useState } from 'react';

import {
  Input,
  Button,
  DateOpsFrom,
  BodySwitcher,
  ISelectOption,
  SelectAirport,
} from '@/components';

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
  const [selected, setSelected] = useState<ISelectOption | null>(null);
  const [minPax, setMinPax] = useState('');

  const handleSelect = (option: ISelectOption | null) => {
    setSelected(option);
  };

  const [date, setDate] = useState<[Date | null, Date | null]>([null, null]);

  return (
    <div className="bg-white-dark shadow-sm-black tablet: flex flex-wrap items-start justify-end gap-2.5 rounded-xl px-2.5 py-4">
      <BodySwitcher
        className="tablet:-order-2 tablet:max-w-max desktop:order-1 w-full"
        btnClassName="max-w-full tablet:max-w-max"
      />
      <SelectAirport
        label="Ops from"
        options={airports}
        selected={selected}
        onChange={handleSelect}
        className="laptop:basis-[330px] tablet:-order-0 desktop:order-2 grow-1"
      />
      <Input
        type="number"
        value={minPax}
        label="Min Pax"
        placeholder="enter"
        className="laptop:max-w-[180px] tablet:max-w-[calc(100%-206px)] tablet:-order-1 desktop:order-3"
        onChange={(value) => setMinPax(value)}
      />
      <DateOpsFrom
        initialEnd={date[1]}
        initialStart={date[0]}
        className="laptop:basis-[380px] tablet:max-w-[calc(100%-190px)] desktop:order-4 grow-1"
        onChange={(dates) => setDate(dates)}
      />
      <Button loading className="tablet:max-w-[180px] desktop:order-5">
        Find
      </Button>
    </div>
  );
};
