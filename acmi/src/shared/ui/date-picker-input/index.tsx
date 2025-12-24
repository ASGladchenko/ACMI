'use client';

import { memo, useState, useEffect, useRef } from 'react';

import DatePicker from 'react-datepicker';

import { Cross, Calendar } from '@/shared/assets';
import { cn, toUTCDate, formatDateRange, fixUTCDateForDatePicker } from '@/shared/utils';

import { Modal } from '../modal';
import { InputBase } from '../input-base';
import { CustomHeaderDatePiker } from './custom-header';

//
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

export type DatePickerInputOnChangeProps = [Date | null, Date | null];

export interface DatePickerInputProps {
  minDate?: Date;
  error?: string;
  maxDate?: Date;
  portalId?: string;
  className?: string;
  initialEnd: Date | null;
  initialStart: Date | null;
  onChange: (dates: DatePickerInputOnChangeProps) => void;
}

const initialMaxDate = new Date();
initialMaxDate.setFullYear(initialMaxDate.getFullYear() + 10);

export const DatePickerInput = ({
  error,
  portalId,
  onChange,
  className,
  initialEnd = null,
  initialStart = null,
  minDate = new Date(),
  maxDate = initialMaxDate,
}: DatePickerInputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

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
    setStartDate(null);
    setEndDate(null);
  };

  useEffect(() => {
    setStartDate(fixUTCDateForDatePicker(initialStart));
    setEndDate(fixUTCDateForDatePicker(initialEnd));
  }, [initialStart, initialEnd]);

  const value = formatDateRange(startDate, endDate);

  const onFocus = () => {
    setIsOpen(true);
    inputRef.current?.blur();
  };

  return (
    <div className={cn('date-search w-full [&>div]:w-full', className)}>
      <InputBase
        error={error}
        value={value}
        ref={inputRef}
        isActive={isOpen}
        onFocus={onFocus}
        placeholder="Select date range"
        LeftItem={<Calendar className="w-5 h-5 text-color-iron" />}
        RightItem={
          value && (
            <Cross
              className="w-5 h-5 transition duration-150 text-color-iron hover:text-error-normal"
              onClick={onClear}
            />
          )
        }
      />

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
    </div>
  );
};

DatePickerInput.Memo = memo(DatePickerInput);

DatePickerInput.displayName = 'DatePickerInput';
