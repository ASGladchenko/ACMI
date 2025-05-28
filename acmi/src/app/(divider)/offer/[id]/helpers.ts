import { SerializeOfferIdParams } from '@/fetch-request';

export const validateOfferIdParams = (params: SerializeOfferIdParams) => {
  return Object.values(params).every((value) => value !== null);
};
