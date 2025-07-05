'use client';

import { useState } from 'react';

import { Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';

import { apiClient } from '@/fetch-request';
import { Button, showMessage, FieldTextArea, FieldFleetInput } from '@/components';

import { serializeOfferData } from './serialize';
import { OfferItem, OfferTitle } from '../components';
import { offerTermsValidationSchema } from './config';
import { getErrorMessage } from '@/utils';
import { getEstimatedPrice, getTotalPrice } from './helpers';

export interface OfferTermsBlockProps {
  id: number;
  isEditing?: boolean;
  initialValues: OfferTermsFormValues;
}

export interface OfferTermsFormValues {
  perDiem: number | string;
  overTimeBh: number | string;
  totalPrice: number | string;
  guaranteedBh: number | string;
  estimatedPrice: number | string;
  positioningPrice: number | string;
  responseAdditionalRequest: string;

  minGBH: number | string;
  estimatedBH: number | string;
}

export const OfferTermsBlock = ({ isEditing, initialValues, id }: OfferTermsBlockProps) => {
  const router = useRouter();
  const [isLoadingRequest, setIsLoadingRequest] = useState(false);

  const onSubmit = async (values: OfferTermsBlockProps['initialValues']) => {
    const serializedRfq = serializeOfferData({ values, id });
    setIsLoadingRequest(true);

    try {
      await apiClient.post('/rfq/submit', serializedRfq);

      showMessage.success('Offer send successfully');
      router.push('/dashboard-provider/rfq-requests');
    } catch (error) {
      const msg = getErrorMessage(error, 'An error occurred while sending the offer');

      showMessage.error(msg);
    } finally {
      setIsLoadingRequest(false);
    }
  };

  return (
    <Formik
      enableReinitialize
      onSubmit={onSubmit}
      validateOnChange={isEditing}
      initialValues={initialValues}
      validationSchema={isEditing ? offerTermsValidationSchema : null}
    >
      {({ values }) => {
        return (
          <Form className="flex flex-col gap-4 min-[968px]:gap-2">
            <OfferTitle title="Offer terms:" />

            <div className="grid grid-cols-1 gap-[10px_20px] min-[968px]:grid-cols-2 min-[1320px]:grid-cols-2 min-[1320px]:gap-[0_40px]">
              {!isEditing && (
                <>
                  <OfferItem
                    text="GBH price:"
                    value={values.guaranteedBh.toString() + ' $'}
                    className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
                  />
                  <OfferItem
                    text="Over time BH price:"
                    value={values.overTimeBh.toString() + ' $'}
                    className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
                  />
                </>
              )}

              {isEditing && (
                <>
                  <FieldFleetInput variant="client" name="guaranteedBh" label="GBH price, $:" />

                  <FieldFleetInput
                    variant="client"
                    name="overTimeBh"
                    label="Over time BH price, $:"
                  />
                </>
              )}
            </div>

            <div className="grid grid-cols-1 gap-[10px_20px] min-[968px]:grid-cols-2 min-[1320px]:grid-cols-2 min-[1320px]:gap-[0_40px]">
              <OfferItem
                text="ESTIMATED ACMI PRICE:"
                value={getEstimatedPrice(values).toFixed(2) + ' $'}
                className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
              />
            </div>

            <div className="grid grid-cols-1 gap-[10px_20px] min-[968px]:grid-cols-2 min-[1320px]:grid-cols-2 min-[1320px]:gap-[0_40px]">
              {!isEditing && (
                <OfferItem
                  text="Positioning & repositioning:"
                  value={values.positioningPrice.toString() + ' $'}
                  className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
                />
              )}

              {isEditing && (
                <FieldFleetInput variant="client" name="positioningPrice" label="Positioning, $:" />
              )}
            </div>

            <div className="grid grid-cols-1 gap-[10px_20px] min-[968px]:grid-cols-2 min-[1320px]:grid-cols-2 min-[1320px]:gap-[0_40px]">
              {!isEditing && (
                <OfferItem
                  text="Per diem:"
                  value={values.perDiem.toString() + ' $'}
                  className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
                />
              )}

              {isEditing && (
                <FieldFleetInput variant="client" name="perDiem" label="Per diem, $:" />
              )}
            </div>

            <OfferItem
              text="Response to additional requests:"
              value={isEditing ? '' : values.responseAdditionalRequest}
              className="flex-col justify-between min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
            />

            {isEditing && (
              <FieldTextArea
                rows={3}
                name="responseAdditionalRequest"
                placeholder="Response to additional requests"
              />
            )}

            <p className="text-blue-deep font-montserrat flex flex-wrap items-center gap-[0_32px] text-[20px] font-extrabold min-[968px]:text-[26px]">
              <span>TOTAL ESTIMATED PRICE:</span> <span>{getTotalPrice(values)} $</span>
            </p>

            {isEditing && (
              <Button loading={isLoadingRequest} className="mx-auto mt-4 max-w-max" type="submit">
                Send offer and share contact details
              </Button>
            )}
          </Form>
        );
      }}
    </Formik>
  );
};
