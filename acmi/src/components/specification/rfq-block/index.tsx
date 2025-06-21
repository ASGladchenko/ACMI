'use client';

import { Formik } from 'formik';

import { NormalizedOfferDataRFQ } from '@/types';

import {
  Button,
  FieldTextArea,
  FieldFleetInput,
  FieldDateOpsFrom,
  FieldClientSelect,
  FieldMultiSelectAirport,
} from '@/components';

import { getDaysBetweenDates } from '../helpers';
import { OfferItem, OfferTitle } from '../components';

const mockSelects = [
  { text: 'Option 1', value: 1 },
  { text: 'Option 2', value: 2 },
  { text: 'Option 3', value: 3 },
  { text: 'Option 4', value: 4 },
  { text: 'Option 5', value: 5 },
];

export interface RFQBlockProps extends NormalizedOfferDataRFQ {
  isEditing?: boolean;
  initialValues: {
    fhFc: string;
    minGBH: string;
    operator: string;
    position: string;
    airportFrom: string;
    airportTo: string[];
    estimatedBH: string;
    additionalRequest: string;
    positioning: { text: string; value: number } | null;
    perDiem: { text: string; value: number } | null;
    dates: {
      from: Date;
      to: Date;
    };
  };
}

export const RFQBlock = ({
  isEditing,

  initialValues,
}: RFQBlockProps) => {
  console.log({ initialValues });

  const onSubmit = () => {
    console.log('send rfq');
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} enableReinitialize>
      {({ values }) => {
        return (
          <div className="flex flex-col gap-4 min-[968px]:gap-2">
            <OfferTitle title="RFQ parameters:" />

            <div className="grid grid-cols-1 gap-[10px_20px] min-[968px]:grid-cols-2 min-[1320px]:grid-cols-2 min-[1320px]:gap-[0_40px]">
              <OfferItem
                text="Operator:"
                value={values.operator}
                className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
              />
              <OfferItem
                value={values.position}
                text="Requester position:"
                className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
              />
            </div>

            <div className="grid grid-cols-1 gap-[10px_20px] min-[968px]:grid-cols-2 min-[1320px]:grid-cols-2 min-[1320px]:gap-[0_40px]">
              <OfferItem
                text="Ops Base airport:"
                value={values.airportFrom}
                className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
              />

              {!isEditing && (
                <OfferItem
                  text="Outstations:"
                  value={values.airportTo.join(', ')}
                  className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
                />
              )}

              {isEditing && <FieldMultiSelectAirport name="airportTo" label="Ops Base airport: " />}
            </div>

            <div className="grid grid-cols-1 gap-[10px_20px] min-[968px]:grid-cols-2 min-[1320px]:grid-cols-2 min-[1320px]:gap-[0_40px]">
              <>
                {!isEditing && (
                  <OfferItem
                    text="Dates (inclusive):"
                    value={`${values.dates.from} - ${values.dates.to}`}
                    className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
                  />
                )}

                {isEditing && (
                  <FieldDateOpsFrom
                    name="dates"
                    label="Dates (inclusive):"
                    minDate={new Date(initialValues.dates.from)}
                    maxDate={new Date(initialValues.dates.to)}
                  />
                )}

                <OfferItem
                  text="Period:"
                  value={`${getDaysBetweenDates(values.dates.from, values.dates.to)} day(s)`}
                  className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
                />
              </>
            </div>

            <div className="grid grid-cols-1 gap-[10px_20px] min-[968px]:grid-cols-2 min-[1320px]:grid-cols-2 min-[1320px]:gap-[0_40px]">
              {!isEditing && (
                <>
                  <OfferItem
                    text="Minimum GBH:"
                    value={values.minGBH.toString()}
                    className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
                  />
                  <OfferItem
                    text="FH/FC:"
                    value={values.fhFc.toString()}
                    className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
                  />
                </>
              )}

              {isEditing && (
                <>
                  <FieldFleetInput variant="client" name="minGBH" label="Minimum GBH:" />

                  <FieldFleetInput variant="client" name="fhFc" label="FH/FC:" />
                </>
              )}
            </div>

            <div className="grid grid-cols-1 gap-[10px_20px] min-[968px]:grid-cols-2 min-[1320px]:grid-cols-2 min-[1320px]:gap-[0_40px]">
              <div className="flex flex-col gap-2.5">
                {!isEditing && (
                  <>
                    <OfferItem
                      text="Estimated BH:"
                      value={values.estimatedBH.toString()}
                      className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
                    />
                    <OfferItem
                      text="Positioning:"
                      value={values.positioning?.text || ''}
                      className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
                    />
                    <OfferItem
                      text="Per diem:"
                      value={values.perDiem?.text || ''}
                      className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
                    />
                  </>
                )}

                {isEditing && (
                  <>
                    <FieldFleetInput variant="client" name="estimatedBH" label="Estimated BH:" />

                    <FieldClientSelect
                      name="positioning"
                      label="Positioning:"
                      options={mockSelects}
                    />

                    <FieldClientSelect name="perDiem" options={mockSelects} label="Per diem:" />
                  </>
                )}
              </div>
            </div>
            <>
              <OfferItem
                text="Additional request:"
                value={isEditing ? '' : values.additionalRequest}
                className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
              />

              {isEditing && (
                <>
                  <FieldTextArea
                    rows={3}
                    disabled={!isEditing}
                    name="additionalRequest"
                    placeholder={isEditing ? 'Additional request' : ''}
                  />

                  <Button className="mx-auto max-w-max" type="submit">
                    Send RFQ
                  </Button>
                </>
              )}
            </>
          </div>
        );
      }}
    </Formik>
  );
};
