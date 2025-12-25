import { toast, ToastOptions, ToastContentProps } from 'react-toastify';

import { appendClassIcon, cn } from '@/shared/utils';
import { CheckField, ClearField, InfoFilled, WarningField } from '@/shared/assets';

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
    toast.success(CustomNotification, {
      ...getOptions(options),
      icon: false,
      className: 'bg-success-light',
      data: {
        title: message,
        icon: <CheckField className="text-success-normal" />,
      },
    });
  },
  warn: (message: string, options?: ToastOptions) => {
    toast.warn(CustomNotification, {
      ...getOptions(options),
      icon: false,
      className: 'bg-attention-light',
      data: {
        title: message,
        icon: <WarningField className="text-attention-normal" />,
      },
    });
  },
  error: (message: string, options?: ToastOptions) => {
    toast.error(CustomNotification, {
      ...getOptions(options),
      icon: false,
      className: 'bg-error-light',
      data: {
        title: message,
        icon: <ClearField className="text-error-normal" />,
      },
    });
  },
  info: (message: string, options?: ToastOptions) => {
    toast.info(CustomNotification, {
      ...getOptions(options),
      icon: false,
      className: 'bg-accent-interactions-lighter',
      data: {
        title: message,
        icon: <InfoFilled className="text-accent-normal" />,
      },
    });
  },
});

type ToastData = {
  title: string;
  icon: React.ReactElement;
};

function CustomNotification({ data, ...rest }: ToastContentProps<ToastData>) {
  if (!data) return null;

  return (
    <div className="flex h-full w-full items-center gap-4">
      <div
        className={cn(
          'flex h-10 w-10 shrink-0 items-center justify-center rounded-full',
          {
            error: 'bg-error-normal/15',
            success: 'bg-success-normal/15',
            info: 'bg-accent-normal/15',
            warning: 'bg-attention-normal/15',
            default: 'bg-transparent',
          }[rest.toastProps?.type || 'default']
        )}
      >
        {appendClassIcon(
          data.icon,
          cn('w-5 h-5', rest.toastProps?.type === 'warning' && 'w-6 h-6')
        )}
      </div>

      <h3 className="text-text-primary text-[15px] leading-[1.2]">{data.title}</h3>
    </div>
  );
}

export const showMessage = messageShow();
