'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image, { StaticImageData } from 'next/image';

import { plain } from '@/assets/webp';
import { useQueryStore } from '@/store';
import { queryParams } from '@/constants';
import { getIntlNumberFormat } from '@/utils';
import { FindOffersNormalizedProps } from '@/types';

import { Button } from '../button';

import './styles.css';
import { prepareQueryParams } from './helpers';

export const SuggestionCard = ({
  id,
  msn,
  dom,
  model,
  layout,
  bhPrice,
  provider,
  imageUrl,
  registration,
  indicativePrice,
}: FindOffersNormalizedProps) => {
  const router = useRouter();

  const [from, to] = queryParams.dates.split(',');
  const dateTo = useQueryStore((s) => s.getQuery(to));
  const dateFrom = useQueryStore((s) => s.getQuery(from));
  const opsFrom = useQueryStore((s) => s.getQuery(queryParams.opsFrom));

  const [src, setSrc] = useState<string | StaticImageData>(imageUrl);

  return (
    <div className="border-gray-light desktop:flex grid-card-layout desktop:pl-1 w-full items-center gap-[30px] rounded-[15px] border py-5 pr-4 pl-4 shadow-[0_4px_4px_0_#DDE7EE]">
      <div className="card-img contain desktop:h-[210px] relative aspect-square h-[150px] w-full max-w-max overflow-hidden rounded-[12px_0_0_12px]">
        <Image
          fill
          src={src}
          alt={model}
          sizes="100%"
          className="object-contain"
          onError={() => setSrc(plain)}
        />
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
              <span className="w-full text-right text-[16px] leading-[30px]">
                {new Date(dom).toLocaleDateString('en-US')}
              </span>
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

            <Button
              onClick={() =>
                router.push(
                  `/offer/${id}${prepareQueryParams([
                    { key: 'airport_code', value: opsFrom },
                    { key: 'date_from', value: dateFrom },
                    { key: 'date_to', value: dateTo },
                  ])}`
                )
              }
              className="desktop:ml-0 ml-auto w-[150px]"
            >
              Proceed to offer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
