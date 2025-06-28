'use client';

import { useState } from 'react';

import { format } from 'date-fns';
import { Form, Formik } from 'formik';

import { apiClient } from '@/fetch-request';
import { usePerDiemDictionary, usePositioningDictionary } from '@/hooks';
import {
  Button,
  showMessage,
  FieldTextArea,
  FieldFleetInput,
  FieldDateOpsFrom,
  serializeRFQData,
  FieldClientSelect,
  FieldMultiSelectAirport,
} from '@/components';

import { RFQBlockProps } from './types';
import { getDaysBetweenDates } from '../helpers';
import { OfferItem, OfferTitle } from '../components';
import { rfqValidationSchema } from './validationSchema';

export const RFQBlock = ({ isEditing, initialValues, id, onSuccessRequest }: RFQBlockProps) => {
  const [isLoadingRequest, setIsLoadingRequest] = useState(false);

  const { perDiem, isLoading: isPerDiemLoading } = usePerDiemDictionary();
  const { positioning, isLoading: isPositioningLoading } = usePositioningDictionary();

  const perDiemOptions = perDiem.map(({ per_diem, id }) => ({ text: per_diem, value: id }));
  const positioningOptions = positioning.map(({ positioning, id }) => ({
    text: positioning,
    value: id,
  }));

  const onSubmit = async (values: RFQBlockProps['initialValues']) => {
    const serializedRfq = serializeRFQData({ values, id });
    setIsLoadingRequest(true);

    apiClient
      .post('/rfq/create', serializedRfq)
      .then(() => {
        showMessage.success('RFQ send successfully');
        if (onSuccessRequest) onSuccessRequest();
      })
      .catch((error) => {
        showMessage.error(error);
      })
      .finally(() => {
        setIsLoadingRequest(false);
      });
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={onSubmit || (() => {})}
      validationSchema={isEditing ? rfqValidationSchema : null}
    >
      {({ values }) => {
        return (
          <Form className="flex flex-col gap-4 min-[968px]:gap-2">
            <OfferTitle title="RFQ parameters:" />

            <div className="grid grid-cols-1 items-baseline gap-[10px_20px] min-[968px]:grid-cols-2 min-[1320px]:grid-cols-2 min-[1320px]:gap-[0_40px]">
              <OfferItem
                text="Operator:"
                value={values.operator}
                className="flex-col items-baseline justify-between min-[968px]:flex-row min-[968px]:items-center [&>span:first-child]:min-w-[220px]"
              />
              <OfferItem
                value={values.position}
                text="Requester position:"
                className="flex-col items-baseline justify-between min-[968px]:flex-row min-[968px]:items-center [&>span:first-child]:min-w-[220px]"
              />
            </div>

            <div className="grid grid-cols-1 items-baseline gap-[10px_20px] min-[968px]:grid-cols-2 min-[1320px]:grid-cols-2 min-[1320px]:gap-[0_40px]">
              <OfferItem
                text="Ops Base airport:"
                value={values.airportFrom}
                className="flex-col items-baseline justify-between min-[968px]:flex-row min-[968px]:items-center [&>span:first-child]:min-w-[220px]"
              />

              {!isEditing && (
                <OfferItem
                  text="Outstations:"
                  value={values.airportTo.join(', ')}
                  className="flex-col items-baseline justify-between min-[968px]:flex-row min-[968px]:items-center [&>span:first-child]:min-w-[220px]"
                />
              )}

              {isEditing && <FieldMultiSelectAirport name="airportTo" label="Outstations :" />}
            </div>

            <div className="grid grid-cols-1 gap-[10px_20px] min-[968px]:grid-cols-2 min-[1320px]:grid-cols-2 min-[1320px]:gap-[0_40px]">
              <>
                {!isEditing && (
                  <OfferItem
                    text="Dates (inclusive):"
                    className="flex-col justify-between min-[968px]:flex-row min-[968px]:items-center [&>span:first-child]:min-w-[220px]"
                    value={`${format(values.dates.from, 'dd MMM yyyy')} - ${format(values.dates.to, 'dd MMM yyyy')}`}
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
                  className="flex-col justify-between min-[968px]:flex-row min-[968px]:items-center [&>span:first-child]:min-w-[220px]"
                />
              </>
            </div>

            <div className="grid grid-cols-1 gap-[10px_20px] min-[968px]:grid-cols-2 min-[1320px]:grid-cols-2 min-[1320px]:gap-[0_40px]">
              {!isEditing && (
                <>
                  <OfferItem
                    text="Minimum GBH:"
                    value={values.minGBH.toString()}
                    className="flex-col justify-between min-[968px]:flex-row min-[968px]:items-center [&>span:first-child]:min-w-[220px]"
                  />
                  <OfferItem
                    text="FH/FC:"
                    value={values.fhFc.toString()}
                    className="flex-col justify-between min-[968px]:flex-row min-[968px]:items-center [&>span:first-child]:min-w-[220px]"
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
                      className="flex-col justify-between min-[968px]:flex-row min-[968px]:items-center [&>span:first-child]:min-w-[220px]"
                    />
                    <OfferItem
                      text="Positioning:"
                      value={values.positioning?.text || ''}
                      className="flex-col justify-between min-[968px]:flex-row min-[968px]:items-center [&>span:first-child]:min-w-[220px]"
                    />
                    <OfferItem
                      text="Per diem:"
                      value={values.perDiem?.text || ''}
                      className="flex-col justify-between min-[968px]:flex-row min-[968px]:items-center [&>span:first-child]:min-w-[220px]"
                    />
                  </>
                )}

                {isEditing && (
                  <>
                    <FieldFleetInput variant="client" name="estimatedBH" label="Estimated BH:" />

                    <FieldClientSelect
                      name="positioning"
                      label="Positioning:"
                      options={positioningOptions}
                      isLoading={isPositioningLoading}
                    />

                    <FieldClientSelect
                      name="perDiem"
                      label="Per diem:"
                      options={perDiemOptions}
                      isLoading={isPerDiemLoading}
                    />
                  </>
                )}
              </div>
            </div>
            <>
              <OfferItem
                text="Additional request:"
                value={isEditing ? '' : values.additionalRequest}
                className="flex-col justify-between [&>span:first-child]:min-w-[220px]"
              />

              {isEditing && (
                <>
                  <FieldTextArea
                    rows={3}
                    disabled={!isEditing}
                    name="additionalRequest"
                    placeholder={isEditing ? 'Additional request' : ''}
                  />

                  <Button loading={isLoadingRequest} className="mx-auto max-w-max" type="submit">
                    Send RFQ
                  </Button>
                </>
              )}
            </>
          </Form>
        );
      }}
    </Formik>
  );
};
