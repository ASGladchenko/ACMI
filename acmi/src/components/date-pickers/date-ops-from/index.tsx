import { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import { CustomHeaderDatePiker } from './custom-header';
import { CustomInput } from './custom-input';

export interface DateOpsFromProps {
  className?: string;
  initialEnd: Date | null;
  initialStart: Date | null;
  onChange: (dates: [Date | null, Date | null]) => void;
}

export const DateOpsFrom = ({
  onChange,
  className,
  initialEnd = null,
  initialStart = null,
}: DateOpsFromProps) => {
  const [startDate, setStartDate] = useState<Date | null>(initialStart);
  const [endDate, setEndDate] = useState<Date | null>(initialEnd);

  const onHandleChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const datePlusOneMonth = startDate
    ? new Date(startDate.getFullYear(), startDate.getMonth() + 1, startDate.getDate())
    : new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());

  return (
    <DatePicker
      withPortal
      selectsRange
      monthsShown={2}
      endDate={endDate}
      minDate={new Date()}
      calendarStartDay={1}
      startDate={startDate}
      dateFormat="dd/MM/yyyy"
      onChange={onHandleChange}
      openToDate={datePlusOneMonth}
      onCalendarClose={() => onChange([startDate, endDate])}
      renderCustomHeader={({ ...props }) => <CustomHeaderDatePiker {...props} />}
      customInput={<CustomInput className={className} label="Date" placeholder="from - to " />}
    />
  );
};
