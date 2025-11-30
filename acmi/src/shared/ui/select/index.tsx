import { useRef, useState } from 'react';

import { cn } from '@/utils';
import { ArrowDown } from '@/assets/svg';
import { useSelect } from '@/shared/hooks';

import { InputBase } from '../input-base';

export type SelectOption = {
  label: string;
  id: string | number;
};

export interface SelectNewProps<T> {
  data: T[];
  isLoading?: boolean;
  placeholder?: string;
  selectedItem?: T | null;
  error?: string | boolean;
  onSelectItem: (item: T | null) => void;
}

export const SelectNew = <T extends SelectOption>({
  data,
  error,
  selectedItem,
  onSelectItem,
  placeholder = 'Select an option',
}: SelectNewProps<T>) => {
  const [search, setSearch] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { isOpen, animation, onToggleSelect } = useSelect({
    refs: wrapperRef,
    outSideClick: () => {
      onToggleSelect(false);
    },
  });

  const handleChangeSearch = (value: string) => {
    setSearch(value);

    onSelectItem(null);
  };

  const filteredData = data.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

  console.log({ data, search, animation, selectedItem });

  const iconClass = cn(
    'h-5 w-5 shrink-0 text-inherit transition-all duration-200',
    isOpen && 'rotate-180 text-accent-interactions-dark'
  );

  const onIconClick = () => {
    onToggleSelect(!isOpen);
  };

  const onItemClick = (item: T) => {
    onSelectItem(item);
    onToggleSelect(false);
  };

  const selectedLabel = isOpen ? (selectedItem?.label ?? '') : (selectedItem?.label ?? '');

  return (
    <div ref={wrapperRef}>
      <InputBase
        error={error}
        isActive={isOpen}
        value={selectedLabel}
        placeholder={placeholder}
        onChange={handleChangeSearch}
        onFocus={() => onToggleSelect(true)}
        RightItem={<ArrowDown className={iconClass} onClick={onIconClick} />}
      />

      {isOpen && (
        <div>
          {filteredData.map((item) => (
            <div onClick={() => onItemClick(item)} key={item.id}>
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
