'use client';

import Cookies from 'js-cookie';

import { cn } from '@/utils';

export interface PaginatedSuggestionListProps {
  // isHasMore: boolean;
  initialData: FindOffersNormalizedProps[];
  dates: { date_from: string | null; date_to: string | null };
}
import { useOffers } from '@/hooks';
import { SuggestionCard } from '@/components';
import { Role, FindOffersNormalizedProps } from '@/types';

export const PaginatedSuggestionList = ({
  initialData,
  // isHasMore,
}: PaginatedSuggestionListProps) => {
  const { data, isLoading, isRequiresFilled } = useOffers({ initialData });
  const role = (Cookies.get('role') as undefined | Role) || Role.GUEST;

  const isEmpty = data.length === 0;

  return (
    <div
      className={cn(
        'relative flex h-full w-full flex-col items-center gap-4',
        isEmpty && 'pt-[160px]'
      )}
    >
      {!isEmpty &&
        data.map((item, index) => {
          return <SuggestionCard key={`${item.id}-${index}`} role={role} {...item} />;
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
