import { NormalizedOfferDataAircraft } from '@/types';

import { OfferItem, OfferTitle } from '../components';

export const SpecificationBlock = ({
  pax,
  act,
  ils,
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
  wingtips,
  galley_ovens,
  engines,
  base_airport,
}: NormalizedOfferDataAircraft) => {
  return (
    <div className="flex flex-col gap-4 min-[968px]:gap-2">
      <OfferTitle title="Aircraft Specification:" />

      <div className="grid grid-cols-1 gap-[10px_20px] min-[968px]:grid-cols-2 min-[1320px]:grid-cols-3 min-[1320px]:gap-[0_40px]">
        <OfferItem text="Type:" value={type} />
        <OfferItem text="Engines:" value={engines} />
      </div>

      <div className="grid grid-cols-1 gap-[10px_20px] min-[968px]:grid-cols-2 min-[1320px]:grid-cols-3 min-[1320px]:gap-[0_40px]">
        <OfferItem text="Age:" value={age} />
      </div>

      <OfferItem text="Base:" className="justify-start" value={base_airport} />
      <div className="grid grid-cols-1 gap-[0_20px] min-[968px]:grid-cols-2 min-[1320px]:grid-cols-3 min-[1320px]:gap-[0_40px]">
        <OfferItem text="PAX:" value={pax} />
        <OfferItem text="Layout:" value={layout} />
        <OfferItem text="MTOW:" value={mtow} />
        <OfferItem text="Thrust:" value={thrust} />
        <OfferItem text="ETOPS:" value={etops} />
        <OfferItem text="ACT:" value={act} />
        <OfferItem text="Noise:" value={noise} />
        <OfferItem text="ILS:" value={ils} />
        <OfferItem text="Galley ovens:" value={galley_ovens} />
        <OfferItem text="IFE:" value={ife} />
        <OfferItem text="ISPS:" value={isps} />
        <OfferItem text="WiFi:" value={wifi} />
        <OfferItem text="Winglets:" value={wingtips} />
      </div>
    </div>
  );
};
