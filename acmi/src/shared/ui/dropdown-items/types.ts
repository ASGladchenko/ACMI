export interface DropDownItemProps<T> {
  item: T;
  isActive?: boolean;
  disabled?: boolean;
  iconClassName?: string;
  onClick: (item: T) => void;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export type ItemExtend = { label: string; id: string | number };
