import Link from 'next/link';
import { format } from 'date-fns';

interface RfqOfferRowProps {
  id: number;
  idx: number;
  msn: string;
  dateTo: string;
  company: string;
  airplane: string;
  dateFrom: string;
  basePath: string;
}

export const RfqOfferRow = ({
  id,
  idx,
  msn,
  dateTo,
  company,
  airplane,
  dateFrom,
  basePath,
}: RfqOfferRowProps) => {
  return (
    <Link
      key={id}
      href={`${basePath}${id}`}
      className="text-blue-dark border-blue-dark hover:bg-white-dark flex cursor-pointer flex-col items-center rounded-[15px] border-2 px-4 py-2 duration-200 max-[768px]:text-[14px]"
    >
      <div className="flex w-full flex-wrap gap-1">
        <p className="max-[1024px]:hidden">{idx + 1}.</p>

        <p className="overflow-hidden font-bold break-words text-ellipsis whitespace-nowrap">
          {airplane}
        </p>

        <p className="max-[1024px] ml-auto shrink-0 break-words">
          MSN: <span className="font-bold">{msn}</span>
        </p>
      </div>
      <p className="flex w-full shrink-0 flex-wrap">
        <span className="shrink-0">Company:</span>
        <span className="shrink-1 overflow-hidden font-bold text-ellipsis whitespace-nowrap">
          {company}
        </span>
      </p>

      <p className="flex w-full items-center justify-end gap-1">
        <span>{format(dateFrom, 'dd/MM/yyyy')}</span>
        <span>-</span>
        <span>{format(dateTo, 'dd/MM/yyyy')}</span>
      </p>
    </Link>
  );
};
