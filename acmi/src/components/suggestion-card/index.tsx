'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import { Cross } from '@/assets/svg';
import { plain } from '@/assets/webp';
import { useQueryStore } from '@/store/query-store';
import { Role, FindOffersNormalizedProps } from '@/types';

import { Modal } from '../modal';
import { Button } from '../button';
import { AvailabilityBadge } from '../badges';
import { ProviderBlock, RFQBlock, SpecificationBlock } from '../specification';
import { mockRFQData, mockAircraft, mockProviderData } from '../specification/mock';

import './styles.css';
import { getInitialValues } from './config';

interface SuggestionCardProps extends FindOffersNormalizedProps {
  role?: Role;
}

export const SuggestionCard = ({
  age,
  mtow,
  model,
  layout,
  region,
  engines,
  imageUrl,
  role = Role.GUEST,
}: SuggestionCardProps) => {
  const { queries } = useQueryStore();

  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);
  const [src, setSrc] = useState<string | StaticImageData>(imageUrl);

  const initialValues = getInitialValues({
    airport: queries.airport_code,
    dates: [queries.date_from, queries.date_to],
  });
  const classLabel =
    'font-montserrat text-[22px] min-w-[92px] leading-[26px] text-nowrap max-[768px]:text-[16px] max-[768px]:leading-[20px]';
  const classValue =
    'w-full font-montserrat text-[22px] font-bold leading-[26px] max-[768px]:text-[14px] max-[768px]:leading-[20px]';

  const classItem = 'flex gap-4 ';

  return (
    <>
      <div className="border-gray-light flex w-full items-center rounded-[15px] border shadow-[0_4px_4px_0_#DDE7EE]">
        <div className="card-img contain relative aspect-square h-[260px] w-full max-w-max overflow-hidden rounded-[12px_0_0_12px] max-[1024px]:h-40 max-[768px]:hidden">
          <Image
            fill
            src={src}
            alt={model}
            sizes="100%"
            className="object-contain p-2"
            onError={() => setSrc(plain)}
          />
        </div>

        <div className="text-gray-medium flex w-full flex-col flex-wrap p-5 max-[768px]:p-3">
          <div className="mb-2 flex min-h-14 w-full items-start justify-between gap-4">
            <span className="card-model text-blue-deep font-montserrat desktop:text-[34px] desktop:leading-[40px] float-right text-[26px] font-bold max-[768px]:text-[18px] max-[768px]:leading-[24px]">
              {model}
            </span>

            <AvailabilityBadge />
          </div>

          <div className="flex w-full justify-between gap-2.5 max-[768px]:flex-col">
            <div className="flex w-full max-w-[300px] flex-col justify-center max-[1024px]:max-w-[280px] max-[768px]:max-w-full">
              <div className={classItem}>
                <span className={classLabel}>Engines:</span>
                <span className={classValue}>{engines ? engines : 'N/A'}</span>
              </div>
              <div className={classItem}>
                <span className={classLabel}>MTOW:</span>
                <span className={classValue}>{mtow ? `${mtow} kg` : 'N/A'}</span>
              </div>

              <div className={classItem}>
                <span className={classLabel}>Age:</span>
                <span className={classValue}>{age ? `${age}  year(s)` : 'N/A'}</span>
              </div>

              <div className={classItem}>
                <span className={classLabel}>Layout:</span>
                <span className={classValue}>{layout}</span>
              </div>
            </div>
            <div className="flex w-[280px] flex-col items-center justify-center pr-10 max-[1024px]:pr-0 max-[768px]:w-full max-[768px]:flex-row max-[768px]:flex-wrap max-[768px]:justify-start max-[768px]:gap-[10px_12px]">
              <span className="text-gray-medium font-montserrat desktop:text-[22px] desktop:leading-[26px] text-xl max-[768px]:text-[16px] max-[768px]:leading-[20px]">
                Based in
              </span>
              <span className="text-gray-dark font-montserrat desktop:mb-2.5 desktop:text-[25px] desktop:leading-[30px] text-xl font-bold text-nowrap max-[768px]:text-[18px] max-[768px]:leading-[20px]">
                {region}
              </span>

              <Button
                onClick={() => setIsOfferModalOpen(true)}
                className="w-[150px] font-bold max-[768px]:ml-auto"
              >
                Proceed to RFQ
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isOfferModalOpen}
        onClose={() => setIsOfferModalOpen(false)}
        className="max-[568px]:max-h-dvh max-[568px]:max-w-dvw"
      >
        <div className="h-[95dvh] w-[90dvw] max-w-[1386px] rounded-2xl bg-white px-10 py-5 max-[768px]:px-3 max-[768px]:py-10 max-[568px]:h-dvh max-[568px]:w-dvw max-[568px]:px-1">
          <Cross
            className="text-blue-dark absolute top-1 right-1 h-6 w-6 cursor-pointer transition duration-200 hover:text-red-400"
            onClick={() => setIsOfferModalOpen(false)}
          />

          <AvailabilityBadge className="ml-auto max-w-max" />

          <div className="scroll-bar-mini flex h-[calc(100%-100px)] flex-col gap-6 overflow-x-hidden overflow-y-auto px-20 max-[1024px]:px-0">
            <SpecificationBlock {...mockAircraft} />

            <ProviderBlock {...mockProviderData} />

            {role !== 'guest' && (
              <>
                <RFQBlock {...mockRFQData} initialValues={initialValues} isEditing />
              </>
            )}

            {role === 'guest' && (
              <p className="text-blue-dark text-center text-[40px] font-bold">
                You must be verified to send RFQ
              </p>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};
