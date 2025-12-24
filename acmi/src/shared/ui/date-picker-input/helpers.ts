import { getYear } from 'date-fns';

interface GetVisibleMonthsProps {
  minYear: number;
  maxYear: number;
  minMonth: number;
  maxMonth: number;
  currentYear: number;
  months: { text: string; value: number }[];
}

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

export const getVisibleMonths = ({
  months,
  minYear,
  maxYear,
  minMonth,
  maxMonth,
  currentYear,
}: GetVisibleMonthsProps) => {
  let start = 0;
  let end = months.length;

  if (currentYear === minYear) {
    start = minMonth;
  }

  if (currentYear === maxYear) {
    end = maxMonth + 1;
  }

  return months.slice(start, end);
};
