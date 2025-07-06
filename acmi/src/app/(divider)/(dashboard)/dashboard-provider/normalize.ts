import { RFQProviderRaw } from './types';

export const normalizeRFQProviderList = (rfqs: RFQProviderRaw[]) => {
  return rfqs.map((rfq) => {
    const { id, customer, aircraft, rfq_data } = rfq;
    return {
      id,
      airplane: aircraft?.type || 'N/A',
      company: customer,
      msn: aircraft?.msn || 'N/A',
      dateFrom: rfq_data.date_from,
      dateTo: rfq_data.date_to,
    };
  });
};
