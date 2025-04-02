import { Cards } from '@/app/observer/cards';
import { fetchMockAircrafts } from '@/app/observer/fetch';

const LIMIT = 5;

export default async function Home() {
  const initialCards = await fetchMockAircrafts(0, LIMIT);

  return (
    <div className="laptop:block laptop:pl-6 block py-5">
      <Cards limit={LIMIT} initialCards={initialCards} />
    </div>
  );
}
