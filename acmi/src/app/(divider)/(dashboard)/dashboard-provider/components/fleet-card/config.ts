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
  isActive: Yup.boolean()
    .oneOf([true], 'Aircraft must be active to be saved')
    .required('Active status is required'),
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
  const layoutValues = {
    economy: {
      seats: values?.layoutValues?.economy?.seats || '',
      pitch: values?.layoutValues?.economy?.pitch || '',
    },
    transformer: {
      seats: values?.layoutValues?.transformer?.seats || '',
      pitch: values?.layoutValues?.transformer?.pitch || '',
    },
    premium: {
      seats: values?.layoutValues?.premium?.seats || '',
      pitch: values?.layoutValues?.premium?.pitch || '',
    },
    business: {
      seats: values?.layoutValues?.business?.seats || '',
      pitch: values?.layoutValues?.business?.pitch || '',
    },
    first: {
      seats: values?.layoutValues?.first?.seats || '',
      pitch: values?.layoutValues?.first?.pitch || '',
    },
  };

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
    galleys: values?.galleys || false,
    sharklets: values?.sharklets || false,
    layout,
    layoutValues,
  };
};

export const initialValuesMock = {
  msn: '',
  reg: '',
  mtow: '',
  ops: { value: '', text: '' },
  thrust: '',
  date: null,
  isActive: false,
  aircraftType: null,
  etops: null,
  ilsCategory: null,
  noiseStage: null,
  act: true,
  ife: true,
  isps: false,
  galleys: false,
  sharklets: false,
  layout: 12,
  layoutValues: {
    economy: { seats: '', pitch: '' },
    transformer: { seats: '', pitch: '' },
    premium: { seats: '', pitch: '' },
    business: { seats: '', pitch: '' },
    first: { seats: '', pitch: '' },
  },
};
