import { differenceInYears } from 'date-fns';

import { getLayoutFromObj } from '@/utils';

import { AircraftFleet, NormalizedAircraftFleet, RFQProviderRaw } from '../types';

export const normalizeAircraftFleet = (aircraft: AircraftFleet): NormalizedAircraftFleet => {
  const setValueOrEmpty = (value: number | string | undefined) => {
    return value ? value.toString() : '';
  };

  return {
    isActive: Boolean(aircraft.isActive),

    id: aircraft.id,
    msn: aircraft.msn,
    etops: aircraft.etops_id,
    reg: aircraft.reg_number,
    noiseStage: aircraft.noise_id,
    aircraftType: aircraft.type_id,
    thrust: aircraft.thrust_rating,
    date: setValueOrEmpty(aircraft.dom),
    mtow: setValueOrEmpty(aircraft.mtow),
    ilsCategory: aircraft.approach_cat_id,
    ops: { value: aircraft?.base_location ?? '', text: aircraft?.base_location ?? '' },

    galleys: aircraft.galley_ovens,
    ife: aircraft.ife,
    act: aircraft.act,
    isps: aircraft.isps,
    wifi: aircraft.wifi,
    sharklets: aircraft.winglets_sharklets,
    layoutValues: {
      economy: {
        seats: setValueOrEmpty(aircraft.y_seats),
        pitch: setValueOrEmpty(aircraft.y_pitch),
      },
      transformer: {
        seats: setValueOrEmpty(aircraft.yj_seats),
        pitch: setValueOrEmpty(aircraft.yj_pitch),
      },
      premium: {
        seats: setValueOrEmpty(aircraft.w_seats),
        pitch: setValueOrEmpty(aircraft.w_pitch),
      },
      business: {
        seats: setValueOrEmpty(aircraft.j_seats),
        pitch: setValueOrEmpty(aircraft.j_pitch),
      },
      first: { seats: setValueOrEmpty(aircraft.f_seats), pitch: setValueOrEmpty(aircraft.f_pitch) },
    },

    // Есть в запросе но нет в макете

    aircraft_id: aircraft.aircraft_id,
    all_male_crew: aircraft.all_male_crew,
    certifications_id: aircraft.certifications_id,
    max_capacity: aircraft.max_capacity,
    provider_id: aircraft.provider_id,
    dangerous: aircraft.dangerous,
    engines: aircraft.engines,
    iosa: aircraft.iosa,
  };
};

export const normalizeRFQProviderList = (rfqs: RFQProviderRaw[]) => {
  return rfqs.map((rfq) => {
    const { id, customer, aircraft, rfq_data } = rfq;

    return {
      id,
      airplane: aircraft?.type || 'N/A',
      company: customer,
      msn: aircraft?.msn || 'N/A',
      dateFrom: rfq_data.date_from,
      dateTo: rfq_data.date_to,
      layout: getLayoutFromObj(aircraft.layout),
      age: (differenceInYears(new Date(), new Date(aircraft.dom)) || 'N/A').toString(),
    };
  });
};
