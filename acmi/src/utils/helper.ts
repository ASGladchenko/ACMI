import { emptyState, initialCheckBoxes, initialSelects } from '@/context/filters';

export const parseSearchParams = (searchParams: Record<string, string>) => {
  const parsedCheckBoxes: typeof initialCheckBoxes = { ...initialCheckBoxes };
  const parsedFilter: typeof emptyState = { ...emptyState };
  const parsedSelects: typeof initialSelects = { ...initialSelects };
  const parsedDateInterval: [Date | null, Date | null] = [null, null];

  for (const key of Object.keys(initialCheckBoxes)) {
    if (key in searchParams) {
      parsedCheckBoxes[key as keyof typeof initialCheckBoxes] = searchParams[key] === 'true';
    }
  }

  for (const key of Object.keys(emptyState)) {
    if (key in searchParams) {
      parsedFilter[key as keyof typeof emptyState] = searchParams[key];
    }
  }

  for (const key of Object.keys(initialSelects)) {
    if (key in searchParams) {
      parsedSelects[key as keyof typeof initialSelects] = {
        value: searchParams[key],
        text: searchParams[key],
      };
    }
  }

  if (searchParams.dateFrom) {
    parsedDateInterval[0] = new Date(searchParams.dateFrom);
  }
  if (searchParams.dateTo) {
    parsedDateInterval[1] = new Date(searchParams.dateTo);
  }

  return {
    filter: parsedFilter,
    selects: parsedSelects,
    checkBoxes: parsedCheckBoxes,
    dateInterval: parsedDateInterval,
  };
};

export const generateSearchParams = ({
  checkBoxes,
  filter,
  selects,
  dateInterval,
}: {
  checkBoxes: typeof initialCheckBoxes;
  filter: typeof emptyState;
  selects: typeof initialSelects;
  dateInterval: [Date | null, Date | null];
}) => {
  const params = new URLSearchParams();

  for (const key of Object.keys(checkBoxes)) {
    const current = checkBoxes[key as keyof typeof checkBoxes];
    const initial = initialCheckBoxes[key as keyof typeof initialCheckBoxes];
    if (current !== initial) {
      params.set(key, String(current));
    }
  }

  for (const key of Object.keys(filter)) {
    const current = filter[key as keyof typeof filter];
    const initial = emptyState[key as keyof typeof emptyState];
    if (current !== initial) {
      params.set(key, current);
    }
  }

  for (const key of Object.keys(selects)) {
    const value = selects[key]?.value;
    if (value !== null && value !== undefined) {
      params.set(key, String(value));
    }
  }

  const [from, to] = dateInterval;
  if (from) {
    params.set('dateFrom', from.toISOString().split('T')[0]);
  }
  if (to) {
    params.set('dateTo', to.toISOString().split('T')[0]);
  }

  return params.toString();
};
