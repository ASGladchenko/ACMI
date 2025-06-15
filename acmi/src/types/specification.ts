export interface OfferData {
  msn: string;
  age: number;
  reg: string;
  pax: number;
  ils: string;
  type: string;
  mtow: number;
  act: boolean;
  ife: boolean;
  etops: number;
  noise: string;
  isps: boolean;
  wifi: boolean;
  layout: string;
  thrust: number;
  period: number;
  date_to: string;
  bh_price: number;
  per_diem: string;
  wingtips: boolean;
  date_from: string;
  manufactured: string;
  base_airport: string;
  provider_aoc: string;
  galley_ovens: boolean;
  provider_name: string;
  indicative_price: number;
  provider_callsign: string;
  min_guaranteed_bh: number;
  positioning_price: number;
  offered_positioning: string;
  total_indicative_price: number;
  provider_certifications: string;
  provider_additional_data: boolean;
}

export interface NormalizedOfferDataAircraft {
  age: string;
  pax: string;
  act: string;
  ils: string;
  ife: string;
  type: string;
  mtow: string;
  isps: string;
  wifi: string;
  etops: string;
  noise: string;
  layout: string;
  thrust: string;
  engines: string;
  wingtips: string;
  base_airport: string;
  galley_ovens: string;
}

export interface NormalizedOfferDataOperator {
  name: string;
  aoc: string;
  callsign: string;
  certifications: string;
  additionalData: string;
}

export interface NormalizedOfferDataProvider {
  name: string;
  iosa: string;
  registration: string;
  certifications: string;
}

export interface NormalizedOfferDataRFQ {
  operator: string;
  position: string;
  airportFrom: string;
  airportTo: string;
  datesFrom: string;
  datesTo: string;
  minGBH: number;
  fhFc: number;
  estimatedBH: number;
  positioning: string;
  perDiem: string;
  additionalRequest: string;
}

export interface NormalizedOfferDataOfferTerms {
  perDiem: string;
  overTimeBh: number;
  totalPrice: number;
  guaranteedBh: number;
  estimatedPrice: number;
  positioningPrice: number;
  responseAdditionalRequest: string;
}

export interface NormalizedOfferData {
  rfq?: NormalizedOfferDataRFQ;
  aircraft: NormalizedOfferDataAircraft;
  operator: NormalizedOfferDataOperator;
  provider?: NormalizedOfferDataProvider;
  offerTerms?: NormalizedOfferDataOfferTerms;
}
