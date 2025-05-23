import { cn } from '@/utils';

export interface OfferTitleProps {
  title: string;
  className?: string;
}

export const OfferTitle = ({ title, className }: OfferTitleProps) => {
  const cl = cn(
    'text-blue-deep font-montserrat min-[968px]:text-4xl text-2xl font-semibold underline',
    className
  );

  return <h3 className={cl}>{title}</h3>;
};
