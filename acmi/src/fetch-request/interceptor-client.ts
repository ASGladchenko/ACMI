import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

import { baseApiUrl } from '@/constants';

const apiClient = axios.create({
  baseURL: baseApiUrl,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      window.location.replace('/auth');
    }

    return Promise.reject(error);
  }
);

export { apiClient };
