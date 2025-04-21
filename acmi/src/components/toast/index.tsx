import { toast, ToastOptions } from 'react-toastify';

import { toastConfig } from './config';

const getOptions = (options?: ToastOptions) =>
  options
    ? {
        ...toastConfig,
        ...options,
      }
    : toastConfig;

const messageShow = () => ({
  success: (message: string, options?: ToastOptions) => {
    toast.success(message, {
      ...getOptions(options),
    });
  },
  warn: (message: string, options?: ToastOptions) => {
    toast.warn(message, {
      ...getOptions(options),
    });
  },
  error: (message: string, options?: ToastOptions) => {
    toast.error(message, {
      ...getOptions(options),
    });
  },
  info: (message: string, options?: ToastOptions) => {
    toast.info(message, {
      ...getOptions(options),
    });
  },
});

export const showMessage = messageShow();
