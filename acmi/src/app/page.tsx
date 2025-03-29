'use client';

import { useState } from 'react';

import { ISelectOption } from '@/components/selects';
import { BodySwitcher, Input, SelectClient } from '@/components';
import { Checkbox } from '@/components/checkbox';

export default function Home() {
  const [certifications, setCertifications] = useState<string | ''>('');
  const [selected, setSelected] = useState<ISelectOption | null>(null);
  const [minPax, setMinPax] = useState<string | ''>('');

  const handleSelect = (option: ISelectOption) => {
    setSelected(option);
  };

  const options = [
    { text: 'test', value: 'test' },
    { text: 'test1', value: 'test1' },
    { text: 'test2', value: 'test2' },
  ];

  return (
    <div className='h-dvh w-dvw bg-slate-500 bg-[url("../assets/svg/bg.svg")] bg-auto'>
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

      <Checkbox
        label="Galley ovens"
        subLabel="tick if mandatory"
        onChange={(value) => console.log(value)}
      />
    </div>
  );
}
