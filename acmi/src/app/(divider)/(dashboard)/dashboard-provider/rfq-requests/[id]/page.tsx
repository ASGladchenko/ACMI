import { mockAircraft, mockProviderData } from '@/components/specification/mock';
import { RFQBlock, ProviderBlock, OfferTermsBlock, SpecificationBlock } from '@/components';

import { getOfferInitial, getInitialValues } from './config';

export default function RFQRequestsId() {
  return (
    <section className="flex flex-col gap-4 py-5 pr-10 max-[1280px]:px-10 max-[768px]:px-7 max-[768px]:py-4">
      <SpecificationBlock {...mockAircraft} />

      <ProviderBlock withProviderContacts {...mockProviderData} />

      <RFQBlock initialValues={getInitialValues()} />

      <OfferTermsBlock initialValues={getOfferInitial()} isEditing />
    </section>
  );
}
