import { Card } from './cards';

interface RenderItemProps {
  card: Card;
  index: number;
}

export const RenderItem = ({ card, index }: RenderItemProps) => (
  <div
    key={card.id}
    className="bg-blue-dark flex h-[200px] w-full flex-col items-center justify-center"
  >
    <span>{card.title}</span>
    <span>{index + 1}</span>
  </div>
);
