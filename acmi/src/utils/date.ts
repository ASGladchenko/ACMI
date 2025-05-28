export const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

export const fixUTCDateForDatePicker = (utcDate: Date | null): Date | null => {
  if (!utcDate) return null;
  return new Date(utcDate.getUTCFullYear(), utcDate.getUTCMonth(), utcDate.getUTCDate());
};

export const toUTCDate = (localDate: Date | null): Date | null => {
  if (!localDate) return null;
  return new Date(Date.UTC(localDate.getFullYear(), localDate.getMonth(), localDate.getDate()));
};
