import { FindOffersArray, FindOffersNormalizedProps } from '@/types';
const baseImgUrl = process.env.NEXT_PUBLIC_IMG_URL;

export const normalizeFindOffers = (data: FindOffersArray[]): FindOffersNormalizedProps[] => {
  return data.map((offer) => ({
    msn: offer.msn,
    dom: offer.dom,
    id: offer.offer_id,
    layout: offer.layout,
    bhPrice: offer.bh_price,
    registration: offer.reg,
    provider: offer.provider_name,
    model: offer.aircraft_type_long,
    indicativePrice: offer.indicative_price,
    imageUrl: `${baseImgUrl}${offer.icao_type}.svg`,
  }));
};
