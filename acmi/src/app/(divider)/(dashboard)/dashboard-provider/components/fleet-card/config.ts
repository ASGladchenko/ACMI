import * as Yup from 'yup';

import { getSummarySeats } from '@/utils';

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

export const getInitialValues = (values: typeof initialValuesMock) => {
  const layoutValues = createLayoutValues(values);

  const layout = getSummarySeats(layoutValues);

  return {
    msn: values?.msn || '',
    reg: values?.reg || '',
    mtow: values?.mtow || '',
    ops: { value: values?.ops?.value || '', text: values?.ops?.text || '' },
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
  };
};

export const initialValuesMock = {
  msn: '12345',
  reg: 'A-TEST',
  mtow: '75000',
  ops: { value: 'LCA', text: 'LCA, Larnaca' },
  thrust: '24500',
  date: new Date('2020-01-15'),
  isActive: false,
  aircraftType: 'A320',
  etops: 2,
  ilsCategory: 4,
  noiseStage: 3,
  act: true,
  ife: true,
  wifi: false,
  isps: false,
  galleys: false,
  sharklets: false,
  layout: 150,
  layoutValues: {
    economy: { seats: '144', pitch: '30' },
    transformer: { seats: '6', pitch: '32' },
    premium: { seats: '', pitch: '' },
    business: { seats: '', pitch: '' },
    first: { seats: '', pitch: '' },
  },
};

function createLayoutValues(values: typeof initialValuesMock) {
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
