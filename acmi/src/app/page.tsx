'use client';

import { useState } from 'react';

import { BodySwitcher, Input, SelectClient, MultiSelectClient, Checkbox, ISelectOption } from '@/components';

export default function Home() {
  const [certifications, setCertifications] = useState<string | ''>('');
  const [selected, setSelected] = useState<ISelectOption | null>(null);
  const [multi, setMulti] = useState<ISelectOption[] | []>([]);

  const [minPax, setMinPax] = useState<string | ''>('');

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

      <MultiSelectClient
        selected={multi}
        options={options}
        label="Some label"
        placeholder="enter"
        className="max-w-[300px]"
        onChange={handleMultiSelect}
      />
      <Checkbox
        label="Galley ovens"
        subLabel="tick if mandatory"
        onChange={(value) => console.log(value)}
      />
    </div>
  );
}
