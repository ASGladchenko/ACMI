export type Status = 'idle' | 'loading' | 'loading_update' | 'success' | 'error';

export interface State {
  data: AircraftFleetNormalized[] | null;
  status: Status;
  error: string | null;
  updatingId?: number | null;
}

export type Action =
  | { type: 'FETCH_START' }
  | { type: 'UPDATE_START'; id: number }
  | { type: 'FETCH_SUCCESS'; payload: AircraftFleetNormalized[] }
  | { type: 'FETCH_ERROR'; payload: string }
  | { type: 'UPDATE_SUCCESS'; payload: AircraftFleetNormalized }
  | { type: 'RESET_ERROR' };

export interface NormalizedAircraftFleet {
  asd: string;
}

export interface AircraftFleet {
  id: number;
  aircraft_id: string;
  msn: string;
  reg_number: string;
  approach_cat: string;
  mtow: number;
  base_location: string;
  noise: string;
  type: string;
  etops: number;
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
}

export interface AircraftFleetNormalized {
  id: number;

  isActive: boolean;

  msn: string;
  reg: string;
  mtow: string;
  ops: string;
  thrust: number;
  date: string;
  aircraftType: string;
  etops: string;
  ilsCategory: string;
  noiseStage: string;
  act: boolean;
  ife: boolean;
  isps: boolean;
  wifi: boolean;
  galleys: boolean;
  sharklets: boolean;
  layoutValues: {
    economy: { seats: string; pitch: string };
    transformer: { seats: string; pitch: string };
    premium: { seats: string; pitch: string };
    business: { seats: string; pitch: string };
    first: { seats: string; pitch: string };
  };
}

export interface UseProviderFleetProps {
  onError?: (error: string) => void;
}
