'use client';

import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { RemoveScroll } from 'react-remove-scroll';

import { cn, toUTCDate, fixUTCDateForDatePicker } from '@/utils';

import { FleetDateInput } from './input-fleet';
import { FleetDatePickerHeader } from './fleet-date-picker-header';

export interface FleetDatePickerProps {
  label: string;
  maxDate?: Date;
  minDate?: Date;
  error?: string;
  portalId: string;
  className?: string;
  isDisabled?: boolean;
  initialDate: Date | null;
  onChange: (date: Date | null) => void;
}

export const FleetDatePicker = ({
  error,
  label,
  portalId,
  onChange,
  className,
  isDisabled,
  initialDate = null,
  maxDate = new Date(),
  minDate = new Date(1980, 0, 1),
}: FleetDatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState<Date | null>(initialDate);

  const onCloseCalendar = () => {
    onChange(toUTCDate(date));
    setIsOpen(false);
  };

  const handleChange = (date: Date | null) => {
    setDate(date);
  };

  useEffect(() => {
    setDate(fixUTCDateForDatePicker(initialDate));
  }, [initialDate]);

  return (
    <div className={cn('date-search w-full [&>div]:w-full', className)}>
      <RemoveScroll enabled={isOpen}>
        <DatePicker
          withPortal
          selected={date}
          minDate={minDate}
          maxDate={maxDate}
          portalId={portalId}
          disabled={isDisabled}
          dateFormat="dd/MM/yyyy"
          onChange={handleChange}
          onCalendarClose={onCloseCalendar}
          onCalendarOpen={() => setIsOpen(true)}
          customInput={<FleetDateInput error={error} label={label} isDisabled={isDisabled} />}
          renderCustomHeader={(props) => (
            <FleetDatePickerHeader minDate={minDate} maxDate={maxDate} {...props} />
          )}
        />
      </RemoveScroll>
    </div>
  );
};
