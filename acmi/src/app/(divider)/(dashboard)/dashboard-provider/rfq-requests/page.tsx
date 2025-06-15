import Link from 'next/link';

import { mockRfqRequests } from './mock';
import { TitleDB } from '../../components';

export default function RFQRequests() {
  return (
    <section>
      <TitleDB title="RFQ requests" />

      <div className="flex flex-col gap-2 px-2">
        {mockRfqRequests.map((item, index) => (
          <Link
            key={item.id + index}
            href={`rfq-requests/${item.id}`}
            className="text-blue-dark border-blue-dark hover:bg-white-dark flex cursor-pointer items-center gap-2 rounded-[15px] border-2 px-4 py-2 duration-200"
          >
            <p>{index + 1}.</p>
            <p>
              Company: <span className="font-bold">{item.company}</span>
            </p>
            <p className="font-bold"> {item.airplane}</p>
            <p>
              MSN: <span className="font-bold">{item.msn}</span>
            </p>
            <p className="ml-auto">{item.date}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
