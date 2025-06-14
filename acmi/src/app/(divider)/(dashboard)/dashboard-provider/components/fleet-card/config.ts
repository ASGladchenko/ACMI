import { getSummarySeats } from '@/utils';

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
    economy: { seats: '12', pitch: '' },
    transformer: { seats: '', pitch: '' },
    premium: { seats: '', pitch: '' },
    business: { seats: '', pitch: '' },
    first: { seats: '', pitch: '' },
  },
};
