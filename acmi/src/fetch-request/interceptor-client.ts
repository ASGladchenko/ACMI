// src/fetch-request/interceptor.client.ts

import Cookies from 'js-cookie';
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

import { baseApiUrl } from '@/constants';

const apiClient = axios.create({
  baseURL: baseApiUrl,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = Cookies.get('token');

    if (!token) {
      Cookies.remove('token');
      Cookies.remove('refreshToken');
      window.location.replace('/auth');
      throw new Error('NO_TOKEN');
    }

    config.headers = config.headers ?? {};
    (config.headers as Record<string, string>).Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  async (
    error: AxiosError & {
      config?: InternalAxiosRequestConfig & { _retry?: boolean };
    }
  ) => {
    const original = error.config;

    if (error.response?.status === 401 && original && !original._retry) {
      original._retry = true;

      try {
        const refreshToken = Cookies.get('refreshToken');

        const { data } = await axios.post(
          `${baseApiUrl}/auth/refresh`,
          {},
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
              'Content-Type': 'application/json',
            },
          }
        );

        Cookies.set('token', data.token);
        Cookies.set('refreshToken', data.refreshToken);

        original.headers = original.headers ?? {};
        (original.headers as Record<string, string>).Authorization = `Bearer ${data.token}`;

        return apiClient(original);
      } catch {
        Cookies.remove('token');
        Cookies.remove('refreshToken');
        window.location.replace('/auth');
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export { apiClient };
