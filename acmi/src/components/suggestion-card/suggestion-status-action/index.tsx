import { Button } from '@/components';
import { NormalizedOfferStatus } from '@/types';
import { cn } from '@/utils';

interface RFQStatusActionProps {
  onClick?: () => void;
  status: NormalizedOfferStatus | null;
}

const statusTextMap = {
  [NormalizedOfferStatus.NEW]: 'RFQ sent',
  [NormalizedOfferStatus.SUBMITTED]: 'Get Offer',
  [NormalizedOfferStatus.CONFIRMED]: 'Offer confirmed',
  [NormalizedOfferStatus.DECLINE]: 'Offer declined',
};

const colorsClass = {
  [NormalizedOfferStatus.NEW]: ' bg-blue-500',
  [NormalizedOfferStatus.SUBMITTED]: 'bg-amber-500 text-black',
  [NormalizedOfferStatus.CONFIRMED]: 'bg-green-600',
  [NormalizedOfferStatus.DECLINE]: 'bg-red-600',
};

export function RFQStatusAction({ status, onClick }: RFQStatusActionProps) {
  if (status === null) {
    return (
      <Button type="submit" onClick={onClick} className="w-[150px] font-bold max-[768px]:ml-auto">
        Proceed to RFQ
      </Button>
    );
  }

  return (
    <p
      className={cn(
        'font-inter min-w-[150px] cursor-default rounded-xl bg-blue-500 px-4 py-2 text-center text-[14px] font-bold text-white max-[768px]:ml-auto',
        colorsClass[status]
      )}
    >
      {statusTextMap[status]}
    </p>
  );
}
