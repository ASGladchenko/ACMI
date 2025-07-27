import { RfqOfferRow } from '@/components';
import { apiServer } from '@/fetch-request';

import { RFQProviderRaw } from '../types';
import { TitleDB } from '../../components';
import { normalizeRFQProviderList } from '../normalize';
import { NormalizedOfferStatus } from '@/types';

export default async function RFQRequests() {
  let data;
  let errors;

  try {
    const response = await apiServer<RFQProviderRaw[]>('/rfq/list', {
      params: { status: NormalizedOfferStatus.NEW },
    });

    data = normalizeRFQProviderList(response.data);
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

      {!errors && data && data.length === 0 && (
        <h2 className="text-blue-dark font-inter text-center text-3xl">There are no new RFQs</h2>
      )}

      {!errors && data && data.length > 0 && (
        <div className="flex flex-col gap-2 px-2 pb-4">
          {data.map((item, idx) => (
            <RfqOfferRow {...item} idx={idx} key={item.id} basePath="rfq-requests/" />
          ))}
        </div>
      )}
    </section>
  );
}
