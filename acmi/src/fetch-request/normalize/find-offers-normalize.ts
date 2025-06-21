import { FindOffersArray, FindOffersNormalizedProps } from '@/types';
const baseImgUrl = process.env.NEXT_PUBLIC_IMG_URL;

export const normalizeFindOffers = (data: FindOffersArray[]): FindOffersNormalizedProps[] => {
  return data.map((offer) => ({
    id: offer.offer_id,
    engines: offer.engines,
    layout: offer.layout,
    region: offer.region,
    model: offer.aircraft_type_long,
    age: offer.age ? Number(offer.age) : 0,
    mtow: offer.mtow ? Number(offer.mtow) : 0,
    imageUrl: `${baseImgUrl}${offer.icao_type}.svg`,
  }));
};
