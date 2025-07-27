import * as Yup from 'yup';

import { getSummarySeats } from '@/utils';

import { FleetCardFormValues } from '../types';
import { NormalizedAircraftFleet } from '../../../types';

export const validationSchema = Yup.object().shape({
  msn: Yup.string().required('MSN is required'),
  reg: Yup.string().required('Registration is required'),
  mtow: Yup.string().required('MTOW is required'),
  ops: Yup.object().shape({
    value: Yup.string().required('Base is required'),
    text: Yup.string().required('Base is required'),
  }),
  thrust: Yup.string().required('Thrust is required'),
  date: Yup.date().nullable().required('Manufactured date is required'),
  isActive: Yup.boolean(),
  aircraftType: Yup.string().nullable(),
  etops: Yup.string().nullable().required('ETOPS is required'),
  ilsCategory: Yup.string().nullable().required('ILS Category is required'),
  noiseStage: Yup.string().nullable().required('Noise Stage is required'),
  act: Yup.boolean(),
  ife: Yup.boolean(),
  isps: Yup.boolean(),
  galleys: Yup.boolean(),
  sharklets: Yup.boolean(),
  layout: Yup.number().required('Layout is required').moreThan(0, 'Layout must be greater than 0'),
});

export const getInitialValues = (values: NormalizedAircraftFleet): FleetCardFormValues => {
  const layoutValues = createLayoutValues(values);

  const layout = getSummarySeats(layoutValues);

  return {
    id: Number(values.id),
    msn: values?.msn || '',
    reg: values?.reg || '',
    mtow: values?.mtow || '',
    ops: values?.ops || { value: '', text: '' },
    thrust: values?.thrust || '',
    date: values?.date || null,
    isActive: values?.isActive || false,
    aircraftType: values?.aircraftType || null,
    etops: values?.etops || null,
    ilsCategory: values?.ilsCategory || null,
    noiseStage: values?.noiseStage || null,
    act: values?.act || false,
    ife: values?.ife || false,
    isps: values?.isps || false,
    wifi: values?.wifi || false,
    galleys: values?.galleys || false,
    sharklets: values?.sharklets || false,
    layout,
    layoutValues,

    aircraft_id: values.aircraft_id,
    certifications_id: values.certifications_id,
    max_capacity: values.max_capacity,
    provider_id: values.provider_id,
    engines: values.engines,

    all_male_crew: values.all_male_crew,
    dangerous: values.dangerous,
    iosa: values.iosa,
  };
};

function createLayoutValues(values: NormalizedAircraftFleet) {
  const sectionTypes = ['economy', 'transformer', 'premium', 'business', 'first'] as const;

  return sectionTypes.reduce(
    (acc, sectionType) => {
      acc[sectionType] = {
        seats: values?.layoutValues?.[sectionType]?.seats || '',
        pitch: values?.layoutValues?.[sectionType]?.pitch || '',
      };
      return acc;
    },
    {} as Record<(typeof sectionTypes)[number], { seats: string; pitch: string }>
  );
}

export const t = {
  // isActive: false, Пока нет в сваггере

  act: false,
  msn: '3055',
  reg: 'LZ-FSB',
  mtow: '78000',
  ops: {
    value: 'AEP',
    text: 'AEP, Aeroparque Jorge Newbery',
  },
  thrust: 120,
  aircraftType: 305,
  etops: 4,
  ilsCategory: 4,
  noiseStage: 1,
  date: '2007-03-03T00:00:00Z',
  ife: false,
  isps: false,
  wifi: false,
  galleys: true,
  sharklets: false,

  layout: 180,
  layoutValues: {
    economy: {
      seats: '180',
      pitch: '',
    },
    transformer: {
      seats: '',
      pitch: '',
    },
    premium: {
      seats: '',
      pitch: '',
    },
    business: {
      seats: '',
      pitch: '',
    },
    first: {
      seats: '',
      pitch: '',
    },
  },
};
