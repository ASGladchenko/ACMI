import { Button, OfferTermsBlock, ProviderBlock, RFQBlock, SpecificationBlock } from '@/components';
import {
  mockAircraft,
  mockOfferTermsData,
  mockProviderData,
  mockRFQData,
} from '@/components/specification/mock';

export default function OfferByIdPage() {
  return (
    <section className="flex flex-col gap-4 py-5 pr-10 max-[1280px]:px-10 max-[768px]:px-7 max-[768px]:py-4">
      <SpecificationBlock {...mockAircraft} />

      <ProviderBlock withProviderContacts {...mockProviderData} />

      <RFQBlock {...mockRFQData} />

      <OfferTermsBlock {...mockOfferTermsData} />

      <div className="flex items-center justify-center gap-6 max-[568px]:flex-col max-[568px]:gap-4">
        <Button className="max-w-max max-[568px]:max-w-full">Negotiate contract draft</Button>
        <Button className="max-w-max max-[568px]:max-w-full">Get in touch</Button>
      </div>
    </section>
  );
}
