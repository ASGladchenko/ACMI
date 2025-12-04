'use client';

import { useState } from 'react';

import { ArrowDown, LoaderCircle, Notification, Profile, UserRole } from '@/shared/icons';
import { Select } from '@/shared/ui/select';
import {
  Button,
  Checkbox,
  Switcher,
  ButtonTop,
  InputBase,
  BadgeButton,
  BodySwitcher,
  HeaderButton,
  NavbarLinks,
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

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/ui', label: 'ACMI sales' },
  {
    label: 'Dashboard',
    nested: [
      { href: '/ui', label: 'Company' },
      { href: '/ui', label: 'Fleet' },
      { href: '/ui', label: 'Integrations' },
      { href: '/', label: 'Settings' },
    ],
  },
];

export default function Ui() {
  const [value, setValue] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState<SelectItemProps | null>(null);
  const [isWide, setIsWide] = useState(false);

  return (
    <div className="flex flex-col gap-2 py-6">
      <NavbarLinks links={navLinks} />

      <Button loading={true} disabled={true} className="">
        <LoaderCircle className="h-6 w-6 shrink-0 text-white" />
        Button from shared UI
      </Button>

      <BodySwitcher isWide={isWide} setIsWide={setIsWide} />

      <div className="flex gap-2 bg-gray-400 p-4">
        <HeaderButton
          loading={false}
          disabled={true}
          isActive={isActive}
          onClick={() => setIsActive(!isActive)}
          isMessage
          leftIcon={<Notification width={20} height={20} />}
        />
        <HeaderButton
          loading={false}
          disabled={false}
          isActive={isActive}
          onClick={() => setIsActive(!isActive)}
          leftIcon={<Profile width={20} height={20} />}
        />

        <HeaderButton
          loading={false}
          disabled={false}
          isActive={isActive}
          onClick={() => setIsActive(!isActive)}
          leftIcon={<UserRole width={20} height={20} />}
          buttonType="normal"
          rightIcon={<ArrowDown width={20} height={20} />}
          text="Customer"
        />
        <HeaderButton
          loading={false}
          disabled={false}
          colorType="gray"
          isActive={isActive}
          onClick={() => setIsActive(!isActive)}
          leftIcon={<UserRole width={20} height={20} />}
          buttonType="normal"
          rightIcon={<ArrowDown width={20} height={20} />}
          text="Provider"
        />
      </div>

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
