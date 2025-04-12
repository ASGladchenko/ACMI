import { Cards } from '@/components';
import { fetchMockAircrafts } from '@/components/pages/cards/fetch';

const LIMIT = 5;

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  const initialCards = await fetchMockAircrafts(0, LIMIT);
  const initialParams = await searchParams;

  return (
    <div className="laptop:block block py-5 min-[1240px]:pl-6">
      <Cards limit={LIMIT} initialCards={initialCards} searchParams={initialParams} />
    </div>
  );
}
