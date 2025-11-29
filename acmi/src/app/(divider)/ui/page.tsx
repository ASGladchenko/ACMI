import { LoaderCircle } from '@/shared/icons';
import { BadgeButton, Button, ButtonTop, Checkbox } from '@/shared/ui';

export default function Ui() {
  return (
    <div>
      <Button loading={true} disabled={true} className="">
        <LoaderCircle className="shrink-0 text-white" />
        Button from shared UI
      </Button>

      <BadgeButton text="sadfas adsfasd sadf asf asdf sa " />

      <ButtonTop />

      <Checkbox
        disabled={false}
        className="px-[15px] py-2 hover:bg-red-500"
        label="safsadfsadf sadfasdf "
      />
      <Checkbox
        disabled={false}
        className="px-[15px] py-2 hover:bg-red-500"
        label="safsadfsadf sadfasdf "
        type="radio"
      />
    </div>
  );
}
