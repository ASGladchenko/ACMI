import { format, parseISO } from 'date-fns';

export const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

export const formatDateRange = (startDate: Date | null, endDate: Date | null): string => {
  const start = startDate ? format(startDate, 'dd/MM/yyyy') : '';
  const end = endDate ? format(endDate, 'dd/MM/yyyy') : '';

  if (!start && !end) return '';

  return `${start} - ${end}`;
};

export const fixUTCDateForDatePicker = (utcDate: Date | null): Date | null => {
  if (!utcDate) return null;

  const dateObj = typeof utcDate === 'string' ? new Date(utcDate) : utcDate;

  return new Date(dateObj.getUTCFullYear(), dateObj.getUTCMonth(), dateObj.getUTCDate());
};

export const toUTCDate = (localDate: Date | null): Date | null => {
  if (!localDate) return null;

  const dateObj = typeof localDate === 'string' ? new Date(localDate) : localDate;

  return new Date(Date.UTC(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate()));
};

export const toISO = (date: Date | null): string | null => {
  if (!date) return null;
  return format(date, 'yyyy-MM-dd');
};

export const fromISO = (value: string | null | undefined): Date | null => {
  if (!value) return null;
  try {
    return parseISO(value);
  } catch {
    return null;
  }
};
