import { apiClient } from '@/fetch-request';

export async function getAircraftTypes() {
  const res = await apiClient.get('/aircraft-types');
  return res.data;
}
