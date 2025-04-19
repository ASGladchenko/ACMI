import { baseApiUrl } from '@/constants';

const defaultHeaders: Record<string, string> = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export async function apiFetch<T = unknown>(path: string, options?: RequestInit): Promise<T> {
  try {
    const response = await fetch(`${baseApiUrl}${path}`, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...(options?.headers as Record<string, string>),
      },
    });
    if (!response.ok) {
      const text = await response.text();
      throw new Error(`API error ${response.status}: ${text}`);
    }
    return response.json();
  } catch (err) {
    console.error(` ${path}:`, err);
    return Promise.reject(err);
  }
}
