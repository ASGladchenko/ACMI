import { Button, RFQBlock, ProviderBlock, OfferTermsBlock, SpecificationBlock } from '@/components';
import {
  mockAircraft,
  // mockRFQData,
  mockProviderData,
  mockOfferTermsData,
} from '@/components/specification/mock';

import { getInitialValues } from './config';

export default function RFQRequestsId() {
  return (
    <section className="flex flex-col gap-4 py-5 pr-10 max-[1280px]:px-10 max-[768px]:px-7 max-[768px]:py-4">
      <SpecificationBlock {...mockAircraft} />

      <ProviderBlock withProviderContacts {...mockProviderData} />

      <RFQBlock initialValues={getInitialValues()} />

      <OfferTermsBlock {...mockOfferTermsData} isEditing />

      <Button className="mx-auto mt-4 max-w-max">Send offer and share contact details</Button>
    </section>
  );
}
