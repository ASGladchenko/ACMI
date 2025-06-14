import { create } from 'zustand';

export interface AirCraftTypes {
  aircraft_family: string;
  engine_count: string;
  engine_type: string;
  icao_type_designator: string;
  id: number;
  manufacturer: string;
  model: string;
}

type AirCraftTypesState = {
  aircraftTypes: AirCraftTypes[];
  setAircraftTypes: (aircraftTypes: AirCraftTypes[]) => void;
  getAircraftTypes: () => AirCraftTypes[];
};

export const useAirCraftTypesStore = create<AirCraftTypesState>((set, get) => ({
  aircraftTypes: [],
  setAircraftTypes: (aircraftTypes: AirCraftTypes[]) => {
    set({ aircraftTypes });
  },
  getAircraftTypes: () => get().aircraftTypes,
}));
