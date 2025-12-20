import { apiClient } from '@/fetch-request';

export async function getNoiseList() {
  return await apiClient.get('/noise-stages').then(({ data }) => data);
}
