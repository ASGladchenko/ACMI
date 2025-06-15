import Link from 'next/link';

import { mockOffers } from './mock';
import { TitleDB } from '../../components';

export default function OffersPage() {
  return (
    <section>
      <TitleDB title="Offers" />

      <div className="flex flex-col gap-2 px-2">
        {mockOffers.map((item, index) => (
          <Link
            key={item.id + index}
            href={`offers/${item.id}`}
            className="text-blue-dark border-blue-dark hover:bg-white-dark flex cursor-pointer items-center gap-2 rounded-[15px] border-2 px-4 py-2 duration-200 max-[1024px]:flex-wrap"
          >
            <p className="max-[1024px]:hidden">{index + 1}.</p>
            <p className="flex w-[350px] shrink-0 gap-2 max-[1024px]:w-full">
              <span className="shrink-0">Company:</span>
              <span className="shrink-1 overflow-hidden font-bold text-ellipsis whitespace-nowrap">
                {item.company}
              </span>
            </p>
            <p className="w-[200px] overflow-hidden font-bold break-words text-ellipsis whitespace-nowrap max-[1024px]:w-full">
              {item.airplane}
            </p>
            <p className="max-[1024px] shrink-0 break-words">
              MSN: <span className="font-bold">{item.msn}</span>
            </p>
            <p className="ml-auto shrink-0">{item.date}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
