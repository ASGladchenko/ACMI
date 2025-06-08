'use client';

import { cn } from '@/utils';
import { useOffers } from '@/hooks';
import { SuggestionCard } from '@/components';
import { FindOffersNormalizedProps } from '@/types';

export interface PaginatedSuggestionListProps {
  // isHasMore: boolean;
  initialData: FindOffersNormalizedProps[];
}

export const PaginatedSuggestionList = ({
  // isHasMore,
  initialData,
}: PaginatedSuggestionListProps) => {
  const { data, isLoading, isRequiresFilled } = useOffers({ initialData });

  const isEmpty = data.length === 0;

  return (
    <div
      className={cn(
        'relative flex h-full w-full flex-col items-center gap-10',
        isEmpty && 'pt-[160px]'
      )}
    >
      {!isEmpty &&
        data.map((item, index) => {
          return <SuggestionCard key={`${item.id}-${index}`} {...item} />;
        })}

      {/* {isHasMore && (
        <Button
          onClick={onFetchMore}
          loading={isLoading}
          buttonType="outline"
          className="w-full p-5"
        >
          Load more
        </Button>
      )} */}

      {isLoading && (
        <h1 className="text-blue-dark w-full text-center text-3xl font-bold">Loading...</h1>
      )}

      {isEmpty && isRequiresFilled && !isLoading && (
        <h2 className="text-blue-dark w-full text-center text-2xl font-bold">No results found</h2>
      )}

      {isEmpty && !isRequiresFilled && !isLoading && (
        <h2 className="text-blue-dark w-full text-center text-2xl font-bold">
          Please select a date range, an airport
        </h2>
      )}
    </div>
  );
};
