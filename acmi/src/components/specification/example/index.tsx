import { NormalizedOfferData } from '@/types';
import { SpecificationBlock } from '../specification-block';
import { ProviderBlock } from '../provider-block';
import { RFQBlock } from '../rfq-block';
import { OfferTermsBlock } from '../offer-terms-block';
import { Button } from '@/components/button';
import { mockOfferTermsData, mockProviderData, mockRFQData } from '../mock';

export const Specification = ({ aircraft }: NormalizedOfferData) => {
  return (
    <section className="desktop:px-10 min-h-[calc(100vh-360px)] min-[568px]:min-h-[calc(100dvh-312px)] min-[568px]:px-5 min-[568px]:py-4 min-[1024px]:min-h-[calc(100dvh-257px)]">
      <div className="border-gray-light mx-auto flex max-w-[1360px] flex-col gap-4 px-2.5 py-5 shadow-xl min-[428px]:px-[30px] min-[568px]:rounded-[15px] min-[568px]:border min-[1024px]:px-24">
        <SpecificationBlock {...aircraft} />

        <ProviderBlock {...mockProviderData} />

        <ProviderBlock {...mockProviderData} withProviderContacts />

        <RFQBlock {...mockRFQData} />

        <RFQBlock {...mockRFQData} isEditing />

        <OfferTermsBlock {...mockOfferTermsData} />

        <OfferTermsBlock {...mockOfferTermsData} isEditing />

        <div className="flex flex-col justify-center gap-2.5 pt-3 min-[568px]:flex-row min-[968px]:gap-30">
          <Button className="min-[568px]:max-w-max">Ask a question</Button>
          <Button className="min-[568px]:max-w-max">View the contract draft</Button>
        </div>
      </div>
    </section>
  );
};
