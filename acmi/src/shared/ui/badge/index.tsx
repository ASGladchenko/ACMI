import { cn } from '@/shared/utils';

interface BadgeProps {
  text?: string;
  badgeColor?: 'orange' | 'green' | 'red' | 'gray' | 'blue';
}

export const Badge = ({ text, badgeColor }: BadgeProps) => {
  return (
    <span
      className={cn(
        'rounded-lg2 px-4 py-2',
        {
          orange: 'bg-attention-light text-attention-normal',
          green: 'bg-success-light text-success-normal',
          red: 'bg-error-light text-error-normal',
          gray: 'bg-[#ECEFF4]',
          blue: 'bg-accent-light text-accent-normal',
        }[badgeColor || 'gray']
      )}
    >
      {text}
    </span>
  );
};
