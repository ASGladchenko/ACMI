'use client';

import { useState } from 'react';

import {
  Input,
  Button,
  Checkbox,
  DateOpsFrom,
  BodySwitcher,
  SelectClient,
  FilterLayout,
  ISelectOption,
  SelectAirport,
  MultiSelectClient,
} from '@/components';

export default function Components() {
  const [certifications, setCertifications] = useState<string>('');
  const [selected, setSelected] = useState<ISelectOption | null>(null);
  const [multi, setMulti] = useState<ISelectOption[] | []>([]);
  const [date, setDate] = useState<[Date | null, Date | null]>([null, null]);

  const [minPax, setMinPax] = useState<string>('');

  const handleSelect = (option: ISelectOption | null) => {
    setSelected(option);
  };

  const handleMultiSelect = (options: ISelectOption[]) => {
    setMulti(options || []);
  };

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

  return (
    <div className="min-h-dvh w-full bg-slate-500 bg-[url('../assets/svg/bg.svg')] bg-auto">
      <BodySwitcher className="w-[200px]" />

      <Input
        type="number"
        placeholder="enter"
        label="Certifications"
        value={certifications}
        onChange={(value) => setCertifications(value)}
      />

      <Input
        value={minPax}
        label="Min Pax"
        placeholder="enter"
        onChange={(value) => setMinPax(value)}
      />

      <SelectClient
        isDisabled
        options={options}
        selected={selected}
        placeholder="enter"
        label="Certifications"
        onChange={handleSelect}
      />

      <SelectClient
        options={[]}
        selected={selected}
        placeholder="enter"
        label="Certifications"
        onChange={handleSelect}
      />

      <SelectClient
        isLoading
        options={options}
        selected={selected}
        placeholder="enter"
        label="Certifications"
        onChange={handleSelect}
      />

      <SelectClient
        options={options}
        selected={selected}
        placeholder="enter"
        label="Certifications"
        onChange={handleSelect}
      />

      <MultiSelectClient
        selected={multi}
        options={options}
        label="Some label"
        placeholder="enter"
        className="max-w-[300px]"
        onChange={handleMultiSelect}
      />

      <SelectAirport
        label="Ops from"
        options={airports}
        selected={selected}
        placeholder="enter"
        onChange={handleSelect}
        className="max-w-[330px]"
      />

      <Checkbox
        label="Galley ovens"
        subLabel="tick if mandatory"
        onChange={(value) => console.log(value)}
      />

      <Button loading>Proceed to offer</Button>

      <Button buttonType="outline">Proceed to offer</Button>

      <Button loading buttonType="outline">
        Proceed to offer
      </Button>

      <Button loading buttonType="ghost">
        Proceed to offer
      </Button>

      <DateOpsFrom
        className="max-w-[380px]"
        initialEnd={date[1]}
        initialStart={date[0]}
        onChange={(dates) => setDate(dates)}
      />

      <FilterLayout className="max-w-[330px]" />
    </div>
  );
}
