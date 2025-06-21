import { cn } from '@/utils';

export interface OfferItemProps {
  text: string;
  value: string;
  className?: string;
}
const clText = 'font-montserrat text-md min-[968px]:text-[18px] font-bold';

export const OfferItem = ({ text, value, className }: OfferItemProps) => {
  const clWrapper = cn('flex justify-between gap-2 flex-wrap items-center', className);

  return (
    <div className={clWrapper}>
      <span className={`${clText} text-blue-deep`}>{text}</span>
      <span className={`${clText} text-gray-dark`}>{value}</span>
    </div>
  );
};
