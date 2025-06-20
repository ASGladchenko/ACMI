import { LayOutItem } from '@/types';

export const getSummarySeats = (layout: Record<string, LayOutItem>) => {
  return Object.values(layout).reduce((acc, item) => acc + Number(item.seats), 0);
};
