'use client';

import { useState } from 'react';

import { LoaderCircle } from '@/shared/icons';
import { Select } from '@/shared/ui/select';
import {
  Button,
  Checkbox,
  Switcher,
  ButtonTop,
  InputBase,
  BadgeButton,
  BodySwitcher,
} from '@/shared/ui';

type SelectItemProps = {
  id: number;
  label: string;
};

const options: SelectItemProps[] = [
  { id: 1, label: 'Option 1' },
  { id: 2, label: 'Option 2' },
  { id: 3, label: 'Option 3' },
  { id: 4, label: 'Option 4' },
  { id: 5, label: 'Option 5' },
  { id: 6, label: 'Option 6' },
  { id: 7, label: 'Option 7' },
  { id: 8, label: 'Option 8' },
];

export default function Ui() {
  const [value, setValue] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState<SelectItemProps | null>(null);
  const [isWide, setIsWide] = useState(false);

  return (
    <div className="flex flex-col gap-2 py-6">
      <Button loading={true} disabled={true} className="">
        <LoaderCircle className="h-6 w-6 shrink-0 text-white" />
        Button from shared UI
      </Button>

      <BodySwitcher isWide={isWide} setIsWide={setIsWide} />

      <Switcher onClick={(val) => setIsActive(val)} isActive={isActive} disabled={false} />

      <BadgeButton text="sadfas adsfasd sadf asf asdf sa " />

      <ButtonTop />

      <Checkbox
        disabled={false}
        onChange={(e) => console.log(e.target.checked, '0')}
        className="px-[15px] py-2 hover:bg-red-500"
        label="safsadfsadf sadfasdf"
      />
      <Checkbox
        name="radio"
        onChange={(e) => console.log(e.target.checked, '1')}
        className="px-[15px] py-2 hover:bg-red-500"
        label="safsadfsadf sadfasdf"
        type="radio"
        styleType="circle"
      />
      <Checkbox
        name="radio"
        onChange={(e) => console.log(e.target.checked, '2')}
        className="px-[15px] py-2 hover:bg-red-500"
        label="safsadfsadf sadfasdf"
        type="radio"
      />

      <Select<SelectItemProps>
        isLoading
        data={options}
        selected={selected}
        onSelect={setSelected}
      />

      <Select<SelectItemProps>
        data={options}
        itemType="plane"
        error="Error message"
        selected={selected}
        onSelect={setSelected}
      />

      <Select<SelectItemProps>
        data={null}
        itemType="checkbox"
        selected={selected}
        onSelect={setSelected}
      />

      <InputBase placeholder="Disabled" value={value} onChange={setValue} readOnly disabled />

      <InputBase placeholder="isActive" value={value} onChange={setValue} isActive />

      <InputBase value={value} onChange={setValue} placeholder="Default" />

      <InputBase value={value} onChange={setValue} placeholder="Error" error={!Boolean(value)} />

      <InputBase
        value={value}
        onChange={setValue}
        placeholder="Error message"
        onFocus={() => console.log('Hello')}
        LeftItem={<LoaderCircle className="h-5 w-5 shrink-0 text-inherit" />}
        RightItem={<LoaderCircle className="h-5 w-5 shrink-0 text-inherit" />}
        error="Error messageError messageError messageError messageError messageError messageError messageError messageError message Error messagemessageError messageError messageError messageError message Error message"
      />
    </div>
  );
}
