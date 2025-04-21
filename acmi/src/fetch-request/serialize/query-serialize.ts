import { queryParams } from '@/constants';

export function serializeQuery(params: Record<string, string>) {
  const dateFromISO = params.date_from
    ? new Date(Number(params.date_from)).toISOString().split('T')[0]
    : null;

  const dateToISO = params.date_to
    ? new Date(Number(params.date_to)).toISOString().split('T')[0]
    : null;

  return {
    act: params.act === 'true' || null,
    aircraft_body: params.is_wide === 'true' || null,
    aircraft_types: params.aircraft_types || null,
    airport_code: params[queryParams.opsFrom]
      ? params[queryParams.opsFrom].split(',')[0].toLocaleLowerCase()
      : null,
    all_male_crew: params.all_male_crew === 'true' || params.all_male_crew === 'false' || null,
    certifications: params.certifications || null,
    dangerous_goods_certification: params.dangerous === 'true' || null,
    date_from: dateFromISO,
    date_to: dateToISO,
    etops: params.etops || null,
    galley_ovens: params.galley === 'true' || null,
    ife: params.ife === 'true' || params.ife === 'false' || null,
    iosa: params.iosa === 'true' || null,
    isps: params.isps === 'true' || null,
    layout_business: (params.business && Number(params.business)) || null,
    layout_economy: (params.economy && Number(params.economy)) || null,
    layout_first: (params.first && Number(params.first)) || null,
    layout_premium_economy: (params.premium_economy && Number(params.premium_economy)) || null,
    max_age_years: (params.max_age && Number(params.max_age)) || null,
    max_noise_level: params.max_noise_level || null,
    min_pax: (params.min_pax && Number(params.min_pax)) || null,
    min_approach_cat: params.min_approach_cat || null,
    wifi: params.wifi === 'true' || null,
    winglets_sharklets: params.winglets_sharklets === 'true' || null,
  };
}
