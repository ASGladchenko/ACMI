import Image from 'next/image';
import { Button } from '../button';

export interface AircraftProps {
  id: number;
  msn: string;
  dom: string;
  model: string;
  layout: string;
  bhPrice: string;
  provider: string;
  imageUrl: string;
  registration: string;
  indicativePrice: string;
}
export const SuggestionCard = ({
  msn,
  dom,
  model,
  layout,
  bhPrice,
  provider,
  imageUrl,
  registration,
  indicativePrice,
}: AircraftProps) => {
  return (
    <div className="border-gray-light flex items-center gap-[30px] rounded-[15px] border py-5 pr-[17px] pl-1 shadow-[0_4px_4px_0_#DDE7EE]">
      <div className="relative aspect-[340/210] h-auto w-full max-w-[340px] overflow-hidden rounded-[12px_0_0_12px] blur-[2px]">
        <Image src={imageUrl} alt={model} fill />
      </div>

      <div className="text-gray-medium font-roboto flex w-full flex-col">
        <span className="text-blue-deep font-montserrat text-[25px] leading-[30px] font-bold">
          {model}
        </span>

        <div className="align-center mb-5 flex gap-1">
          <span className="text-[16px] leading-[30px]">provided by</span>
          <span className="text-blue-deep font-montserrat text-[25px] leading-[30px] font-bold">
            {provider}
          </span>
        </div>

        <div className="flex">
          <div className="flex w-1/2 flex-col">
            <div className="flex">
              <span className="text-[18px] leading-[30px] font-bold text-nowrap">MSN:</span>
              <span className="mr-[100px] w-full text-right text-[16px] leading-[30px]">{msn}</span>
            </div>
            <div className="flex">
              <span className="text-[18px] leading-[30px] font-bold text-nowrap">Reg# :</span>
              <span className="mr-[100px] w-full text-right text-[16px] leading-[30px]">
                {registration}
              </span>
            </div>
            <div className="flex">
              <span className="text-[18px] leading-[30px] font-bold text-nowrap">DOM</span>
              <span className="mr-[100px] w-full text-right text-[16px] leading-[30px]">{dom}</span>
            </div>
            <div className="flex">
              <span className="text-[18px] leading-[30px] font-bold text-nowrap">Layout:</span>
              <span className="mr-[100px] w-full text-right text-[16px] leading-[30px]">
                {layout}
              </span>
            </div>
            <div className="flex">
              <span className="text-[18px] leading-[30px] font-bold text-nowrap">BH Price:</span>
              <span className="mr-[100px] w-full text-right text-[16px] leading-[30px]">
                {bhPrice}
              </span>
            </div>
          </div>

          <div className="flex w-1/2 flex-col items-center">
            <span className="text-blue-deep font-montserrat text-[25px] leading-[30px] font-bold">
              Indicative Price:
            </span>
            <span className="text-blue-deep font-montserrat mb-2.5 text-[25px] leading-[30px] font-bold">
              {indicativePrice}
            </span>

            <Button className="w-[150px]">Proceed to offer</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
