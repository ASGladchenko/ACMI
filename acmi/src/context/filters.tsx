'use client';
import { createContext, useContext, useState, ReactNode, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { ISelectOption } from '@/components';

import { generateSearchParams } from '../utils';

export interface SelectOption {
  value: string;
  text: string;
}

export const initialCheckBoxes = {
  ACT: false,
  IFE: false,
  All: false,
  IOSA: false,
  WiFi: false,
  ISPS: false,
  Galley: false,
  Winglets: false,
  Dangerous: false,
  isWideBody: false,
};

export const emptyState = {
  first: '',
  minPax: '',
  economy: '',
  business: '',
  premiumEconomy: '',
};

export const initialSelects: Record<string, ISelectOption | null> = {
  etops: null,
  maxAge: null,
  fromLocation: null,
  maxNoiseLevel: null,
  certifications: null,
  minApproachCat: null,
};
export const initialMultiSelects = {
  aircraftTypes: null,
};

interface FiltersContextType {
  filter: typeof emptyState;
  selects: typeof initialSelects;
  multiSelects: typeof initialMultiSelects;
  checkBoxes: typeof initialCheckBoxes;
  dateInterval: [Date | null, Date | null];
  setFilter: React.Dispatch<React.SetStateAction<typeof emptyState>>;
  setSelects: React.Dispatch<React.SetStateAction<typeof initialSelects>>;
  setMultiSelects: React.Dispatch<React.SetStateAction<typeof initialMultiSelects>>;
  setCheckBoxes: React.Dispatch<React.SetStateAction<typeof initialCheckBoxes>>;
  setDateInterval: React.Dispatch<React.SetStateAction<[Date | null, Date | null]>>;
}

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export const FiltersProvider = ({ children }: { children: ReactNode }) => {
  const [selects, setSelects] = useState(initialSelects);
  const [checkBoxes, setCheckBoxes] = useState(initialCheckBoxes);
  const [multiSelects, setMultiSelects] = useState(initialMultiSelects);
  const [filter, setFilter] = useState(emptyState);
  const [dateInterval, setDateInterval] = useState<[Date | null, Date | null]>([null, null]);

  const initializedRef = useRef(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!initializedRef.current) {
      initializedRef.current = true;
      return;
    }

    const query = generateSearchParams({
      filter,
      selects,
      checkBoxes,
      dateInterval,
    });

    const url = `${pathname}?${query}`;
    router.replace(url, { scroll: false });
  }, [filter, checkBoxes, selects, dateInterval]);

  return (
    <FiltersContext.Provider
      value={{
        filter,
        selects,
        setFilter,
        checkBoxes,
        setSelects,
        multiSelects,
        dateInterval,
        setCheckBoxes,
        setMultiSelects,
        setDateInterval,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error('useFilters must be used within a FiltersProvider');
  }
  return context;
};
