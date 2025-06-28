import { OfferTermsBlockProps } from '.';

export interface SerializeOfferDataProps {
  id: number;
  values: OfferTermsBlockProps['initialValues'];
}

export const serializeOfferData = ({ values, id }: SerializeOfferDataProps) => ({
  rfq_id: id,
  rfq_terms: {
    gbh_price: Number(values.guaranteedBh),
    per_diem_price: Number(values.perDiem),
    overtime_bh_price: Number(values.overTimeBh),
    positioning_price: Number(values.positioningPrice),
    additional_requests_answer: values.responseAdditionalRequest,
  },
});
