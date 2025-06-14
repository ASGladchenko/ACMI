export interface FindOffersArray {
  aircraft_type_long: string;
  image: string;
  layout: string;
  offer_id: string;
  icao_type: string;

  //TODO CHECK When api will be ready
  age: number;
  mtow: number;
  engine: string;
  region: string;
}

export interface FindOffersResponse {
  search_results: FindOffersArray[];
}

export interface FindOffersNormalizedProps {
  id: string;
  age: number;
  mtow: number;
  model: string;
  engine: string;
  layout: string;
  region: string;
  imageUrl: string;
}
