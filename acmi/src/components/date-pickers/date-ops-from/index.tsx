'use client';

import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { RemoveScroll } from 'react-remove-scroll';

import { cn } from '@/utils';

import { CustomInput } from './custom-input';
import { CustomHeaderDatePiker } from './custom-header';

import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

export interface DateOpsFromProps {
  className?: string;
  portalId?: string;
  initialEnd: Date | null;
  initialStart: Date | null;
  onChange: (dates: [Date | null, Date | null]) => void;
}

export const DateOpsFrom = ({
  portalId,
  onChange,
  className,
  initialEnd = null,
  initialStart = null,
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

    onChange([startDate, endDate || startDate]);
  };

  const onClear = () => {
    onChange([null, null]);
  };

  useEffect(() => {
    setStartDate(initialStart);
    setEndDate(initialEnd);
  }, [initialStart, initialEnd]);

  return (
    <div className={cn('date-search w-full [&>div]:w-full', className)}>
      <RemoveScroll enabled={isOpen}>
        <DatePicker
          withPortal
          selectsRange
          monthsShown={2}
          endDate={endDate}
          portalId={portalId}
          minDate={new Date()}
          calendarStartDay={1}
          startDate={startDate}
          dateFormat="dd/MM/yyyy"
          onChange={onHandleChange}
          onCalendarClose={onCloseCalendar}
          onCalendarOpen={() => setIsOpen(true)}
          customInput={<CustomInput label="Date" placeholder="from - to " onClear={onClear} />}
          renderCustomHeader={({ ...props }) => <CustomHeaderDatePiker {...props} />}
        />
      </RemoveScroll>
    </div>
  );
};
