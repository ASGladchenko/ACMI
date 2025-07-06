import { RFQCustomerRaw } from './types';

export const normalizeRFQCustomerList = (rfqs: RFQCustomerRaw[]) => {
  return rfqs.map((rfq) => {
    const { id, provider, aircraft, rfq_data } = rfq;
    return {
      id,
      airplane: aircraft?.type || 'N/A',
      company: provider.provider_short_name,
      msn: aircraft?.msn || 'N/A',
      dateFrom: rfq_data.date_from,
      dateTo: rfq_data.date_to,
    };
  });
};
