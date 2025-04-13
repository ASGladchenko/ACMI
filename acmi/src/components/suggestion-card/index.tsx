import Image from 'next/image';
import { Button } from '../button';
import { getIntlNumberFormat } from '@/utils';

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

import './styles.css';

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
    <div className="border-gray-light desktop:flex grid-card-layout desktop:pl-1 w-full items-center gap-[30px] rounded-[15px] border py-5 pr-4 pl-4 shadow-[0_4px_4px_0_#DDE7EE]">
      <div className="card-img cover desktop:max-w-[340px] desktop:h-auto relative aspect-[340/210] max-h-40 w-full overflow-hidden rounded-[12px_0_0_12px] blur-[2px]">
        <Image src={imageUrl} alt={model} fill />
      </div>

      <div className="text-gray-medium font-roboto desktop:flex contents w-full flex-col">
        <span className="card-model text-blue-deep font-montserrat desktop:text-[25px] desktop:leading-[30px] text-xl font-bold">
          {model}
        </span>

        <div className="card-provider desktop:flex-nowrap desktop:mb-5 flex flex-wrap items-center gap-1">
          <span className="text-md desktop:text-[16px] desktop:leading-[30px]">provided by</span>
          <span className="text-blue-deep font-montserrat desktop:text-[25px] desktop:leading-[30px] text-xl font-bold">
            {provider}
          </span>
        </div>

        <div className="desktop:flex contents">
          <div className="card-info desktop:w-1/2 desktop:mr-[100px] flex w-full flex-col">
            <div className="flex">
              <span className="text-[18px] leading-[30px] font-bold text-nowrap">MSN:</span>
              <span className="w-full text-right text-[16px] leading-[30px]">{msn}</span>
            </div>
            <div className="flex">
              <span className="text-[18px] leading-[30px] font-bold text-nowrap">Reg# :</span>
              <span className="w-full text-right text-[16px] leading-[30px]">{registration}</span>
            </div>
            <div className="flex">
              <span className="text-[18px] leading-[30px] font-bold text-nowrap">DOM</span>
              <span className="w-full text-right text-[16px] leading-[30px]">{dom}</span>
            </div>
            <div className="flex">
              <span className="text-[18px] leading-[30px] font-bold text-nowrap">Layout:</span>
              <span className="w-full text-right text-[16px] leading-[30px]">{layout}</span>
            </div>
            <div className="flex">
              <span className="text-[18px] leading-[30px] font-bold text-nowrap">BH Price:</span>
              <span className="w-full text-right text-[18px] leading-[30px] font-bold text-nowrap">
                $ {getIntlNumberFormat({ value: Number(bhPrice) })}
              </span>
            </div>
          </div>

          <div className="card-price desktop:pt-0 desktop:w-1/2 desktop:gap-0 desktop:flex-col desktop:items-center flex w-full flex-wrap items-baseline gap-2 pt-[20px]">
            <span className="text-blue-deep font-montserrat desktop:text-[25px] desktop:leading-[30px] text-xl font-bold">
              Indicative Price:
            </span>
            <span className="text-blue-deep font-montserrat desktop:mb-2.5 desktop:text-[25px] desktop:leading-[30px] ml-auto text-xl font-bold text-nowrap min-[520px]:ml-0">
              $
              {getIntlNumberFormat({
                value: Number(indicativePrice),
              })}
            </span>

            <Button className="desktop:ml-0 ml-auto w-[150px]">Proceed to offer</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
