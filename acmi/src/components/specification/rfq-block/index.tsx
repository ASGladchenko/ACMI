'use client';

import { useState } from 'react';

import { NormalizedOfferDataRFQ } from '@/types';
import {
  Input,
  TextArea,
  DateOpsFrom,
  SelectClient,
  SelectAirport,
  MultiSelectAirport,
} from '@/components';

import { getDaysBetweenDates } from '../helpers';
import { OfferItem, OfferTitle } from '../components';

export interface RFQBlockProps extends NormalizedOfferDataRFQ {
  isEditing?: boolean;
}

export const RFQBlock = ({
  fhFc,
  minGBH,
  datesTo,
  perDiem,
  operator,
  position,
  datesFrom,
  isEditing,
  airportTo,
  positioning,
  estimatedBH,
  airportFrom,
  additionalRequest,
}: RFQBlockProps) => {
  const [airportTo1, setAirportTo1] = useState<string[]>([]);

  const [date, setDate] = useState<[Date | null, Date | null]>([
    new Date(datesFrom),
    new Date(datesTo),
  ]);

  return (
    <div className="flex flex-col gap-4 min-[968px]:gap-2">
      <OfferTitle title="RFQ parameters:" />

      <div className="grid grid-cols-1 gap-[10px_20px] min-[968px]:grid-cols-2 min-[1320px]:grid-cols-2 min-[1320px]:gap-[0_40px]">
        <OfferItem
          text="Operator:"
          value={operator}
          className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
        />
        <OfferItem
          value={position}
          text="Requester position:"
          className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
        />
      </div>

      <div className="grid grid-cols-1 gap-[10px_20px] min-[968px]:grid-cols-2 min-[1320px]:grid-cols-2 min-[1320px]:gap-[0_40px]">
        {!isEditing && (
          <>
            <OfferItem
              text="Ops Base airport:"
              value={airportFrom}
              className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
            />
            <OfferItem
              value={airportTo}
              text="Outstations:"
              className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
            />
          </>
        )}

        {isEditing && (
          <>
            <SelectAirport onChange={() => {}} label="Ops Base airport:" selected={airportFrom} />

            <MultiSelectAirport
              label="Outstations: "
              selected={airportTo1}
              onChange={(option) => setAirportTo1(option as string[])}
            />
          </>
        )}
      </div>

      <div className="grid grid-cols-1 gap-[10px_20px] min-[968px]:grid-cols-2 min-[1320px]:grid-cols-2 min-[1320px]:gap-[0_40px]">
        {!isEditing && (
          <>
            <OfferItem
              text="Dates (inclusive):"
              value={`${datesFrom} - ${datesTo}`}
              className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
            />
            <OfferItem
              text="Period:"
              value={`${getDaysBetweenDates(date[0]!, date[1]!)} day(s)`}
              className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
            />
          </>
        )}

        {isEditing && (
          <>
            <DateOpsFrom
              onChange={setDate}
              initialEnd={date[1]}
              initialStart={date[0]}
              label="Dates (inclusive):"
              minDate={new Date(date[0]!)}
              maxDate={new Date(date[1]!)}
            />

            <OfferItem
              text="Period:"
              value={`${getDaysBetweenDates(date[0]!, date[1]!)} day(s)`}
              className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
            />
          </>
        )}
      </div>

      <div className="grid grid-cols-1 gap-[10px_20px] min-[968px]:grid-cols-2 min-[1320px]:grid-cols-2 min-[1320px]:gap-[0_40px]">
        {!isEditing && (
          <>
            <OfferItem
              text="Minimum GBH:"
              value={minGBH.toString()}
              className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
            />
            <OfferItem
              text="FH/FC:"
              value={fhFc.toString()}
              className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
            />
          </>
        )}

        {isEditing && (
          <>
            <Input onChange={() => {}} label="Minimum GBH:" value={minGBH.toString()} />

            <Input onChange={() => {}} label="FH/FC:" value={fhFc.toString()} />
          </>
        )}
      </div>

      <div className="grid grid-cols-1 gap-[10px_20px] min-[968px]:grid-cols-2 min-[1320px]:grid-cols-2 min-[1320px]:gap-[0_40px]">
        <div className="flex flex-col gap-2.5">
          {!isEditing && (
            <>
              <OfferItem
                text="Estimated BH:"
                value={estimatedBH.toString()}
                className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
              />
              <OfferItem
                text="Positioning:"
                value={positioning}
                className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
              />
              <OfferItem
                text="Per diem:"
                value={perDiem}
                className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
              />
            </>
          )}

          {isEditing && (
            <>
              <Input onChange={() => {}} label="Estimated BH:" value={estimatedBH} />

              <SelectClient options={[]} selected={null} onChange={() => {}} label="Positioning:" />

              <SelectClient options={[]} selected={null} onChange={() => {}} label="Per diem:" />
            </>
          )}
        </div>
      </div>
      <>
        <OfferItem
          text="Additional request:"
          value={isEditing ? '' : additionalRequest}
          className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
        />

        {isEditing && (
          <TextArea
            rows={3}
            onChange={() => {}}
            disabled={!isEditing}
            value={additionalRequest}
            placeholder={isEditing ? 'Additional request' : ''}
          />
        )}
      </>
    </div>
  );
};
