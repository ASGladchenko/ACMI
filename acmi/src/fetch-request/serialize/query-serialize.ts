import { queryParams } from '@/constants';

export function serializeQuery(params: Record<string, string>) {
  return {
    act: null,
    aircraftBody: null,
    aircraft_types: null,
    airportIcao: params[queryParams.opsFrom] ? params[queryParams.opsFrom].split(',')[0] : null,
    all_male_crew: null,
    certifications: null,
    dangerous_goods_certification: null,
    dateFrom: new Date().toISOString().split('T')[0],
    dateTo: (() => {
      const d = new Date();
      d.setFullYear(d.getFullYear() + 10);
      return d.toISOString().split('T')[0];
    })(),
    etops: null,
    galley_ovens: null,
    ife: null,
    iosa: null,
    isps: null,
    layout_business: null,
    layout_economy: null,
    layout_first: null,
    layout_premium_economy: null,
    max_age_years: null,
    max_noise_level: null,
    minPax: null,
    min_approach_cat: null,
    wifi: null,
    winglets_sharklets: null,
  };
}
