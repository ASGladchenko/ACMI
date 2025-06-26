export interface FindOffersArray {
  aircraft_type_long: string;
  image: string;
  layout: string;
  offer_id: string;
  icao_type: string;
  age: number;
  mtow: number;
  engines: string;
  region: string;
}

export interface FindOffersNormalizedProps {
  id: string;
  age: number;
  mtow: number;
  model: string;
  engines: string;
  layout: string;
  region: string;
  imageUrl: string;
}
