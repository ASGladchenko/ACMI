import { cn } from '@/shared/utils';
import { Verified } from '@/shared/assets';

export const AvailabilityBadge = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'text-success-normal absolute top-0 right-0 flex items-center gap-2',
        className
      )}
    >
      <Verified className="h-5 w-5" />

      <span className="text-[15px] leading-[1.2] font-semibold">Verified availability</span>
    </div>
  );
};
