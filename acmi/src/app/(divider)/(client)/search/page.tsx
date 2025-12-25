import { AxiosError } from 'axios';

import { getErrorMessage } from '@/utils';
import { PaginatedSuggestionList } from '@/components';
import { apiServer, serializeQuery } from '@/fetch-request';
import { SearchParams, AircraftResponse } from '@/types';
import { normalizeDetailedFindOffers } from '@/fetch-request/normalize/find-offers-normalize';

export const dynamic = 'force-dynamic';

export default async function Home({ searchParams }: SearchParams) {
  const params = await searchParams;

  const body = serializeQuery(params as Record<string, string>);

  let initialData;
  let message;

  if (body.date_from && body.date_to && body.airport_code) {
    try {
      const response = await apiServer.post<AircraftResponse>('/find_offers', body);

      const raw = response.data?.search_results || [];

      initialData = normalizeDetailedFindOffers(raw);
    } catch (error) {
      message = getErrorMessage(error);

      if (error instanceof AxiosError && error.response?.status === 403) {
        message = 'You have reached the request limit';
      }
    }
  }

  const dates = { date_from: body.date_from, date_to: body.date_to };

  return (
    <div className="laptop:block block h-full py-5 min-[1240px]:pl-6">
      <PaginatedSuggestionList dates={dates} errorText={message} initialData={initialData || []} />
    </div>
  );
}
