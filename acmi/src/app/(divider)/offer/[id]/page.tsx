import { redirect } from 'next/navigation';

import { Button } from '@/components';
import { apiServer, serializeOfferId, normalizeOfferData } from '@/fetch-request';

import { validateOfferIdParams } from './helpers';
import { OfferItem, OfferTitle } from '../components';

export interface OfferPageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function OfferPage({ params, searchParams }: OfferPageProps) {
  const { id } = await params;
  const queries = await searchParams;

  const offerParams = serializeOfferId(id, queries);

  const isValidParams = validateOfferIdParams(offerParams);

  let offer;

  if (isValidParams) {
    try {
      offer = await apiServer.post(`/offer_details`, { ...offerParams }).then(({ data }) => data);
    } catch (error) {
      console.log(error);
    }
  } else {
    redirect('/search');
  }

  const normalizedOffer = normalizeOfferData(offer);

  return (
    <section className="desktop:px-10 min-h-[calc(100vh-360px)] min-[568px]:min-h-[calc(100dvh-312px)] min-[568px]:px-5 min-[568px]:py-4 min-[1024px]:min-h-[calc(100dvh-257px)]">
      {offer?.error_code && (
        <h3 className="text-blue-dark text-center text-3xl font-bold">{offer?.description}</h3>
      )}

      {offer && !offer.error_code && (
        <div className="border-gray-light mx-auto flex max-w-[1360px] flex-col gap-4 px-2.5 py-5 shadow-xl min-[428px]:px-[30px] min-[568px]:rounded-[15px] min-[568px]:border min-[1024px]:px-24">
          <div className="flex flex-col gap-4 min-[968px]:gap-2">
            <OfferTitle title="Aircraft Specification:" />

            <div className="grid grid-cols-1 gap-[10px_60px] min-[968px]:grid-cols-2 min-[1320px]:grid-cols-3 min-[1320px]:gap-[0_100px]">
              <OfferItem text="Type:" value={normalizedOffer.aircraft.type} />
              <OfferItem text="MSN:" value={normalizedOffer.aircraft.msn} />
              <OfferItem text="Reg:" value={normalizedOffer.aircraft.reg} />
              <OfferItem text="Manufactured:" value={normalizedOffer.aircraft.manufactured} />
              <OfferItem text="Age:" value={normalizedOffer.aircraft.age} />
            </div>

            <OfferItem
              text="Base airport:"
              className="justify-start"
              value={normalizedOffer.aircraft.base_airport}
            />
            <div className="grid grid-cols-1 gap-[0_60px] min-[968px]:grid-cols-2 min-[1320px]:grid-cols-3 min-[1320px]:gap-[0_100px]">
              <OfferItem text="PAX:" value={normalizedOffer.aircraft.pax} />
              <OfferItem text="Layout:" value={normalizedOffer.aircraft.layout} />
              <OfferItem text="MTOW:" value={normalizedOffer.aircraft.mtow} />
              <OfferItem text="Thrust:" value={normalizedOffer.aircraft.thrust} />
              <OfferItem text="ETOPS:" value={normalizedOffer.aircraft.etops} />
              <OfferItem text="ACT:" value={normalizedOffer.aircraft.act} />
              <OfferItem text="Noise:" value={normalizedOffer.aircraft.noise} />
              <OfferItem text="ILS:" value={normalizedOffer.aircraft.ils} />
              <OfferItem text="Galley ovens:" value={normalizedOffer.aircraft.galley_ovens} />
              <OfferItem text="IFE:" value={normalizedOffer.aircraft.ife} />
              <OfferItem text="ISPS:" value={normalizedOffer.aircraft.isps} />
              <OfferItem text="WiFi:" value={normalizedOffer.aircraft.wifi} />
              <OfferItem text="Winglets:" value={normalizedOffer.aircraft.wingtips} />
            </div>
          </div>

          <div className="flex flex-col gap-4 min-[968px]:gap-2">
            <OfferTitle title="Operator:" />

            <div className="grid grid-cols-1 gap-[10px_60px] min-[968px]:grid-cols-2 min-[1320px]:grid-cols-3 min-[1320px]:gap-[10px_100px]">
              <OfferItem text="Name:" value={normalizedOffer.operator.name} />
              <OfferItem text="AOC:" value={normalizedOffer.operator.aoc} />
              <OfferItem text="Callsign:" value={normalizedOffer.operator.callsign} />
            </div>
            <div className="flex flex-col">
              <OfferItem
                className="flex-col justify-start min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
                text="Certifications:"
                value={normalizedOffer.operator.certifications}
              />
              <OfferItem
                className="flex-col justify-start min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
                text="Additional data:"
                value={normalizedOffer.operator.additionalData}
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 min-[968px]:gap-2">
            <OfferTitle title="Commercial terms:" />

            <div className="grid grid-cols-1 gap-[10px_60px] min-[968px]:grid-cols-2 min-[1320px]:gap-[10px_120px]">
              <OfferItem text="Dates:" value={normalizedOffer.commercial.dates} />
              <OfferItem text="Period:" value={normalizedOffer.commercial.period} />
            </div>
            <div className="grid grid-cols-1 gap-[10px_60px] min-[968px]:grid-cols-2 min-[1320px]:gap-[10px_120px]">
              <OfferItem text="GBH price:" value={normalizedOffer.commercial.bhPrice} />
              <OfferItem text="Minimum GBH:" value={normalizedOffer.commercial.minGBH} />
            </div>

            <div className="grid grid-cols-1 gap-[10px_60px] min-[1320px]:grid-cols-2 min-[1320px]:gap-[10px_120px]">
              <div className="flex flex-col gap-2.5">
                <OfferItem
                  className="mb-2.5 min-[968px]:mb-3"
                  text="INDICATIVE ACMI PRICE:"
                  value={normalizedOffer.commercial.indicativePrice}
                />

                <OfferItem
                  text="Offered positioning:"
                  value={normalizedOffer.commercial.offeredPositioning}
                />

                <OfferItem text="Per diem:" value={normalizedOffer.commercial.perDiem} />
                <OfferItem
                  text="Positioning price:"
                  value={normalizedOffer.commercial.positioningPrice}
                />

                <OfferItem
                  text="TOTAL INDICATIVE PRICE:"
                  value={normalizedOffer.commercial.totalIndicativePrice}
                  className="text-md font-extrabold min-[968px]:text-[27px]"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center gap-2.5 pt-3 min-[568px]:flex-row min-[968px]:gap-30">
              <Button className="min-[568px]:max-w-max">Ask a question</Button>
              <Button className="min-[568px]:max-w-max">View the contract draft</Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
