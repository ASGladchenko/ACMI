import { queryParams } from '@/constants';

export interface SerializeOfferIdParams {
  airport_code: string | null;
  date_from: string | null;
  date_to: string | null;
  offer_id: number | null;
}

export const serializeOfferId = (
  id: string,
  params: Record<string, string | string[] | undefined>
): SerializeOfferIdParams => {
  const dateFromISO = params.date_from
    ? new Date(Number(params.date_from)).toISOString().split('T')[0]
    : null;

  const dateToISO = params.date_to
    ? new Date(Number(params.date_to)).toISOString().split('T')[0]
    : null;

  const airportCode = params[queryParams.opsFrom]
    ? (params[queryParams.opsFrom] as string).split(',')[0]
    : null;

  const offerId = Number.isNaN(Number(id)) ? null : Number(id);

  return {
    airport_code: airportCode,
    date_from: dateFromISO,
    date_to: dateToISO,
    offer_id: offerId,
  };
};
