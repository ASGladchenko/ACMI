'use client';

import { useState } from 'react';

import {
  Plane,
  Sales,
  Profile,
  Requests,
  UserRole,
  ArrowDown,
  Notification,
  LoaderCircle,
} from '@/shared/assets/svg';
import { Select } from '@/shared/ui/select';
import {
  Button,
  Checkbox,
  Switcher,
  ButtonTop,
  InputBase,
  BadgeButton,
  MultiSelect,
  HeaderLinks,
  BodySwitcher,
  HeaderButton,
  showMessage,
  Badge,
} from '@/shared/ui';
import { Modal } from '@/shared/ui/modal';
import { ToastContainer } from 'react-toastify';

type SelectItemProps = {
  id: number;
  label: string;
};

const options: SelectItemProps[] = [
  {
    id: 1,
    label: 'Option 1Option 1Option 1Option 1Option 1Option 1Option 1Option 1Option 1Option 1',
  },
  { id: 2, label: 'Option 2' },
  { id: 3, label: 'Option 3' },
  { id: 4, label: 'Option 4' },
  { id: 5, label: 'Option 5' },
  { id: 6, label: 'Option 6' },
  { id: 7, label: 'Option 7' },
  { id: 8, label: 'Option 8' },
];

const links = [
  { href: '/', label: 'My Fleet', icon: <Plane /> },
  { href: '/ui', label: 'ACMI Sales', icon: <Sales /> },
  { href: '/ui', label: 'ACMI Request', icon: <Requests /> },
];

export default function Ui() {
  const [value, setValue] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState<SelectItemProps | null>(null);
  const [selectedMulti, setSelectedMulti] = useState<SelectItemProps[] | null>(null);
  const [selectedMulti1, setSelectedMulti1] = useState<SelectItemProps[] | null>(null);
  const [isWide, setIsWide] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2 py-6">
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        asdfsadfsadf
      </Modal>
      <HeaderLinks links={links} />

      <div className="flex gap-2">
        <Button
          className=""
          onClick={() => showMessage.success('The payment was declined. Sample notification text.')}
        >
          Success
        </Button>
        <Button
          className=""
          buttonType="secondary"
          onClick={() => showMessage.error('The payment was declined. Sample notification text.')}
        >
          Error
        </Button>
        <Button
          className=""
          buttonType="normal"
          onClick={() => showMessage.info('The payment was declined. Sample notification text.')}
        >
          Info
        </Button>
        <Button
          className=""
          onClick={() => showMessage.warn('The payment was declined. Sample notification text.')}
        >
          Warning
        </Button>
      </div>

      <div className="flex gap-1">
        <Button loading={true} disabled={true} className="">
          <LoaderCircle className="h-6 w-6 shrink-0 text-white" />
          Button primary
        </Button>
        <Button className="" buttonType="secondary" onClick={() => setIsOpen(true)}>
          Button secondary
        </Button>
        <Button className="" buttonType="normal">
          Button normal
        </Button>
        <Button className="" buttonType="outline">
          <LoaderCircle className="text-accent-normal h-6 w-6 shrink-0" />
          Button outline
        </Button>
      </div>

      <BodySwitcher isWide={isWide} setIsWide={setIsWide} />

      <div className="flex gap-2 p-4">
        <Badge text="RFQ received" badgeColor="orange" />
        <Badge text="Offer sent" badgeColor="green" />
        <Badge text="Rejected" badgeColor="red" />
        <Badge text="Archive" badgeColor="gray" />
        <Badge text="In negotiations" badgeColor="blue" />
      </div>

      <div className="flex gap-2 p-4">
        <HeaderButton
          loading={true}
          isActive={isActive}
          onClick={() => setIsActive(!isActive)}
          isMessage
          leftIcon={<Notification width={20} height={20} />}
        />
        <HeaderButton
          loading={false}
          isActive={isActive}
          onClick={() => setIsActive(!isActive)}
          leftIcon={<Profile width={20} height={20} />}
        />

        <HeaderButton
          loading={true}
          isActive={isActive}
          onClick={() => setIsActive(!isActive)}
          leftIcon={<UserRole width={20} height={20} />}
          buttonType="normal"
          rightIcon={<ArrowDown width={20} height={20} />}
          text="Customer"
        />
        <HeaderButton
          loading={false}
          isActive={isActive}
          onClick={() => setIsActive(!isActive)}
          leftIcon={<UserRole width={20} height={20} />}
          buttonType="normal"
          rightIcon={<ArrowDown className="h-4 w-4" />}
          text="Provider"
        />
      </div>

      <Switcher onClick={(val) => setIsActive(val)} isActive={isActive} disabled={false} />

      <BadgeButton text="sadfas adsfasd sadf asf asdf sa" />

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
        type="radio"
        label="safsadfsadf sadfasdf"
        className="px-[15px] py-2 hover:bg-red-500"
        onChange={(e) => console.log(e.target.checked, '2')}
      />
      <MultiSelect<SelectItemProps>
        data={options}
        selected={selectedMulti}
        placeholder="Multi Select"
        onSelect={setSelectedMulti}
      />

      <MultiSelect<SelectItemProps>
        data={options}
        selected={selectedMulti1}
        placeholder="Multi Select"
        onSelect={setSelectedMulti1}
      />

      <Select<SelectItemProps> data={options} selected={selected} onSelect={setSelected} />

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
      <ToastContainer />
    </div>
  );
}
