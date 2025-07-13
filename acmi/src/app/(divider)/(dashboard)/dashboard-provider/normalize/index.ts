import { differenceInYears } from 'date-fns';

import { getLayoutFromObj } from '@/utils';

import { AircraftFleet, RFQProviderRaw } from '../types';

export const normalizeAircraftFleet = (aircraft: AircraftFleet) => {
  const setValueOrEmpty = (value: number | string | undefined) => {
    return value ? value.toString() : '';
  };

  return {
    isActive: false,

    id: aircraft.id,
    msn: aircraft.msn,
    mtow: setValueOrEmpty(aircraft.mtow),
    reg: aircraft.reg_number,
    noiseStage: aircraft.noise,
    ops: aircraft.base_location,
    ilsCategory: aircraft.approach_cat,
    aircraftType: aircraft.type,
    etops: setValueOrEmpty(aircraft.etops),
    thrust: aircraft.thrust_rating,

    act: aircraft.act,
    ife: aircraft.ife,
    galleys: aircraft.galley_ovens,
    isps: aircraft.isps,
    wifi: aircraft.wifi,
    sharklets: aircraft.winglets_sharklets,

    date: '',

    layoutValues: {
      economy: { seats: setValueOrEmpty(aircraft.y_seats), pitch: '' },
      transformer: { seats: setValueOrEmpty(aircraft.yj_seats), pitch: '' },
      premium: { seats: setValueOrEmpty(aircraft.w_seats), pitch: '' },
      business: { seats: setValueOrEmpty(aircraft.j_seats), pitch: '' },
      first: { seats: setValueOrEmpty(aircraft.f_seats), pitch: '' },
    },
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
