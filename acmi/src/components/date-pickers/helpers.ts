import { getYear } from 'date-fns';

export const getYearOptionsFromRange = (
  minDate: Date,
  maxDate: Date,
  fromMin?: boolean
): { text: string; value: number }[] => {
  const startYear = getYear(minDate);
  const endYear = getYear(maxDate);

  return Array.from({ length: endYear - startYear + 1 }, (_, i) => {
    const year = fromMin ? startYear + i : endYear - i;
    return {
      text: String(year),
      value: year,
    };
  });
};
