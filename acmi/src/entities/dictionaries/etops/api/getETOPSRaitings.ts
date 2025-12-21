import { apiClient } from '@/fetch-request';

export async function getETOPSRatings() {
  return await apiClient.get('/etops-ratings').then(({ data }) => data);
}
