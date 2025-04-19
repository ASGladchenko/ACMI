import { fetchMockAircrafts } from '@/components/pages/cards/fetch';

import { SearchParams } from '@/types';
import { PaginatedSuggestionList } from '@/components';
import { apiFetch, serializeQuery } from '@/fetch-request';

const LIMIT = 5;

export default async function Home({ searchParams }: SearchParams) {
  const params = await searchParams;
  const body = serializeQuery(params as Record<string, string>);

  const data = await apiFetch('/find_offers', {
    method: 'POST',
    body: JSON.stringify(body),
  });
  console.log({ data });

  const initialCards = await fetchMockAircrafts(0, LIMIT);

  return (
    <div className="laptop:block block py-5 min-[1240px]:pl-6">
      <PaginatedSuggestionList isHasMore={true} initialData={initialCards} />
    </div>
  );
}
