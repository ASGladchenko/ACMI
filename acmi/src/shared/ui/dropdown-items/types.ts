export interface DropDownItemProps<T> {
  item: T;
  active?: T | null;
  disabled?: boolean;
  onClick: (item: T) => void;
}

export type ItemExtend = { label: string; id: string | number };
