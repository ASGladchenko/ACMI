'use client';

import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { RemoveScroll } from 'react-remove-scroll';

import { Modal } from '@/components/modal';
import { cn, toUTCDate, fixUTCDateForDatePicker } from '@/utils';

import { CustomInput } from './custom-input';
import { CustomHeaderDatePiker } from './custom-header';

import './style.css';
import 'react-datepicker/dist/react-datepicker.css';

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

    if (start && end) {
      onCloseCalendar([start, end]);
    }
  };

  const onCloseCalendar = (dates: [Date | null, Date | null]) => {
    setIsOpen(false);

    onChange([toUTCDate(dates[0]), toUTCDate(dates[1] || dates[0])]);
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
      <CustomInput
        label={label}
        endDate={endDate}
        onClear={onClear}
        startDate={startDate}
        placeholder="from - to "
        onClick={() => setIsOpen(true)}
      />

      <RemoveScroll enabled={isOpen}>
        <Modal isOpen={isOpen} onClose={() => onCloseCalendar([startDate, endDate])}>
          <div className="picker-modal flex h-[300px] w-[600px] max-[768px]:h-[600px] max-[768px]:w-[290px]">
            <DatePicker
              inline
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
              onCalendarClose={() => onCloseCalendar([startDate, endDate])}
              onCalendarOpen={() => setIsOpen(true)}
              renderCustomHeader={({ ...props }) => (
                <CustomHeaderDatePiker minDate={minDate} maxDate={maxDate} {...props} />
              )}
            />
          </div>
        </Modal>
      </RemoveScroll>
    </div>
  );
};
