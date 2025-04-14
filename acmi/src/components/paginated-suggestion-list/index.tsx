'use client';

import { useState } from 'react';

import { AircraftProps, Button, SuggestionCard } from '@/components';
import { fetchMockAircrafts } from '../pages/cards/fetch';

export interface PaginatedSuggestionListProps {
  isHasMore: boolean;
  initialData: AircraftProps[];
}

const LIMIT = 5;

export const PaginatedSuggestionList = ({
  isHasMore,
  initialData,
}: PaginatedSuggestionListProps) => {
  // TODO LOGIC WITH SEARCH PARAMS
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<AircraftProps[]>(initialData);

  const isEmpty = data.length === 0;

  const onFetchMore = async () => {
    setIsLoading(true);
    try {
      const newData = await fetchMockAircrafts(data.length, LIMIT);
      setData((prev) => [...prev, ...newData]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-full flex-col items-center gap-10">
      {!isEmpty && data.map((item) => <SuggestionCard key={item.id} {...item} />)}

      {isHasMore && (
        <Button
          onClick={onFetchMore}
          loading={isLoading}
          buttonType="outline"
          className="w-full p-5"
        >
          Load more
        </Button>
      )}

      {isEmpty && <h2 className="w-full text-center text-2xl font-bold">No results found</h2>}
    </div>
  );
};
