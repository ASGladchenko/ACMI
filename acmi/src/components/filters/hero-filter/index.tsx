'use client';

import { useState } from 'react';

import {
  BodySwitcher,
  Button,
  DateOpsFrom,
  Input,
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
    <div className="bg-white-dark shadow-sm-black flex flex-wrap items-start justify-between gap-2.5 rounded-xl px-2.5 py-4">
      <BodySwitcher className="max-w-max" />
      <SelectAirport
        label="Ops from"
        options={airports}
        selected={selected}
        onChange={handleSelect}
        className="max-w-[330px]"
      />
      <Input
        type="number"
        value={minPax}
        label="Min Pax"
        placeholder="enter"
        className="basis-[180px]"
        onChange={(value) => setMinPax(value)}
      />
      <DateOpsFrom
        initialEnd={date[1]}
        initialStart={date[0]}
        className="max-w-[380px]"
        onChange={(dates) => setDate(dates)}
      />
      <Button loading buttonType="standard" className="max-w-[180px] justify-self-end">
        Find{' '}
      </Button>
    </div>
  );
};
