import { fetchMockAircrafts } from '@/components/pages/cards/fetch';

import { PaginatedSuggestionList } from '@/components';

const LIMIT = 5;

export default async function Home() {
  const initialCards = await fetchMockAircrafts(0, LIMIT);

  return (
    <div className="laptop:block block py-5 min-[1240px]:pl-6">
      <PaginatedSuggestionList isHasMore={true} initialData={initialCards} />
    </div>
  );
}
