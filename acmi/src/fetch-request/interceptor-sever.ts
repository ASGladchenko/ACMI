'use server';

import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { cookies } from 'next/headers';

import { baseApiUrl } from '@/constants';

export const apiServer = axios.create({
  baseURL: baseApiUrl,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

apiServer.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const cookieStore = await cookies();
    const token = cookieStore.get('session_id')?.value;

    config.headers = config.headers ?? {};
    (config.headers as Record<string, string>).Cookie = `session_id=${token}`;

    return config;
  },
  (error) => Promise.reject(error)
);

apiServer.interceptors.response.use(
  (response) => response,
  async (
    error: AxiosError & {
      config?: InternalAxiosRequestConfig & { _retry?: boolean };
    }
  ) => {
    if (error.response?.status === 401) {
      return Promise.reject(new Error('Unauthorized'));
    }
    return Promise.reject(error);
  }
);
