import { OfferData } from '@/types';
import { formatDate } from '@/utils';

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
  };
}
