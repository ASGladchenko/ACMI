import { RFQRequest } from '@/types/rfq';
import { getLayoutFromObj } from '@/utils';

const baseImgUrl = process.env.NEXT_PUBLIC_IMG_URL;

export const normalizeRFQDashboard = (rfq: RFQRequest) => {
  const { aircraft, provider, rfq_data, requester_position, customer, rfq_terms } = rfq;

  return {
    aircraftDetails: {
      pax: aircraft.pax,
      act: aircraft.act,
      ife: aircraft.ife,
      age: aircraft.age,
      mtow: aircraft.mtow,
      isps: aircraft.isps,
      wifi: aircraft.wifi,
      type: aircraft.type,
      layout: getLayoutFromObj(aircraft.layout),
      etops: aircraft.etops_id,
      noise: aircraft.noise_id,
      engines: aircraft.engines,
      region: aircraft.base,
      galleryOvens: aircraft.galley_ovens,
      wingtips: aircraft.winglets_sharklets,
      thrust: aircraft.thrust,
      approachCatId: aircraft.autoland_id,
      imageUrl: `${baseImgUrl}${aircraft.type}.svg`,
    },
    providerDetails: {
      name: provider?.provider_short_name,
      iosa: provider.iosa,
      registration: provider.aoc,
      certifications: provider.certifications,
    },
    rfqData: {
      fhFc: rfq_data.fh_fc ? rfq_data.fh_fc.toString() : 'Error',
      minGBH: rfq_data.min_gbh ? rfq_data.min_gbh.toString() : 'Error',
      operator: customer,
      position: requester_position,
      airportFrom: rfq_data.ops_base,
      airportTo: rfq_data.outstations,
      estimatedBH: rfq_data?.estimated_bh ? rfq_data.estimated_bh.toString() : 'Error',
      additionalRequest: rfq_data.additional_requests,
      positioning: { text: rfq_data.positioning, value: 998 },
      perDiem: { text: rfq_data.per_diem, value: 999 },
      dates: {
        from: new Date(rfq_data.date_from),
        to: new Date(rfq_data.date_to),
      },
    },
    rfqTerms: {
      totalPrice: 0,
      estimatedPrice: 0,
      guaranteedBh: rfq_terms?.gbh_price,
      perDiem: rfq_terms?.per_diem_price,
      overTimeBh: rfq_terms.overtime_bh_price,
      positioningPrice: rfq_terms.positioning_price,
      responseAdditionalRequest: rfq_terms.additional_requests_answer,
    },
  };
};
