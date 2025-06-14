'use client';

import { cn } from '@/utils';
import { useOffers } from '@/hooks';
import { SuggestionCard } from '@/components';
import { FindOffersNormalizedProps } from '@/types';
// import { normalizeFindOffers } from '@/fetch-request';

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

  // const r = {
  //   offer_id: 15,
  //   aircraft_type_long: 'Airbus A320',
  //   icao_type: 'A320',
  //   provider_name: 'Go2Sky',
  //   msn: '4247',
  //   reg: 'LZ-FSA',
  //   dom: '2010-06-06T00:00:00Z',
  //   layout: '138Y+12J',
  //   bh_price: 1950,
  //   indicative_price: 109200,
  //   mgbh: 56,
  // };

  // const c = normalizeFindOffers([r]);

  return (
    <div
      className={cn(
        'relative flex h-full w-full flex-col items-center gap-10',
        isEmpty && 'pt-[160px]'
      )}
    >
      {/* <SuggestionCard {...c[0]} /> */}

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
