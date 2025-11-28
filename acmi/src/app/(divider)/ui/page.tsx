'use client';

import { useState } from 'react';

import { LoaderCircle } from '@/shared/icons';
import { Button, ButtonTop, InputBase, BadgeButton } from '@/shared/ui';

export default function Ui() {
  const [value, setValue] = useState('');
  return (
    <div className="flex flex-col gap-2">
      <Button loading={true} disabled={true} className="">
        <LoaderCircle className="shrink-0 text-white" />
        Button from shared UI
      </Button>

      <BadgeButton text="sadfas adsfasd sadf asf asdf sa " />

      <ButtonTop />

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
