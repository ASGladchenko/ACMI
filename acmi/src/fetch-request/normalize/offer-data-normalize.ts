import { formatDate } from '@/utils';

export interface OfferData {
  msn: string;
  age: number;
  reg: string;
  pax: number;
  ils: string;
  type: string;
  mtow: number;
  act: boolean;
  ife: boolean;
  etops: number;
  noise: string;
  isps: boolean;
  wifi: boolean;
  layout: string;
  thrust: number;
  period: number;
  date_to: string;
  bh_price: number;
  per_diem: string;
  wingtips: boolean;
  date_from: string;
  manufactured: string;
  base_airport: string;
  provider_aoc: string;
  galley_ovens: boolean;
  provider_name: string;
  indicative_price: number;
  provider_callsign: string;
  min_guaranteed_bh: number;
  positioning_price: number;
  offered_positioning: string;
  total_indicative_price: number;
  provider_certifications: string;
  provider_additional_data: boolean;
}

export function normalizeOfferData(data: OfferData) {
  return {
    aircraft: {
      type: data.type,
      msn: data.msn,
      reg: data.reg,
      manufactured: formatDate(data.manufactured),
      age: `${data.age} year(s)`,
      pax: data.pax ? data.pax.toString() : 'N/A',
      layout: data.layout,
      base_airport: data.base_airport,
      mtow: data.mtow ? `${data.mtow.toLocaleString()} kg` : 'N/A',
      thrust: data.thrust ? `${data.thrust} kN` : 'N/A',
      etops: data.etops ? data.etops.toString() : 'N/A',
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
      bhPrice: data.bh_price ? `$${data.bh_price.toLocaleString()}` : 'N/A',
      minGBH: data.min_guaranteed_bh
        ? (data.min_guaranteed_bh * data.period).toLocaleString()
        : 'N/A',
      indicativePrice: data.indicative_price ? `$${data.indicative_price.toLocaleString()}` : 'N/A',
      offeredPositioning: data.offered_positioning,
      positioningPrice: data.positioning_price
        ? `$${data.positioning_price.toLocaleString()}`
        : 'N/A',
      perDiem: data.per_diem,
      totalIndicativePrice: data.total_indicative_price
        ? `$${data.total_indicative_price.toLocaleString()}`
        : 'N/A',
    },
  };
}
