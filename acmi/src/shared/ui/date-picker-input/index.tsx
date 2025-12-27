'use client';

import { memo, useRef, useState, useEffect, useCallback } from 'react';

import DatePicker from 'react-datepicker';

import { cn, toUTCDate, formatDateRange, fixUTCDateForDatePicker } from '@/shared/utils';

import { Modal } from '../modal';
import { Label, AppliedLabelProps } from '../label';
import { CustomDateTrigger } from './custom-trigger';
import { CustomHeaderDatePiker } from './custom-header';

import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

export type DatePickerInputOnChangeProps = [Date | null, Date | null];

export type DatePickerInputProps = {
  minDate?: Date;
  error?: string;
  maxDate?: Date;
  portalId?: string;
  className?: string;
  disabled?: boolean;
  initialEnd: Date | null;
  initialStart: Date | null;
  onChange: (dates: DatePickerInputOnChangeProps) => void;
} & Omit<AppliedLabelProps, 'labelAs'>;

const initialMaxDate = new Date();
initialMaxDate.setFullYear(initialMaxDate.getFullYear() + 10);

export const DatePickerInput = ({
  error,
  label,
  portalId,
  disabled,
  onChange,
  className,
  initialEnd = null,
  initialStart = null,
  minDate = new Date(),
  maxDate = initialMaxDate,
}: DatePickerInputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLInputElement>(null);

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const onCloseCalendar = useCallback(
    (dates: [Date | null, Date | null]) => {
      setIsOpen(false);
      onChange([toUTCDate(dates[0]), toUTCDate(dates[1] || dates[0])]);
      wrapperRef.current?.focus();
    },
    [onChange]
  );

  const onHandleChange = useCallback(
    (dates: [Date | null, Date | null]) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);

      if (start && end) {
        onCloseCalendar([start, end]);
      }
    },
    [onCloseCalendar]
  );

  const onClear = useCallback(() => {
    onChange([null, null]);
    setStartDate(null);
    setEndDate(null);
  }, [onChange]);

  useEffect(() => {
    setStartDate(fixUTCDateForDatePicker(initialStart));
    setEndDate(fixUTCDateForDatePicker(initialEnd));
  }, [initialStart, initialEnd]);

  const value = formatDateRange(startDate, endDate);

  return (
    <Label label={label} className={className}>
      <div
        ref={wrapperRef}
        className={cn('date-search w-full outline-none [&>div]:w-full', !label && className)}
      >
        <CustomDateTrigger
          value={value}
          onClear={onClear}
          isError={!!error}
          isActive={isOpen}
          isDisabled={disabled}
          onOpen={() => setIsOpen(true)}
          placeholder="Select date range"
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
              renderCustomHeader={({ ...props }) => (
                <CustomHeaderDatePiker minDate={minDate} maxDate={maxDate} {...props} />
              )}
            />
          </div>
        </Modal>
      </div>
    </Label>
  );
};

DatePickerInput.Memo = memo(DatePickerInput);

DatePickerInput.displayName = 'DatePickerInput';
