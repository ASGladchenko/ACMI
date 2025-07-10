export enum NormalizedOfferStatus {
  //When customer send rfq
  NEW = 'NEW',
  //When provide send customer offer
  SUBMITTED = 'SUBMITTED',
  //When customer confirm offer
  CONFIRMED = 'CONFIRMED',
  //When customer decline offer
  DECLINE = 'DECLINE',
}

export interface AircraftDetails {
  age: number;
  mtow: number;
  act: boolean;
  ife: boolean;
  model: string;
  isps: boolean;
  wifi: boolean;
  layout: string;
  engines: string;
  noise_id: number;
  etops_id: number;
  icao_type: string;
  region_name: string;
  max_capacity: number;
  thrust_rating: number;
  galley_ovens: boolean;
  approach_cat_id: number;
  winglets_sharklets: boolean;
}

export interface ProviderDetails {
  certification: string;
  iosa: boolean;
}

export type AircraftResponseTransactionType = {
  transaction_id: number | null;
  transaction_status: NormalizedOfferStatus | null;
};
export interface AircraftResponseOffer {
  offer_id: number;
  aircraft_details: AircraftDetails;
  provider_details: ProviderDetails;
  transaction: AircraftResponseTransactionType;
}

export interface AircraftResponse {
  search_results: AircraftResponseOffer[];
}

export interface NormalizedDetailedOfferAircraft {
  pax: number;
  age: number;
  type: string;
  mtow: number;
  act: boolean;
  ife: boolean;
  noise: number;
  etops: number;
  isps: boolean;
  wifi: boolean;
  region: string;
  layout: string;
  thrust: number;
  engines: string;
  imageUrl: string;
  wingtips: boolean;
  approachCatId: number;
  galleryOvens: boolean;
}

export interface NormalizedOfferDataProviderDetails {
  name?: string;
  iosa: boolean;
  registration?: string;
  certifications: string;
}

export interface NormalizedDetailedOffer {
  id: number;
  status: {
    id: number | null;
    status: NormalizedOfferStatus | null;
  };
  aircraftDetails: NormalizedDetailedOfferAircraft;
  providerDetails: NormalizedOfferDataProviderDetails;
}
