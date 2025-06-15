import { getYear } from 'date-fns';

export const months = [
  {
    text: 'January',
    value: 0,
  },
  {
    text: 'February',
    value: 1,
  },
  {
    text: 'March',
    value: 2,
  },
  {
    text: 'April',
    value: 3,
  },
  {
    text: 'May',
    value: 4,
  },
  {
    text: 'June',
    value: 5,
  },
  {
    text: 'July',
    value: 6,
  },
  {
    text: 'August',
    value: 7,
  },
  {
    text: 'September',
    value: 8,
  },
  {
    text: 'October',
    value: 9,
  },
  {
    text: 'November',
    value: 10,
  },
  {
    text: 'December',
    value: 11,
  },
];

export const years = Array.from({ length: 11 }, (_, i) => ({
  text: String(getYear(new Date()) + i),
  value: getYear(new Date()) + i,
}));
