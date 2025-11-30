import { useRef, useState } from 'react';

import { cn } from '@/utils';
import { useSelect } from '@/shared/hooks';
import { Plane, ArrowDown } from '@/shared/icons';

import { InputBase } from '../input-base';
import { DropdownList } from '../dropdown-list';
import { SelectOption, SelectNewProps } from './types';
import { SwitchedDropItem } from './switched-drop-item';

export const SelectNew = <T extends SelectOption>({
  data,
  error,
  disabled,
  selectedItem,
  onSelectItem,
  itemType = 'base',
  animationDuration = 360,
  placeholder = 'Select an option',
}: SelectNewProps<T>) => {
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
    onSelectItem(null);
  };

  const filteredData = data.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

  const onIconClick = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.preventDefault();

    onToggleSelect(!isOpen);
    if (!isOpen) {
      inputRef.current?.blur();
    }
  };

  const onItemClick = (item: T) => {
    if (selectedItem && selectedItem.id === item.id) {
      return;
    }

    onSelectItem(item);
    onToggleSelect(false);
  };

  const selectedLabel = isOpen ? (selectedItem?.label ?? search) : (selectedItem?.label ?? '');

  const iconClass = cn(
    'h-5 w-5 shrink-0 text-inherit transition-all duration-200',
    isOpen && 'rotate-180 text-accent-interactions-dark'
  );

  return (
    <div ref={wrapperRef} className="gutter scroll-bar-mini relative w-full shrink grow">
      <InputBase
        error={error}
        ref={inputRef}
        isActive={isOpen}
        value={selectedLabel}
        placeholder={placeholder}
        onChange={handleChangeSearch}
        onFocus={() => onToggleSelect(true)}
        RightItem={<ArrowDown className={iconClass} onClick={onIconClick} />}
        LeftItem={
          itemType === 'plane' ? <Plane className="text-text-secondary h-5 w-5 shrink-0" /> : null
        }
      />

      <DropdownList<T>
        isOpen={isOpen}
        data={filteredData}
        animation={animation}
        animationDuration={animationDuration}
        RenderItem={({ item }) => (
          <SwitchedDropItem<T>
            item={item}
            type={itemType}
            key={item.label}
            active={selectedItem}
            onClick={onItemClick}
          />
        )}
      />
    </div>
  );
};
