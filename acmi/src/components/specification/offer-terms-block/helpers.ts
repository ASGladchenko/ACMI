import { OfferTermsFormValues } from '.';

export const getEstimatedPrice = (values: OfferTermsFormValues) => {
  return (
    Number(values.guaranteedBh) * Number(values.minGBH) +
    (Number(values.estimatedBH) - Number(values.minGBH)) * Number(values.overTimeBh)
  );
};

export const getTotalPrice = (values: OfferTermsFormValues) => {
  return (
    getEstimatedPrice(values) +
    Number(values.positioningPrice) +
    Number(values.perDiem)
  ).toFixed(2);
};
