import { LoaderCircle } from '@/shared/icons';
import { BadgeButton, Button } from '@/shared/ui';

export default function Ui() {
  return (
    <div>
      <Button loading={true} disabled={true} className="">
        <LoaderCircle className="text-white" />
        Button from shared UI
      </Button>

      <BadgeButton />
    </div>
  );
}
