import { Card } from './cards';

export const fetchData = async (start: number, count: number): Promise<Card[]> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_start=${start}&_limit=${count}`,
    { cache: 'no-store' }
  );
  const newCards: Card[] = await res.json();
  return newCards;
};
