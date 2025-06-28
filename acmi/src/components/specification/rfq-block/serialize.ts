import { RFQBlockProps } from './types';

export interface SerializeRFQData {
  values: RFQBlockProps['initialValues'];
  id: number;
}

export const serializeRFQData = ({values, id}: SerializeRFQData) => {
  return {
    offer_id: id,
    rfq_create: {
      additional_requests: values.additionalRequest,
      date_from: values.dates.from.toISOString(),
      date_to: values.dates.to.toISOString(),
      estimated_bh: Number(values.estimatedBH),
      fh_fc: Number(values.fhFc),
      min_gbh: Number(values.minGBH),
      ops_base: values.airportFrom,
      outstations: values.airportTo,
      per_diem_id: values.perDiem?.value || 0,
      positioning_id: values.positioning?.value || 0,
    },
  };
};
