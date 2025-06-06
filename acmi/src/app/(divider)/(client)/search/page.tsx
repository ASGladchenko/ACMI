export const dynamic = 'force-dynamic';

import { apiRedirect } from '@/utils';
import { PaginatedSuggestionList } from '@/components';
import { FindOffersResponse, SearchParams } from '@/types';
import { apiServer, normalizeFindOffers, serializeQuery } from '@/fetch-request';

export default async function Home({ searchParams }: SearchParams) {
  const params = await searchParams;

  const body = serializeQuery(params as Record<string, string>);

  let initialData;

  if (body.date_from && body.date_to && body.airport_code) {
    try {
      const response = await apiServer.post<FindOffersResponse>('/find_offers', body);

      const raw = response?.data?.search_results || [];
      initialData = normalizeFindOffers(raw);
    } catch (error) {
      apiRedirect(error);
    }
  }

  return (
    <div className="laptop:block block h-full py-5 min-[1240px]:pl-6">
      <PaginatedSuggestionList initialData={initialData || []} />
    </div>
  );
}
