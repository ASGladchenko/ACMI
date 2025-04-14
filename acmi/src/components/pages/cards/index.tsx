'use client';

import { SearchParams } from '@/types';
import { AircraftProps, InfiniteScrollList, SuggestionCard } from '@/components';

import { fetchMockAircrafts } from './fetch';

export interface CardListServerProps {
  limit: number;
  initialCards: AircraftProps[];
  searchParams?: SearchParams;
}

export const Cards = ({ limit, initialCards }: CardListServerProps) => {
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
