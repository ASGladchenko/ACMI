import { RfqOfferRow } from '@/components';
import { apiServer } from '@/fetch-request';

import { TitleDB } from '../../components';
import { RFQCustomerRaw } from '../types';
import { normalizeRFQCustomerList } from '../normalize';
import { NormalizedOfferStatus } from '@/types';

export default async function RFQs() {
  let data;
  let errors;

  try {
    const response = await apiServer
      .get<RFQCustomerRaw[]>('/rfq/list', {
        params: { status: NormalizedOfferStatus.NEW },
      })
      .then(({ data }) => data);

    data = normalizeRFQCustomerList(response);
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
      <TitleDB title="Sent Rfqs" />

      {errors && <h2 className="text-center text-3xl text-red-400">{errors}</h2>}
      {!errors && data && data.length === 0 && (
        <h2 className="text-blue-dark text-center text-3xl">There are no new offers</h2>
      )}

      {!errors && data && data.length > 0 && (
        <div className="flex flex-col gap-2 px-2 pb-4">
          {data.map((item, idx) => (
            <RfqOfferRow key={item.id} basePath="rfqs/" idx={idx} {...item} />
          ))}
        </div>
      )}
    </section>
  );
}
