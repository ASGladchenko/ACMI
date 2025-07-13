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

  const dateObj = typeof utcDate === 'string' ? new Date(utcDate) : utcDate;

  return new Date(dateObj.getUTCFullYear(), dateObj.getUTCMonth(), dateObj.getUTCDate());
};

export const toUTCDate = (localDate: Date | null): Date | null => {
  if (!localDate) return null;

  const dateObj = typeof localDate === 'string' ? new Date(localDate) : localDate;

  return new Date(Date.UTC(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate()));
};
