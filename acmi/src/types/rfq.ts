export type AircraftLayout = {
  f_seats: number;
  j_seats: number;
  w_seats: number;
  y_seats: number;
  yj_seats: number;
};

export type AircraftRFQ = {
  act: boolean;
  age: number;
  autoland_id: number;
  base: string;
  engines: string;
  etops_id: number;
  galley_ovens: boolean;
  ife: boolean;
  isps: boolean;
  layout: AircraftLayout;
  mtow: number;
  noise_id: number;
  pax: number;
  thrust: number;
  type: string;
  wifi: boolean;
  winglets_sharklets: boolean;
};

export type Provider = {
  aoc: string;
  certifications: string;
  iosa: boolean;
  provider_short_name: string;
};

export type RFQData = {
  additional_requests: string;
  date_from: string;
  date_to: string;
  duration: number;
  estimated_bh: number;
  fh_fc: number;
  min_gbh: number;
  ops_base: string;
  outstations: string[];
  per_diem: string;
  positioning: string;
};

export type RFQTerms = {
  additional_requests_answer: string;
  gbh_price: number;
  overtime_bh_price: number;
  per_diem_price: number;
  positioning_price: number;
};

export type RFQRequest = {
  aircraft: AircraftRFQ;
  create_timestamp: string;
  customer: string;
  id: number;
  last_update_timestamp: string;
  provider: Provider;
  requester_position: string;
  rfq_data: RFQData;
  rfq_terms: RFQTerms;
  status: string;
};
