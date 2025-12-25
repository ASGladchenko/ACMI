type NewDate = [Date | null, Date | null];

const parseTimestampToDate = (timestamp: string | undefined): Date | null => {
  return timestamp ? new Date(Number(timestamp)) : null;
};

export const getPreparedDate = (date: NewDate) => {
  const [newStart, newEnd] = date;

  if (!newStart) {
    return null;
  }

  if (!newEnd) {
    return `${newStart.getTime()}-${newStart.getTime()}`;
  }

  return `${newStart.getTime()}-${newEnd.getTime()}`;
};

export const normalizeInitialDates = (date: string) => {
  const [start, end] = date.split('-');

  return {
    end: parseTimestampToDate(end),
    start: parseTimestampToDate(start),
  };
};
