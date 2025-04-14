import { plain } from '@/assets/webp';

export const mockAircrafts = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  model: 'Boeing 737-800',
  provider: `BestACMI-DummiesSupplier-${index + 1}`,
  msn: `${10000 + index}`,
  registration: `GG-WOW-${index + 1}`,
  dom: `01/${(index % 12) + 1}/201${index % 10}`, // Варьируем месяц и год
  layout: `${160 + (index % 20)}Y+${5 + (index % 10)}J`,
  bhPrice: `${2000 + index * 50}`,
  indicativePrice: `${180000 + index * 1000}`,
  imageUrl: plain,
}));
