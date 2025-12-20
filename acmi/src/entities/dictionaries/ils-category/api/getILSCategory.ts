import { apiClient } from '@/fetch-request';

export async function getILSCategory() {
  return await apiClient.get('/ils-categories').then(({ data }) => data);
}
