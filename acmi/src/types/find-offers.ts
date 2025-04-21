export interface FindOffersArray {
  aircraft_type_long: string;
  bh_price: string;
  dom: string;
  image: string;
  indicative_price: string;
  layout: string;
  msn: string;
  offer_id: string;
  provider_name: string;
  reg: string;
}

export interface FindOffersResponse {
  search_results: FindOffersArray[];
}

export interface FindOffersNormalizedProps {
  id: string;
  msn: string;
  dom: string;
  model: string;
  layout: string;
  bhPrice: string;
  provider: string;
  imageUrl: string;
  registration: string;
  indicativePrice: string;
}
