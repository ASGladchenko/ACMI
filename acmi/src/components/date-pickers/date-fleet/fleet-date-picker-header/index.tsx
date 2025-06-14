import { getYear, getMonth } from 'date-fns';

import { ArrowDown } from '@/assets/svg';
import { PickerSelect } from '@/components/selects';

import { months } from '../../mock';
import { getVisibleMonths, getYearOptionsFromRange } from '../../helpers';

interface FleetDatePickerHeaderProps {
  date: Date;
  minDate: Date;
  maxDate: Date;
  monthDate: Date;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  changeYear: (year: number) => void;
  changeMonth: (month: number) => void;
}

export const FleetDatePickerHeader = ({
  date,
  minDate,
  maxDate,
  monthDate,
  changeYear,
  changeMonth,
  decreaseMonth,
  increaseMonth,
}: FleetDatePickerHeaderProps) => {
  const minMonth = getMonth(minDate);
  const maxMonth = getMonth(maxDate);

  const minYear = getYear(minDate);
  const maxYear = getYear(maxDate);

  const currentYear = getYear(date);
  const currentMonth = getMonth(monthDate);

  const years = getYearOptionsFromRange(minDate, maxDate);

  const isPrevDisabled = currentMonth === minMonth && currentYear === minYear;

  const isNextDisabled = currentMonth === maxMonth && currentYear === maxYear;

  return (
    <div className="flex items-center justify-between bg-gray-200 px-4 py-2">
      <button
        onClick={decreaseMonth}
        disabled={isPrevDisabled}
        className="mr-auto flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-blue-500 bg-blue-500 text-white duration-100 enabled:hover:bg-transparent enabled:hover:text-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <ArrowDown className="h-6 w-6 rotate-90" />
      </button>

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

      <PickerSelect
        options={years}
        selected={years.find((m) => m.value === currentYear)!}
        onChange={(option) => changeYear(option!.value as number)}
      />

      <button
        onClick={increaseMonth}
        disabled={isNextDisabled}
        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-blue-500 bg-blue-500 text-white duration-100 enabled:hover:bg-transparent enabled:hover:text-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <ArrowDown className="h-6 w-6 -rotate-90" />
      </button>
    </div>
  );
};
