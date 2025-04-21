import { FindOffersArray, FindOffersNormalizedProps } from '@/types';

export const normalizeFindOffers = (data: FindOffersArray[]): FindOffersNormalizedProps[] => {
  return data.map((offer) => ({
    id: offer.offer_id,
    msn: offer.msn,
    dom: offer.dom,
    model: offer.aircraft_type_long,
    layout: offer.layout,
    bhPrice: offer.bh_price,
    provider: offer.provider_name,
    imageUrl: offer.image,
    registration: offer.reg,
    indicativePrice: offer.indicative_price,
  }));
};
