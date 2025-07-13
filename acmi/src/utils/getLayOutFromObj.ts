import { AircraftLayout } from '@/types';

export const getLayoutFromObj = (layout: AircraftLayout): string => {
  return Object.entries(layout)
    .map(([key, value]) => {
      if (value && value > 0) {
        return `${value}${key.replace('_seats', '').toUpperCase()}`;
      }
      return '';
    })
    .filter(Boolean)
    .join(' + ');
};
