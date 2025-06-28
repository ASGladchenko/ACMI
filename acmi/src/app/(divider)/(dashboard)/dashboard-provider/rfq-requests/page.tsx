import { RfqOfferRow } from '@/components';
import { apiServer } from '@/fetch-request';

import { RFQProviderRaw } from './types';
import { TitleDB } from '../../components';
import { normalizeRFQProviderList } from './normalize';

export default async function RFQRequests() {
  let data;
  let errors;

  try {
    const response = await apiServer<RFQProviderRaw[]>('/rfq/list').then(({ data }) => data);

    data = normalizeRFQProviderList(response);
  } catch (error) {
    if (error instanceof Error) {
      errors = error.message;
    } else if (typeof error === 'string') {
      errors = error;
    } else {
      errors = 'Unknown error';
    }
  }
  return (
    <section>
      <TitleDB title="RFQ requests" />

      {errors && <h2 className="text-center text-3xl text-red-400">{errors}</h2>}

      {!errors && data && data.length && (
        <div className="flex flex-col gap-2 px-2 pb-4">
          {data.map((item, idx) => (
            <RfqOfferRow
              {...item}
              idx={idx}
              key={item.id}
              basePath="/dashboard-provider/rfq-requests/"
            />
          ))}
        </div>
      )}
    </section>
  );
}
