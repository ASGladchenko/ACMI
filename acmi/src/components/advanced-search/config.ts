import { ISelectOption } from '../selects';

export const options = [
  { text: 'test', value: 'test' },
  { text: 'test2', value: 'test2' },
  { text: 'test3', value: 'test3' },
  { text: 'test4', value: 'test4' },
  { text: 'test5', value: 'test5' },
  { text: 'test6', value: 'test6' },
  { text: 'test7', value: 'test7' },
  { text: 'test8', value: 'test8' },
  { text: 'test9', value: 'test9' },
];

export const initialCheckBoxes = {
  ACT: false,
  IFE: false,
  All: false,
  IOSA: false,
  WiFi: false,
  ISPS: false,
  Galley: false,
  Winglets: false,
  Dangerous: false,
};

export const initialSelects = {
  aircraftTypes: null as ISelectOption | null,
  certifications: null as ISelectOption | null,
  etops: null as ISelectOption | null,
  maxAge: null as ISelectOption | null,
  maxNoiseLevel: null as ISelectOption | null,
  minApproachCat: null as ISelectOption | null,
};

export const airports = [
  { text: 'LCA Larnaca, Cyprus', value: 'LCA' },
  { text: 'LAR Laramie, USA', value: 'LAR' },
  { text: 'LAS Las-Vegas, USA', value: 'LAS' },
  { text: 'LAX Los Angeles, USA', value: 'LAX' },
  { text: 'LCY London City, UK', value: 'LCY' },
  { text: 'LED Saint Petersburg, Russia', value: 'LED' },
  { text: 'LIS Lisbon, Portugal', value: 'LIS' },
  { text: 'LIM Lima, Peru', value: 'LIM' },
  { text: 'LHE Lahore, Pakistan', value: 'LHE' },
  { text: 'LYS Lyon, France', value: 'LYS' },
];
