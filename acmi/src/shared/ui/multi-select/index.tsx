import { useRef, useState } from 'react';

import { cn } from '@/utils';
import { useSelect } from '@/shared/hooks';
import { Plane, ArrowDown } from '@/shared/assets';

import { DropdownList } from '../dropdown-list';
import { SwitchedDropItem } from '../dropdown-items';
import { MultiSelectItem } from './multi-select-item';
import { SelectOption, MultiSelectProps } from './types';

export const MultiSelect = <T extends SelectOption>({
  data,
  error,
  disabled,
  onSelect,
  isLoading,
  selected = [],
  itemType = 'base',
  animationDuration = 360,
  placeholder = 'Select an option',
}: MultiSelectProps<T>) => {
  const [search, setSearch] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { isOpen, animation, onToggleSelect } = useSelect({
    disabled,
    refs: wrapperRef,
    delayUnmount: animationDuration,
    outSideClick: () => {
      onToggleSelect(false);
      inputRef.current?.blur();
    },
  });

  const handleChangeSearch = (value: string) => {
    setSearch(value);
    onSelect(null);
  };

  const filteredData = (data || []).filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

  const onIconClick = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.preventDefault();

    if (!isOpen) {
      inputRef.current?.focus();
    } else {
      inputRef.current?.blur();
    }

    onToggleSelect(!isOpen);
  };

  const onItemClick = (item: T) => {
    const isIncludes = (selected || []).some((old) => old.id === item.id);

    const newSelected = isIncludes
      ? (selected || []).filter((old) => old.id !== item.id)
      : [...(selected || []), item];

    onSelect(newSelected.length > 0 ? newSelected : null);
  };

  const iconClass = cn(
    'h-5 w-5 shrink-0 text-inherit transition-all duration-200',
    isOpen && 'rotate-180 text-accent-interactions-dark'
  );

  return (
    <div ref={wrapperRef} className="relative w-full shrink grow">
      <MultiSelectItem<T>
        ref={inputRef}
        value={search}
        isActive={isOpen}
        selected={selected}
        animation={animation}
        error={Boolean(error)}
        onSelectItem={onSelect}
        placeholder={placeholder}
        onChange={handleChangeSearch}
        animationDuration={animationDuration}
        onFocus={() => !isOpen && onToggleSelect(true)}
        RightItem={<ArrowDown className={iconClass} onClick={onIconClick} />}
        LeftItem={
          itemType === 'plane' ? <Plane className="text-text-secondary h-5 w-5 shrink-0" /> : null
        }
      />

      <DropdownList<T>
        error={error}
        data={filteredData}
        disabled={disabled}
        animation={animation}
        isLoading={isLoading}
        animationDuration={animationDuration}
        RenderItem={({ item }) => {
          const isActive =
            Boolean(selected) &&
            Boolean(selected && selected.some((selectedItem) => selectedItem.id === item.id));

          return (
            <SwitchedDropItem<T>
              item={item}
              type={itemType}
              key={item.label}
              isActive={isActive}
              onClick={onItemClick}
            />
          );
        }}
      />
    </div>
  );
};
