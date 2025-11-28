import { LoaderCircle } from '@/shared/icons';
import { BadgeButton, Button, ButtonTop } from '@/shared/ui';

export default function Ui() {
  return (
    <div>
      <Button loading={true} disabled={true} className="">
        <LoaderCircle className="shrink-0 text-white" />
        Button from shared UI
      </Button>

      <BadgeButton text="sadfas adsfasd sadf asf asdf sa " />

      <ButtonTop />
    </div>
  );
}
