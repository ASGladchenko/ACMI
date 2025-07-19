import { getLayoutFromObj } from '@/utils';

import { SerializedAirCraftFleet } from '../types';
import { FleetCardFormValues } from '../components';

export const serializeAirCraftFleet = (values: FleetCardFormValues): SerializedAirCraftFleet => {
  const { economy, transformer, premium, business, first } = values.layoutValues;

  return {
    id: values.id,
    isActive: values.isActive,

    act: values.act,
    msn: values.msn,
    reg_number: values.reg,
    mtow: Number(values.mtow) || 0,
    base_location: values.ops.text,
    thrust_rating: Number(values.thrust) || 0,
    type_id: values.aircraftType,
    etops_id: values.etops,
    approach_cat_id: values.ilsCategory,
    noise_id: values.noiseStage,
    dom: values.date,
    ife: values.ife,
    isps: values.isps,
    wifi: values.wifi,
    galley_ovens: values.galleys,
    winglets_sharklets: values.sharklets,

    max_capacity: values.layout,

    layout: getLayoutFromObj({
      y_seats: Number(economy.seats),
      yj_seats: Number(transformer.seats),
      w_seats: Number(premium.seats),
      j_seats: Number(business.seats),
      f_seats: Number(first.seats),
    }),

    y_pitch: Number(economy.pitch),
    yj_pitch: Number(transformer.pitch),
    w_pitch: Number(premium.pitch),
    j_pitch: Number(business.pitch),
    f_pitch: Number(first.pitch),

    y_seats: Number(economy.seats),
    yj_seats: Number(transformer.seats),
    w_seats: Number(premium.seats),
    j_seats: Number(business.seats),
    f_seats: Number(first.seats),

    // Есть в запросе но нет в макете

    aircraft_id: values.aircraft_id,
    all_male_crew: values.all_male_crew,
    certifications_id: values.certifications_id,
    provider_id: values.provider_id,
    dangerous: values.dangerous,
    engines: values.engines,
    iosa: values.iosa,
  };
};
