import { AxiosError } from 'axios';
import { cookies } from 'next/headers';

import { apiRedirect } from '@/utils';
import { PaginatedSuggestionList } from '@/components';
import { apiServer, serializeQuery } from '@/fetch-request';
import { Role, SearchParams, AircraftResponse } from '@/types';
import { normalizeDetailedFindOffers } from '@/fetch-request/normalize/find-offers-normalize';

export const dynamic = 'force-dynamic';

export default async function Home({ searchParams }: SearchParams) {
  const cookieStore = await cookies();
  const params = await searchParams;
  const role = cookieStore.get('role')?.value as Role | undefined;

  const body = serializeQuery(params as Record<string, string>);

  let initialData;
  let errorText;

  if (body.date_from && body.date_to && body.airport_code) {
    try {
      const response = await apiServer.post<AircraftResponse>('/find_offers', body);

      const raw = response.data?.search_results || [];

      initialData = normalizeDetailedFindOffers(raw);
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 403) {
        errorText = 'You have reached the request limit';
      }

      apiRedirect(error);
    }
  }

  const dates = { date_from: body.date_from, date_to: body.date_to };

  return (
    <div className="laptop:block block h-full py-5 min-[1240px]:pl-6">
      <PaginatedSuggestionList
        role={role}
        dates={dates}
        errorText={errorText}
        initialData={initialData || []}
      />
    </div>
  );
}
