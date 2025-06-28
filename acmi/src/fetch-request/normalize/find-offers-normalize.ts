import { AircraftResponseOffer, NormalizedDetailedOffer } from '@/types';

const baseImgUrl = process.env.NEXT_PUBLIC_IMG_URL;

export const normalizeDetailedFindOffers = (
  data: AircraftResponseOffer[]
): NormalizedDetailedOffer[] => {
  return data.map((offer) => {
    const { aircraft_details, provider_details } = offer;
    return {
      id: offer.offer_id,
      aircraftDetails: {
        pax: aircraft_details.max_capacity,
        act: aircraft_details.act,
        ife: aircraft_details.ife,
        age: aircraft_details.age,
        mtow: aircraft_details.mtow,
        isps: aircraft_details.isps,
        wifi: aircraft_details.wifi,
        type: aircraft_details.model,
        layout: aircraft_details.layout,
        etops: aircraft_details.etops_id,
        noise: aircraft_details.noise_id,
        engines: aircraft_details.engines,
        region: aircraft_details.region_name,
        galleryOvens: aircraft_details.galley_ovens,
        wingtips: aircraft_details.winglets_sharklets,
        thrust: aircraft_details.thrust_rating,
        approachCatId: aircraft_details.approach_cat_id,
        imageUrl: `${baseImgUrl}${aircraft_details.model}.svg`,
      },
      providerDetails: {
        certifications: provider_details.certification,
        iosa: provider_details.iosa,
      },
    };
  });
};
