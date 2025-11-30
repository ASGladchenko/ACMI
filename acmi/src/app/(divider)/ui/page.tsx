'use client';

import { useState } from 'react';

import { LoaderCircle } from '@/shared/icons';
import {
  Button,
  ButtonTop,
  InputBase,
  BadgeButton,
  Checkbox,
  Switcher,
  BodySwitcher,
} from '@/shared/ui';

export default function Ui() {
  const [value, setValue] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isWide, setIsWide] = useState(false);

  return (
    <div className="flex flex-col gap-2">
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
        className="has-[input:focus]:bg-accent-interactions-dark px-[15px] py-2 hover:bg-red-500"
        label="safsadfsadf sadfasdf "
      />
      <Checkbox
        name="radio"
        onChange={(e) => console.log(e.target.checked, '1')}
        className="px-[15px] py-2 hover:bg-red-500"
        label="safsadfsadf sadfasdf "
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
