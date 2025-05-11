'use server';

import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
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
    const token = cookieStore.get('token')?.value;

    if (!token) {
      // если нет токена — редиректим сразу
      throw redirect('/auth');
    }

    config.headers = config.headers ?? {};
    (config.headers as Record<string, string>).Authorization = `Bearer ${token}`;
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
    const original = error.config;
    const cookieStore = await cookies();

    if (error.response?.status === 401 && original && !original._retry) {
      original._retry = true;

      // попытаемся взять refreshToken
      const refreshToken = cookieStore.get('refreshToken')?.value;
      if (!refreshToken) {
        // очистка мусорных кук
        cookieStore.delete('token');
        cookieStore.delete('refreshToken');
        // редирект на страницу авторизации
        throw redirect('/auth');
      }

      try {
        // запрашиваем новый токен
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

        const newAccessToken = data.token;
        const newRefreshToken = data.refreshToken;

        // обновляем куки
        cookieStore.set('token', newAccessToken, { path: '/', sameSite: 'strict' });
        cookieStore.set('refreshToken', newRefreshToken, { path: '/', sameSite: 'strict' });

        // повторяем оригинальный запрос с новым токеном
        original.headers = original.headers ?? {};
        (original.headers as Record<string, string>).Authorization = `Bearer ${newAccessToken}`;
        return apiServer(original);
      } catch {
        // при неудаче очистим токены и уйдём на логин
        cookieStore.delete('token');
        cookieStore.delete('refreshToken');
        throw redirect('/auth');
      }
    }

    return Promise.reject(error);
  }
);
