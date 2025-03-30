import { mockAircrafts } from './mock';

export type Aircraft = (typeof mockAircrafts)[0];

export const fetchMockAircrafts = async (start: number, count: number): Promise<Aircraft[]> => {
  // Имитируем задержку как на реальном сервере
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Имитируем пагинацию
  const paginatedData = mockAircrafts.slice(start, start + count);

  return Promise.resolve(paginatedData);
};
