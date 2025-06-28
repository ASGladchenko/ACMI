import { RFQRequest } from '@/types';
import { apiServer, normalizeRFQDashboard } from '@/fetch-request';
import { RFQBlock, ProviderBlock, OfferTermsBlock, SpecificationBlock } from '@/components';

import { getOfferInitial } from './config';

interface RFQByIdPageProps {
  params: { id: string };
}

export default async function RFQRequestsId({ params }: RFQByIdPageProps) {
  const { id } = params;

  let data;
  let errors;

  try {
    const response = await apiServer
      .post<RFQRequest>('/rfq', { id: Number(id) })
      .then(({ data }) => data);

    data = normalizeRFQDashboard(response);
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
    <section className="flex flex-col gap-4 py-5 pr-10 max-[1280px]:px-10 max-[768px]:px-7 max-[768px]:py-4">
      {errors && <h2 className="text-center text-3xl text-red-400">{errors}</h2>}

      {data && !errors && (
        <>
          <SpecificationBlock {...data.aircraftDetails} />

          <ProviderBlock withProviderContacts {...data.providerDetails} />

          <RFQBlock id={Number(id)} initialValues={data.rfqData} />

          <OfferTermsBlock id={Number(id)} initialValues={getOfferInitial()} isEditing />
        </>
      )}
    </section>
  );
}
