import { cn } from '@/utils';

export interface OfferItemProps {
  className?: string;
  text: string | number;
  value: string | number;
}
const clText = 'font-montserrat text-md min-[968px]:text-[18px] font-bold';

export const OfferItem = ({ text, value, className }: OfferItemProps) => {
  const clWrapper = cn('flex justify-between gap-2 flex-wrap', className);

  return (
    <div className={clWrapper}>
      <span className={`${clText} text-blue-deep`}>{text}</span>
      <span className={`${clText} text-gray-dark`}>{value}</span>
    </div>
  );
};
