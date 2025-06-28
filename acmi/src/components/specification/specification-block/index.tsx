'use client';

import { NormalizedDetailedOfferAircraft } from '@/types';
import { useETOPSDictionary, useNoiseStageDictionary, useILSCategoryDictionary } from '@/hooks';

import { OfferItem, OfferTitle } from '../components';

export const SpecificationBlock = ({
  pax,
  act,
  ife,
  age,
  mtow,
  isps,
  wifi,
  type,
  etops,
  noise,
  layout,
  thrust,
  region,
  engines,
  wingtips,
  approachCatId,
  galleryOvens,
}: NormalizedDetailedOfferAircraft) => {
  const { etops: etopsList } = useETOPSDictionary();
  const { noiseStage: noiseList } = useNoiseStageDictionary();
  const { ilsCategory: ilsList } = useILSCategoryDictionary();

  const booleanYesNo = (value: boolean) => (value ? 'Yes' : 'No');

  const etopsText = etopsList.find((item) => item.id === etops)?.etops_rating || 'N/A';

  const noiseText = noiseList.find((item) => item.id === noise)?.noise_stage || 'N/A';

  const ilsText = ilsList.find((item) => item.id === approachCatId)?.category || 'N/A';

  return (
    <div className="flex flex-col gap-4 min-[968px]:gap-2">
      <OfferTitle title="Aircraft Specification:" />

      <div className="grid grid-cols-1 gap-[10px_20px] min-[968px]:grid-cols-2 min-[1320px]:grid-cols-3 min-[1320px]:gap-[0_40px]">
        <OfferItem text="Type:" value={type} />
        <OfferItem text="Engines:" value={engines} />
      </div>

      <div className="grid grid-cols-1 gap-[10px_20px] min-[968px]:grid-cols-2 min-[1320px]:grid-cols-3 min-[1320px]:gap-[0_40px]">
        <OfferItem text="Age:" value={age ? `${age}  year(s)` : 'N/A'} />
      </div>

      <OfferItem text="Base:" className="justify-start" value={region} />
      <div className="grid grid-cols-1 gap-[0_20px] min-[968px]:grid-cols-2 min-[1320px]:grid-cols-3 min-[1320px]:gap-[0_40px]">
        <OfferItem text="PAX:" value={pax} />
        <OfferItem text="Layout:" value={layout} />
        <OfferItem text="MTOW:" value={mtow} />
        <OfferItem text="Thrust:" value={thrust} />
        <OfferItem text="ETOPS:" value={etopsText} />
        <OfferItem text="ACT:" value={booleanYesNo(act)} />
        <OfferItem text="Noise:" value={noiseText} />
        <OfferItem text="ILS:" value={ilsText} />
        <OfferItem text="Galley ovens:" value={booleanYesNo(galleryOvens)} />
        <OfferItem text="IFE:" value={booleanYesNo(ife)} />
        <OfferItem text="ISPS:" value={booleanYesNo(isps)} />
        <OfferItem text="WiFi:" value={booleanYesNo(wifi)} />
        <OfferItem text="Winglets:" value={booleanYesNo(wingtips)} />
      </div>
    </div>
  );
};
