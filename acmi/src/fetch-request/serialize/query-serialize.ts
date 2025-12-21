import { queryParams } from '@/constants';
// For date range serialization
// const toString = (date: string | null) => (date ? date.toString() : null);

export function serializeQuery(params: Record<string, string>) {
  const dateFromISO = params.date_from
    ? new Date(Number(params.date_from)).toISOString().split('T')[0]
    : null;

  const dateToISO = params.date_to
    ? new Date(Number(params.date_to)).toISOString().split('T')[0]
    : null;
  // TODO update date range serialization
  // const [start, end] = params.date?.split('-') || [];

  // const dates = {
  //   a: toString(start),
  //   b: toString(end),
  // };

  // console.log({ dates });

  const airportCode = params[queryParams.opsFrom]
    ? params[queryParams.opsFrom].split(',')[0]
    : null;

  const multiSelectParams = (param: string) => {
    const options = param ? param.split(',').map((id) => Number(id)) : null;

    return options;
  };

  const numberNullable = (value: string) => (value && Number(value)) || null;

  return {
    act: params.act === 'true' || null,
    aircraft_body: params.is_wide === 'true' ? true : false,
    aircraft_types_id: multiSelectParams(params.aircraft_types),
    airport_code: airportCode,
    all_male_crew: params.all_male_crew === 'true' ? true : null,
    certifications_id: multiSelectParams(params.certifications),
    dangerous_goods_certification: params.dangerous === 'true' || null,
    date_from: dateFromISO,
    date_to: dateToISO,
    etops_id: numberNullable(params.etops),
    galley_ovens: params.galley === 'true' || null,
    ife: params.ife === 'true' || params.ife === 'false' || null,
    iosa: params.iosa === 'true' || null,
    isps: params.isps === 'true' || null,
    layout_business: (params.business && Number(params.business)) || null,
    layout_economy: (params.economy && Number(params.economy)) || null,
    layout_first: (params.first && Number(params.first)) || null,
    layout_premium_economy: (params.premium_economy && Number(params.premium_economy)) || null,
    max_age_years: (params.max_age && Number(params.max_age)) || null,
    max_noise_level_id: numberNullable(params.max_noise_level),
    min_pax: (params.min_pax && Number(params.min_pax)) || null,
    min_approach_cat_id: numberNullable(params.min_approach_cat),
    wifi: params.wifi === 'true' || null,
    winglets_sharklets: params.winglets_sharklets === 'true' || null,
  };
}
