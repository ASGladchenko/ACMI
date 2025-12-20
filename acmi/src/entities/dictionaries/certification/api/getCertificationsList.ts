import { apiClient } from '@/fetch-request';

export async function getCertificationList() {
  return await apiClient.get('/certifications').then(({ data }) => data);
}
