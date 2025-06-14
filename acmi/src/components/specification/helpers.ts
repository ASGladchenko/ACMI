export const getDaysBetweenDates = (date1: Date, date2: Date): number => {
  if (!date1 || !date2) return 0;

  const msPerDay = 1000 * 60 * 60 * 24;

  const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

  return Math.abs(Math.floor((utc2 - utc1) / msPerDay)) + 1;
};
