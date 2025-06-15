export const dynamic = 'force-dynamic';
import { cookies } from 'next/headers';

import { apiRedirect } from '@/utils';
import { PaginatedSuggestionList } from '@/components';
import { Role, SearchParams, FindOffersResponse } from '@/types';
import { apiServer, serializeQuery, normalizeFindOffers } from '@/fetch-request';

export default async function Home({ searchParams }: SearchParams) {
  const params = await searchParams;
  const cookieStore = await cookies();
  const role = cookieStore.get('role')?.value as Role | undefined;

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

  const dates = { date_from: body.date_from, date_to: body.date_to };

  return (
    <div className="laptop:block block h-full py-5 min-[1240px]:pl-6">
      <PaginatedSuggestionList role={role} dates={dates} initialData={initialData || []} />
    </div>
  );
}
