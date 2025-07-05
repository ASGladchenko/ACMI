import { AxiosError } from 'axios';

export const isAbortError = (error: unknown): boolean => {
  return error instanceof Error && (error.name === 'CanceledError' || error.name === 'AbortError');
};

export const getErrorMessage = (
  error: unknown,
  fallback = 'Error loading, connect with us'
): string => {
  if (error instanceof AxiosError && error.response?.data?.message) {
    return error.response.data.message;
  }

  if (error instanceof AxiosError && error.response?.data) {
    return error.response.data;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return fallback;
};
