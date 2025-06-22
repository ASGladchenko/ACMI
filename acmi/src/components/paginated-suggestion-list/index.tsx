'use client';

import { cn } from '@/utils';
import { useOffers } from '@/hooks';
import { SuggestionCard } from '@/components';
import { Role, FindOffersNormalizedProps } from '@/types';

export interface PaginatedSuggestionListProps {
  role?: Role;
  errorText?: string;
  // isHasMore: boolean;
  initialData: FindOffersNormalizedProps[];
  dates: { date_from: string | null; date_to: string | null };
}

export const PaginatedSuggestionList = ({
  role,
  errorText,
  initialData,
  // isHasMore,
}: PaginatedSuggestionListProps) => {
  const { data, isLoading, isRequiresFilled } = useOffers({ initialData });

  const isEmpty = data.length === 0;
  const isError = true;

  return (
    <div
      className={cn(
        'relative flex h-full w-full flex-col items-center gap-4',
        isEmpty && !isError && 'pt-[160px]'
      )}
    >
      {errorText && (
        <div
          className={cn(
            'flex w-full items-center justify-center rounded-2xl border border-red-500 p-4 text-center text-lg text-red-500',
            isEmpty && 'mb-[100px]'
          )}
        >
          {errorText}
        </div>
      )}
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
        <h1 className="text-blue-dark w-full text-center text-3xl leading-relaxed font-bold">
          Loading...
        </h1>
      )}

      {isEmpty && isRequiresFilled && !isLoading && (
        <h2 className="text-blue-dark w-full text-center text-2xl leading-relaxed font-bold">
          No results found
        </h2>
      )}

      {isEmpty && !isRequiresFilled && !isLoading && (
        <h2 className="text-blue-dark mx-auto w-full max-w-md text-center text-2xl leading-relaxed font-bold">
          Please select a date range, an airport
        </h2>
      )}
    </div>
  );
};
