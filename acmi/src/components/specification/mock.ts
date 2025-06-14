import {
  NormalizedOfferDataRFQ,
  NormalizedOfferDataAircraft,
  NormalizedOfferDataProvider,
} from '@/types';

export const mockProviderData: NormalizedOfferDataProvider = {
  name: 'SkyWings Aviation',
  iosa: 'IOSA-2023-4567',
  registration: 'UK AOC 123',
  certifications: 'EASA, FAA, ICAO Level 4',
};

export const mockRFQData: NormalizedOfferDataRFQ = {
  operator: 'German Wings',
  position: 'Fleet manager',
  airportFrom: 'Larnaca (LCA)',
  airportTo: 'Vienna (VIE), Berlin (Ber)',
  datesFrom: new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }),
  datesTo: new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }),
  minGBH: 30,
  fhFc: 2,
  estimatedBH: 40,
  positioning: 'provider call sign',
  perDiem: 'included',
  additionalRequest:
    'a sdfjh asdj asdjf asdjf lkasdj faksdjf asdf asdklf asdf asdklf asdjf kasdjf sdfj sadlfk sasdlfk asdfas flasjdf lkas jdkfj asdfj asldfj aslkdfklasdjfaskld',
};

export const mockOfferTermsData = {
  guaranteedBh: 30,
  overTimeBh: 2,
  estimatedPrice: 40,
  positioningPrice: 50,
  perDiem: 'included',
  totalPrice: 100,
  responseAdditionalRequest:
    'a sdfjh asdj asdjf asdjf lkasdj faksdjf asdf asdklf asdf asdklf asdjf kasdjf sdfj sadlfk sasdlfk asdfas flasjdf lkas jdkfj asdfj asldfj aslkdfklasdjfaskld',
};

export const mockAircraft: NormalizedOfferDataAircraft = {
  msn: '', // не указано в таблице
  reg: '', // не указано в таблице
  age: '10 years',
  pax: '186',
  act: 'yes',
  ils: 'Cat III',
  ife: 'yes',
  type: 'Boeing 737-800',
  mtow: '70,530 kg',
  isps: 'yes',
  wifi: 'yes',
  etops: '120',
  noise: 'Stage 4',
  layout: '174 Y + 8 J',
  thrust: '110 kn',
  wingtips: 'yes',
  manufactured: '', // не указано
  base_airport: 'European region',
  galley_ovens: 'yes',
};
