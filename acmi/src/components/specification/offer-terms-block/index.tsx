'use client';

import { Input } from '@/components/inputs';
import { TextArea } from '@/components/text-area';
import { SelectClient } from '@/components/selects';
import { NormalizedOfferDataOfferTerms } from '@/types';

import { OfferItem, OfferTitle } from '../components';

export interface OfferTermsBlockProps extends NormalizedOfferDataOfferTerms {
  isEditing?: boolean;
}

export const OfferTermsBlock = ({
  perDiem,
  isEditing,
  totalPrice,
  overTimeBh,
  guaranteedBh,
  estimatedPrice,
  positioningPrice,
  responseAdditionalRequest,
}: OfferTermsBlockProps) => {
  return (
    <div className="flex flex-col gap-4 min-[968px]:gap-2">
      <OfferTitle title="Offer terms:" />

      <div className="grid grid-cols-1 gap-[10px_20px] min-[968px]:grid-cols-2 min-[1320px]:grid-cols-2 min-[1320px]:gap-[0_40px]">
        {!isEditing && (
          <>
            <OfferItem
              text="GBH price:"
              value={guaranteedBh.toString()}
              className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
            />
            <OfferItem
              text="Over time BH price:"
              value={overTimeBh.toString()}
              className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
            />
          </>
        )}

        {isEditing && (
          <>
            <Input onChange={() => {}} label="GBH price, $:" value={guaranteedBh.toString()} />

            <Input
              onChange={() => {}}
              label="Over time BH price, $:"
              value={overTimeBh.toString()}
            />
          </>
        )}
      </div>

      <div className="grid grid-cols-1 gap-[10px_20px] min-[968px]:grid-cols-2 min-[1320px]:grid-cols-2 min-[1320px]:gap-[0_40px]">
        <OfferItem
          text="ESTIMATED ACMI PRICE:"
          value={estimatedPrice.toString() + ' $'}
          className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
        />
      </div>

      <div className="grid grid-cols-1 gap-[10px_20px] min-[968px]:grid-cols-2 min-[1320px]:grid-cols-2 min-[1320px]:gap-[0_40px]">
        {!isEditing && (
          <OfferItem
            text="Positioning & repositioning:"
            value={positioningPrice.toString() + ' $'}
            className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
          />
        )}

        {isEditing && (
          <>
            <Input
              onChange={() => {}}
              label="Positioning & repositioning, $:"
              value={positioningPrice.toString()}
            />
          </>
        )}
      </div>

      <div className="grid grid-cols-1 gap-[10px_20px] min-[968px]:grid-cols-2 min-[1320px]:grid-cols-2 min-[1320px]:gap-[0_40px]">
        {!isEditing && (
          <OfferItem
            text="Per diem:"
            value={perDiem.toString() + ' $'}
            className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
          />
        )}

        {isEditing && (
          <SelectClient options={[]} selected={null} onChange={() => {}} label="Per diem:" />
        )}
      </div>

      <OfferItem
        text="Response to additional requests:"
        value={isEditing ? '' : responseAdditionalRequest}
        className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
      />

      {isEditing && (
        <TextArea
          rows={3}
          onChange={() => {}}
          disabled={!isEditing}
          placeholder="Response to additional requests"
          value={responseAdditionalRequest}
        />
      )}

      <p className="text-blue-deep font-montserrat flex flex-wrap items-center gap-[0_32px] text-[20px] font-extrabold min-[968px]:text-[26px]">
        <span>TOTAL ESTIMATED PRICE:</span> <span>{totalPrice}$</span>
      </p>
    </div>
  );
};
