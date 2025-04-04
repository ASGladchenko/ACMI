'use client';

import { AircraftProps, InfiniteScrollList, SuggestionCard } from '@/components';

import { useParamsSearch } from '@/hooks/useParamsSearch';
import { fetchMockAircrafts } from './fetch';

export interface CardListServerProps {
  limit: number;
  initialCards: AircraftProps[];
  searchParams?: Record<string, string>;
}

export const Cards = ({ limit, initialCards, searchParams }: CardListServerProps) => {
  useParamsSearch({ searchParams });

  return (
    <InfiniteScrollList<AircraftProps>
      limit={limit}
      className="gap-10"
      initialData={initialCards}
      fetchData={fetchMockAircrafts}
      renderItem={(item) => <SuggestionCard {...item} />}
    />
  );
};
