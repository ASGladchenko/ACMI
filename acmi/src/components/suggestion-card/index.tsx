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
import { prepareQueryParams } from './helpers';

import './styles.css';

export const SuggestionCard = ({
  id,
  // msn,
  dom,
  model,
  layout,
  bhPrice,
  provider,
  imageUrl,
  // registration,
  indicativePrice,
}: FindOffersNormalizedProps) => {
  const router = useRouter();

  const [from, to] = queryParams.dates.split(',');
  const dateTo = useQueryStore((s) => s.getQuery(to));
  const dateFrom = useQueryStore((s) => s.getQuery(from));
  const opsFrom = useQueryStore((s) => s.getQuery(queryParams.opsFrom));

  const [src, setSrc] = useState<string | StaticImageData>(imageUrl);

  const classLabel =
    'text-[18px] leading-[30px] font-bold text-nowrap max-[768px]:text-[16px] max-[768px]:leading-[20px]';
  const classValue =
    'w-full text-right text-[16px] leading-[30px] max-[768px]:text-[14px] max-[768px]:leading-[20px]';

  return (
    <div className="border-gray-light flex w-full items-center rounded-[15px] border shadow-[0_4px_4px_0_#DDE7EE]">
      <div className="card-img contain relative aspect-square h-[210px] w-full max-w-max overflow-hidden rounded-[12px_0_0_12px] max-[1024px]:h-40 max-[768px]:hidden">
        <Image
          fill
          src={src}
          alt={model}
          sizes="100%"
          className="object-contain"
          onError={() => setSrc(plain)}
        />
      </div>

      <div className="text-gray-medium flex w-full flex-col flex-wrap p-5 max-[768px]:p-3">
        <div className="mb-2 flex w-full flex-col">
          <span className="card-model text-blue-deep font-montserrat desktop:text-[25px] desktop:leading-[30px] text-xl font-bold max-[768px]:text-[18px] max-[768px]:leading-[24px]">
            {model}
          </span>

          <div className="card-provider desktop:flex-nowrap desktop:mb-5 flex flex-wrap items-center gap-1">
            <span className="text-md desktop:text-[16px] desktop:leading-[30px] max-[768px]:text-[14px] max-[768px]:leading-[20px]">
              provided by
            </span>
            <span className="text-blue-deep font-montserrat desktop:text-[25px] desktop:leading-[30px] text-xl font-bold max-[768px]:text-[18px] max-[768px]:leading-[24px]">
              {provider}
            </span>
          </div>
        </div>

        <div className="flex w-full justify-between gap-2.5 max-[768px]:flex-col">
          <div className="flex w-full max-w-[320px] flex-col max-[1024px]:max-w-[300px] max-[768px]:max-w-full">
            {/* <div className="flex">
                <span className={classLabel}>MSN:</span>
                <span className={classValue}>{msn}</span>
              </div> */}
            {/* <div className="flex">
                <span className={classLabel}>Reg# :</span>
                <span className={classValue}>{registration}</span>
              </div> */}
            <div className="flex">
              <span className={classLabel}>DOM</span>
              <span className={classValue}>{new Date(dom).toLocaleDateString('en-US')}</span>
            </div>
            <div className="flex">
              <span className={classLabel}>Layout:</span>
              <span className={classValue}>{layout}</span>
            </div>

            <div className="flex">
              <span className={classLabel}>BH Price:</span>
              <span className={classValue}>
                $ {getIntlNumberFormat({ value: Number(bhPrice) })}
              </span>
            </div>

            <div className="flex">
              <span className={classLabel}>MGBH:</span>
              <span className={classValue}>??????????</span>
            </div>
          </div>
          <div className="flex w-[280px] flex-col items-center justify-center gap-2 pr-10 max-[1024px]:pr-0 max-[768px]:w-full max-[768px]:flex-row max-[768px]:flex-wrap">
            <span className="text-blue-deep font-montserrat desktop:text-[25px] desktop:leading-[30px] text-xl font-bold max-[768px]:text-[16px] max-[768px]:leading-[20px]">
              Indicative Price:
            </span>
            <span className="text-blue-deep font-montserrat desktop:mb-2.5 desktop:text-[25px] desktop:leading-[30px] ml-auto text-xl font-bold text-nowrap max-[768px]:text-[18px] max-[768px]:leading-[20px] min-[520px]:ml-0">
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
              className="w-[150px] max-[768px]:ml-auto"
            >
              Proceed to offer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
