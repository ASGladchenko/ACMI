import { Check } from '@/assets/svg';
import { cn } from '@/utils';

export const AvailabilityBadge = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'bg-green-main flex min-w-max shrink-0 items-center gap-1 rounded-[50px] py-1.5 pr-2 pl-1.5 select-none max-[568px]:p-1',
        className
      )}
    >
      <div className="flex items-center justify-center rounded-full bg-white p-1">
        <Check className="text-green-main h-6 w-6 max-[568px]:h-4 max-[568px]:w-4" />
      </div>

      <span className="text-center text-[14px] leading-[14px] font-bold text-white select-none max-[586px]:hidden">
        Verified <br /> availability
      </span>
    </div>
  );
};
