import { NormalizedOfferDataOperator } from '@/types';
import { OfferItem, OfferTitle } from '../components';

export const OperatorBlock = ({
  aoc,
  name,
  callsign,
  certifications,
  additionalData,
}: NormalizedOfferDataOperator) => {
  return (
    <div className="flex flex-col gap-4 min-[968px]:gap-2">
      <OfferTitle title="Operator:" />

      <div className="grid grid-cols-1 gap-[10px_60px] min-[968px]:grid-cols-2 min-[1320px]:grid-cols-3 min-[1320px]:gap-[10px_100px]">
        <OfferItem text="Name:" value={name} />
        <OfferItem text="AOC:" value={aoc} />
        <OfferItem text="Callsign:" value={callsign} />
      </div>
      <div className="flex flex-col">
        <OfferItem
          className="flex-col justify-start min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
          text="Certifications:"
          value={certifications}
        />
        <OfferItem
          className="flex-col justify-start min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
          text="Additional data:"
          value={additionalData}
        />
      </div>
    </div>
  );
};
