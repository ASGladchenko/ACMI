import { Cards } from '@/app/observer/cards';
import { fetchData } from '@/app/observer/fetch';

export default async function Page() {
  const initialCards = await fetchData(0, 5);

  return <Cards limit={5} initialCards={initialCards} />;
}
