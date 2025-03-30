import { enGB } from 'date-fns/locale';
import { getMonth, getYear, setMonth, format } from 'date-fns';

import { ArrowDown } from '@/assets/svg';
import { PickerSelect } from '@/components';

import { month } from '../../mock';

export interface CustomHeaderDatePickerProps {
  date: Date;
  monthDate: Date;
  customHeaderCount: number;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  changeYear: (year: number) => void;
  changeMonth: (month: number) => void;
}

const years = Array.from({ length: 11 }, (_, i) => ({
  text: String(getYear(new Date()) + i),
  value: getYear(new Date()) + i,
}));

export const CustomHeaderDatePiker = ({
  date,
  monthDate,
  changeYear,
  changeMonth,
  decreaseMonth,
  increaseMonth,
  customHeaderCount,
}: CustomHeaderDatePickerProps) => {
  const currentMonth = getMonth(monthDate);

  const currentYear = getYear(date);
  const monthNow = getMonth(new Date());

  const isPrevDisabled = currentMonth === monthNow && currentYear === getYear(new Date());
  const isNextDisabled = currentMonth === 11 && years.at(-1)!.value === currentYear;

  const monthName = format(setMonth(new Date(), currentMonth), 'MMMM', { locale: enGB });

  return (
    <div className="flex items-center justify-between bg-gray-200 px-4 py-2">
      {!Boolean(customHeaderCount) && (
        <button
          onClick={decreaseMonth}
          disabled={isPrevDisabled}
          className="mr-auto flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-blue-500 bg-blue-500 text-white duration-100 enabled:hover:bg-transparent enabled:hover:text-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ArrowDown className="h-6 w-6 rotate-90" />
        </button>
      )}

      {!Boolean(customHeaderCount) && (
        <PickerSelect
          options={month}
          className="mr-auto"
          selected={month.find((m) => m.value === currentMonth)!}
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
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-blue-500 bg-blue-500 text-white duration-100 enabled:hover:bg-transparent enabled:hover:text-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ArrowDown className="h-6 w-6 -rotate-90" />
        </button>
      )}
    </div>
  );
};
