'use client';

import { InfiniteScrollList } from '@/components';

import { fetchData } from './fetch';
import { RenderItem } from './render-element';

export interface Card {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

export interface CardListServerProps {
  limit: number;
  initialCards: Card[];
}

export const Cards = ({ limit, initialCards }: CardListServerProps) => {
  return (
    <InfiniteScrollList<Card>
      limit={limit}
      fetchData={fetchData}
      initialData={initialCards}
      renderItem={(item, index) => <RenderItem card={item} index={index} />}
    />
  );
};
