import { enGB } from 'date-fns/locale';
import { format, getYear, getMonth, setMonth } from 'date-fns';

import { ArrowDown } from '@/assets/svg';
import { PickerSelect } from '@/components';

import { months } from '../mock';
import { getVisibleMonths, getYearOptionsFromRange } from '../helpers';

export interface CustomHeaderDatePickerProps {
  date: Date;
  minDate: Date;
  maxDate: Date;
  monthDate: Date;
  customHeaderCount: number;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  changeYear: (year: number) => void;
  changeMonth: (month: number) => void;
}

export const CustomHeaderDatePiker = ({
  date,
  monthDate,
  minDate,
  maxDate,
  changeYear,
  changeMonth,
  decreaseMonth,
  increaseMonth,
  customHeaderCount,
}: CustomHeaderDatePickerProps) => {
  const minMonth = getMonth(minDate);
  const maxMonth = getMonth(maxDate);

  const minYear = getYear(minDate);
  const maxYear = getYear(maxDate);

  const currentYear = getYear(date);
  const currentMonth = getMonth(monthDate);

  const years = getYearOptionsFromRange(minDate, maxDate, true);

  const isPrevDisabled = currentMonth <= minMonth && currentYear <= minYear;
  const isNextDisabled = currentMonth >= maxMonth && currentYear >= maxYear;

  const monthName = format(setMonth(new Date(), currentMonth), 'MMMM', { locale: enGB });

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gray-200">
      {!Boolean(customHeaderCount) && (
        <button
          onClick={decreaseMonth}
          disabled={isPrevDisabled}
          className="flex items-center justify-center w-8 h-8 mr-auto text-white duration-100 bg-blue-500 border border-blue-500 rounded cursor-pointer enabled:hover:bg-transparent enabled:hover:text-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ArrowDown className="w-6 h-6 rotate-90" />
        </button>
      )}

      {!Boolean(customHeaderCount) && (
        <PickerSelect
          options={getVisibleMonths({
            months,
            minYear,
            maxYear,
            minMonth,
            maxMonth,
            currentYear,
          })}
          className="mr-auto"
          selected={months.find((m) => m.value === currentMonth)!}
          onChange={(option) => changeMonth(option!.value as number)}
        />
      )}

      {Boolean(customHeaderCount) && (
        <PickerSelect
          options={years}
          selected={years.find((m) => m.value === currentYear)!}
          onChange={(option) => changeYear(option!.value as number)}
        />
      )}

      {Boolean(customHeaderCount) && <span className="text-[16px]">{monthName}</span>}

      {Boolean(customHeaderCount) && (
        <button
          onClick={increaseMonth}
          disabled={isNextDisabled}
          className="flex items-center justify-center w-8 h-8 text-white duration-100 bg-blue-500 border border-blue-500 rounded cursor-pointer enabled:hover:bg-transparent enabled:hover:text-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ArrowDown className="w-6 h-6 -rotate-90" />
        </button>
      )}
    </div>
  );
};
