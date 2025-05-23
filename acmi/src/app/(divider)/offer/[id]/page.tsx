import { Button } from '@/components';
import { OfferItem, OfferTitle } from '../components';

export default async function OfferPage() {
  return (
    <section className="min-h-[calc(100vh-360px)] min-[568px]:min-h-[calc(100dvh-312px)] min-[568px]:px-5 min-[568px]:py-8 min-[1024px]:min-h-[calc(100dvh-257px)] min-[1440px]:px-0">
      <div className="border-gray-light mx-auto flex max-w-[1360px] flex-col gap-9 px-2.5 py-5 shadow-xl min-[428px]:px-[30px] min-[568px]:rounded-[15px] min-[568px]:border">
        <div className="flex flex-col gap-4 min-[968px]:gap-9">
          <OfferTitle title="Aircraft Specification:" />

          <div className="grid grid-cols-1 gap-[10px_60px] min-[968px]:grid-cols-2 min-[1320px]:grid-cols-3 min-[1320px]:gap-[10px_120px]">
            <OfferItem text="Type:" value="Boeing 737-800" />
            <OfferItem text="MSN:" value="123456" />
            <OfferItem text="Reg:" value="OH-WOW" />
            <OfferItem text="Manufactured:" value="12/11/2002" />
            <OfferItem text="Age:" value="10 years" />
          </div>

          <div className="grid grid-cols-1 gap-[10px_60px] min-[968px]:grid-cols-2 min-[1320px]:grid-cols-3 min-[1320px]:gap-[10px_120px]">
            <OfferItem text="PAX:" value="186" />
            <OfferItem text="Layout:" value="174 Y + 8 J + 3" />
            <OfferItem text="Base airport:" value="Sofia (SOF)" />
            <OfferItem text="MTOW:" value="70,530 kg" />
            <OfferItem text="Thrust:" value="110 kN" />
            <OfferItem text="ETOPS:" value="yes" />
            <OfferItem text="ACT:" value="yes" />
            <OfferItem text="Noise:" value="Stage 4" />
            <OfferItem text="ILS:" value="Cat III" />
            <OfferItem text="Galley ovens:" value="yes" />
            <OfferItem text="IFE:" value="yes" />
            <OfferItem text="ISPS:" value="yes" />
            <OfferItem text="WiFi:" value="yes" />
            <OfferItem text="Winglets:" value="yes" />
          </div>
        </div>

        <div className="flex flex-col gap-4 min-[968px]:gap-9">
          <OfferTitle title="Operator:" />

          <div className="grid grid-cols-1 gap-[10px_60px] min-[968px]:grid-cols-2 min-[1320px]:grid-cols-3 min-[1320px]:gap-[10px_120px]">
            <OfferItem text="Name:" value="Fly2Sky" />
            <OfferItem text="AOC:" value="Bulgaria" />
            <OfferItem text="Callsign:" value="F6" />
          </div>
          <div className="flex flex-col">
            <OfferItem
              className="flex-col justify-start min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
              text="Certifications:"
              value="EASA, IOSA, US FAA TCO"
            />
            <OfferItem
              className="flex-col justify-start min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
              text="Additional data:"
              value="all male crew upon request, dangerous goods certification "
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 min-[968px]:gap-9">
          <OfferTitle title="Commercial terms:" />

          <div className="grid grid-cols-1 gap-[10px_60px] min-[968px]:grid-cols-2 min-[1320px]:gap-[10px_120px]">
            <OfferItem text="Dates:" value="12 Apr 2025 - 15 Apr 2025" />
            <OfferItem text="AOPeriod:" value="4 days" />
          </div>
          <div className="grid grid-cols-1 gap-[10px_60px] min-[968px]:grid-cols-2 min-[1320px]:gap-[10px_120px]">
            <OfferItem text="GBH price:" value="$5,000" />
            <OfferItem text="Minimum GBH:" value="30" />
          </div>

          <div className="grid grid-cols-1 gap-[10px_60px] min-[1320px]:grid-cols-2 min-[1320px]:gap-[10px_120px]">
            <div className="flex flex-col gap-2.5">
              <OfferItem
                className="mb-2.5 min-[968px]:mb-[26px]"
                text="INDICATIVE ACMI PRICE:"
                value="$150,000"
              />

              <OfferItem text="Offered positioning:" value="provider call sign" />
              <OfferItem text="Positioning price:" value="$15,000" />
              <OfferItem text="Per diem:" value="included" />
              <OfferItem
                className="mb-2.5 min-[968px]:mb-[26px]"
                text="Positioning price:"
                value=""
              />

              <OfferItem
                value="$165,000"
                text="TOTAL INDICATIVE PRICE:"
                className="text-md font-extrabold min-[968px]:text-[27px]"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center gap-2.5 min-[568px]:flex-row min-[968px]:gap-30">
            <Button className="min-[568px]:max-w-max">Ask a question</Button>
            <Button className="min-[568px]:max-w-max">View the contract draft</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
