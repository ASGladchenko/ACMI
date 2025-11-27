import { LoaderCircle } from '@/shared/icons';
import { Button } from '@/shared/ui';

export default function Ui() {
  return (
    <div>
      <Button loading={true} disabled={false}>
        <LoaderCircle className="text-accent-normal" />
        Button from shared UI
      </Button>
    </div>
  );
}
