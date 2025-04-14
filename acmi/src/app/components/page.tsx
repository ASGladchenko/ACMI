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

import { airports, options } from '@/components/mock';

export default function Components() {
  const [isWide, setIsWide] = useState(false);
  const [multi, setMulti] = useState<ISelectOption[] | []>([]);
  const [certifications, setCertifications] = useState<string>('');
  const [selected, setSelected] = useState<ISelectOption | null>(null);
  const [date, setDate] = useState<[Date | null, Date | null]>([null, null]);

  const [minPax, setMinPax] = useState<string>('');

  const handleSelect = (option: ISelectOption | null) => {
    setSelected(option);
  };

  const handleMultiSelect = (options: ISelectOption[]) => {
    setMulti(options || []);
  };

  return (
    <div className="min-h-dvh w-full bg-slate-500 bg-[url('../assets/svg/bg.svg')] bg-auto">
      <BodySwitcher isWide={isWide} setIsWide={setIsWide} className="w-[200px]" />

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
