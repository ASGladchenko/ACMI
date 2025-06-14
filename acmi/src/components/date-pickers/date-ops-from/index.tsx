'use client';

import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { RemoveScroll } from 'react-remove-scroll';

import { cn, toUTCDate, fixUTCDateForDatePicker } from '@/utils';

import { CustomInput } from './custom-input';
import { CustomHeaderDatePiker } from './custom-header';

import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

export interface DateOpsFromProps {
  label?: string;
  minDate?: Date;
  maxDate?: Date;
  portalId?: string;
  className?: string;
  initialEnd: Date | null;
  initialStart: Date | null;
  onChange: (dates: [Date | null, Date | null]) => void;
}

const initialMaxDate = new Date();
initialMaxDate.setFullYear(initialMaxDate.getFullYear() + 10);

export const DateOpsFrom = ({
  portalId,
  onChange,
  className,
  label = 'Date',
  initialEnd = null,
  initialStart = null,
  minDate = new Date(),
  maxDate = initialMaxDate,
}: DateOpsFromProps) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  const onHandleChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const onCloseCalendar = () => {
    setIsOpen(false);

    onChange([toUTCDate(startDate), toUTCDate(endDate || startDate)]);
  };

  const onClear = () => {
    onChange([null, null]);
  };

  useEffect(() => {
    setStartDate(fixUTCDateForDatePicker(initialStart));
    setEndDate(fixUTCDateForDatePicker(initialEnd));
  }, [initialStart, initialEnd]);

  return (
    <div className={cn('date-search w-full [&>div]:w-full', className)}>
      <RemoveScroll enabled={isOpen}>
        <DatePicker
          withPortal
          selectsRange
          monthsShown={2}
          endDate={endDate}
          minDate={minDate}
          maxDate={maxDate}
          portalId={portalId}
          startDate={startDate}
          calendarStartDay={0}
          dateFormat="dd/MM/yyyy"
          onChange={onHandleChange}
          onCalendarClose={onCloseCalendar}
          onCalendarOpen={() => setIsOpen(true)}
          renderCustomHeader={({ ...props }) => (
            <CustomHeaderDatePiker minDate={minDate} maxDate={maxDate} {...props} />
          )}
          customInput={<CustomInput label={label} placeholder="from - to " onClear={onClear} />}
        />
      </RemoveScroll>
    </div>
  );
};
