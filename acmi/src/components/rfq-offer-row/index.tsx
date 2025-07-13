import Link from 'next/link';
import { format } from 'date-fns';

interface RfqOfferRowProps {
  id: number;
  idx: number;
  msn: string;
  age: string;
  dateTo: string;
  company: string;
  layout: string;
  airplane: string;
  dateFrom: string;
  basePath: string;
  isProviderHidden?: boolean;
}

export const RfqOfferRow = ({
  id,
  idx,
  msn,
  age,
  dateTo,
  layout,
  company,
  airplane,
  dateFrom,
  basePath,
  isProviderHidden = false,
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
          {!isProviderHidden && (
            <span>
              MSN: <span className="font-bold">{msn}</span>
            </span>
          )}

          {isProviderHidden && (
            <span>
              Age: <span className="font-bold">{age} year(s)</span>
            </span>
          )}
        </p>
      </div>
      <p className="flex w-full shrink-0 flex-wrap">
        {!isProviderHidden && (
          <>
            <span className="shrink-0">Company:</span>
            <span className="ml-2 shrink-1 overflow-hidden font-bold text-ellipsis whitespace-nowrap">
              {company}
            </span>
          </>
        )}

        {isProviderHidden && (
          <>
            <span className="shrink-0">Layout:</span>
            <span className="ml-2 shrink-1 overflow-hidden font-bold text-ellipsis whitespace-nowrap">
              {layout}
            </span>
          </>
        )}
      </p>

      <p className="flex w-full items-center justify-end gap-1">
        <span>{format(dateFrom, 'dd/MM/yyyy')}</span>
        <span>-</span>
        <span>{format(dateTo, 'dd/MM/yyyy')}</span>
      </p>
    </Link>
  );
};
