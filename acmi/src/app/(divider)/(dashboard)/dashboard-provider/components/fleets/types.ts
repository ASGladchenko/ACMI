export interface FleetCardFormValues {
  msn: string;
  reg: string;
  mtow: string;
  ops: { value: string; text: string };
  thrust: string | number;
  date: string | null;
  isActive: boolean;
  aircraftType: number | null;
  etops: number | null;
  ilsCategory: string | null;
  noiseStage: string | null;
  act: boolean;
  ife: boolean;
  isps: boolean;
  wifi: boolean;
  galleys: boolean;
  sharklets: boolean;
  layout: number;
  layoutValues: Record<
    'economy' | 'transformer' | 'premium' | 'business' | 'first',
    {
      seats: string;
      pitch: string;
    }
  >;

  aircraft_id: string;
  all_male_crew: boolean;
  certifications_id: number[];
  max_capacity: number;
  provider_id: number;
  dangerous: boolean;
  engines: string;
  iosa: boolean;

  id: number;
}
