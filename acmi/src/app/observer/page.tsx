import { Cards } from '@/app/observer/cards';
import { fetchMockAircrafts } from '@/app/observer/fetch';

const LIMIT = 5;

export default async function Page() {
  const initialCards = await fetchMockAircrafts(0, LIMIT);

  return (
    <div className="bg-white">
      <Cards limit={LIMIT} initialCards={initialCards} />
    </div>
  );
}
