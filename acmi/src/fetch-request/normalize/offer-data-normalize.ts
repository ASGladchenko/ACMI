import { formatDate } from '@/utils';

export interface OfferData {
  type: string;
  manufactured: string;
  msn: string;
  age: number;
  reg: string;
  pax: number;
  layout: string;
  base_airport: string;
  mtow: number;
  thrust: number;
  etops: number;
  act: boolean;
  noise: string;
  ils: string;
  galley_ovens: boolean;
  ife: boolean;
  isps: boolean;
  wifi: boolean;
  wingtips: boolean;
  provider_name: string;
  provider_aoc: string;
  provider_callsign: string;
  provider_certifications: string;
  provider_additional_data: boolean;
  date_from: string;
  date_to: string;
  period: number;
  bh_price: number;
  min_guaranteed_bh: number;
  indicative_price: number;
  offered_positioning: string;
  positioning_price: number;
  per_diem: string;
  total_indicative_price: number;
}

export function normalizeOfferData(data: OfferData) {
  return {
    aircraft: {
      type: data.type,
      msn: data.msn,
      reg: data.reg,
      manufactured: formatDate(data.manufactured),
      age: `${data.age} year(s)`,
      pax: data.pax.toString(),
      layout: data.layout,
      base_airport: data.base_airport,
      mtow: `${data.mtow.toLocaleString()} kg`,
      thrust: `${data.thrust} kN`,
      etops: data.etops.toString(),
      act: data.act ? 'yes' : 'no',
      noise: data.noise,
      ils: data.ils,
      galley_ovens: data.galley_ovens ? 'yes' : 'no',
      ife: data.ife ? 'yes' : 'no',
      isps: data.isps ? 'yes' : 'no',
      wifi: data.wifi ? 'yes' : 'no',
      wingtips: data.wingtips ? 'yes' : 'no',
    },
    operator: {
      name: data.provider_name,
      aoc: data.provider_aoc,
      callsign: data.provider_callsign,
      certifications: data.provider_certifications,
      additionalData: data.provider_additional_data
        ? 'all male crew upon request '
        : 'not available',
    },
    commercial: {
      dates: `${formatDate(data.date_from)} - ${formatDate(data.date_to)}`,
      period: `${data.period} day(s)`,
      bhPrice: `$${data.bh_price.toLocaleString()}`,
      minGBH: data.min_guaranteed_bh.toLocaleString(),
      indicativePrice: `$${data.indicative_price.toLocaleString()}`,
      offeredPositioning: data.offered_positioning,
      positioningPrice: `$${data.positioning_price.toLocaleString()}`,
      perDiem: data.per_diem,
      totalIndicativePrice: `$${data.total_indicative_price.toLocaleString()}`,
    },
  };
}
