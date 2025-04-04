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
    <div className="laptop:block laptop:pl-6 block py-5">
      <Cards limit={LIMIT} initialCards={initialCards} searchParams={initialParams} />
    </div>
  );
}
