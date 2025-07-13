export interface AircraftFleet {
  id: string;
  aircraft_id: string;

  msn: string;
  reg_number: string;
  approach_cat_id: string;
  mtow: number;
  base_location: string;
  noise_id: string;
  type_id: number;
  etops_id: number;
  thrust_rating: number;

  act: boolean;
  ife: boolean;
  isps: boolean;
  wifi: boolean;
  dangerous: boolean;
  galley_ovens: boolean;
  winglets_sharklets: boolean;

  dom: string;
  layout: string;
  max_capacity: number;
  model: string;
  provider: string;

  j_seats: number;
  w_seats: number;
  f_seats: number;
  y_seats: number;
  yj_seats: number;

  j_pitch: number;
  w_pitch: number;
  f_pitch: number;
  y_pitch: number;
  yj_pitch: number;
}
export interface LayoutValue {
  seats: string;
  pitch: string;
}

export interface LayoutValues {
  economy: LayoutValue;
  transformer: LayoutValue;
  premium: LayoutValue;
  business: LayoutValue;
  first: LayoutValue;
}

export interface NormalizedAircraftFleet {
  isActive: boolean;
  id: string;
  ilsCategory: string;
  etops: number;
  ops: { value: string; text: string };
  date: string;
  msn: string;
  mtow: string;
  reg: string;
  noiseStage: string;
  aircraftType: number;
  thrust: number;
  galleys: boolean;
  ife: boolean;
  act: boolean;
  isps: boolean;
  wifi: boolean;
  sharklets: boolean;
  layoutValues: LayoutValues;
}

export interface RFQProviderRaw {
  id: number;
  customer: string;
  aircraft: {
    type: string;
    msn: string;
    dom: string;
    layout: {
      j_seats: number;
      w_seats: number;
      f_seats: number;
      y_seats: number;
      yj_seats: number;
    };
  };
  rfq_data: {
    date_from: string;
    date_to: string;
  };
}

export interface SerializedAirCraftFleet {
  act: boolean;
  msn: string;
  reg_number: string;
  mtow: number;
  base_location: string;
  thrust_rating: number;
  type_id: number | null;
  etops_id: number | null;
  approach_cat_id: string | null;
  noise_id: string | null;
  dom: string | null;
  ife: boolean;
  isps: boolean;
  wifi: boolean;
  galley_ovens: boolean;
  winglets_sharklets: boolean;
  layout: string;
  y_pitch: number;
  yj_pitch: number;
  w_pitch: number;
  j_pitch: number;
  f_pitch: number;
  y_seats: number;
  yj_seats: number;
  w_seats: number;
  j_seats: number;
  f_seats: number;
}
