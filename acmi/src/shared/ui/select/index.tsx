import { useRef, useState } from 'react';

import { cn } from '@/utils';
import { useSelect } from '@/shared/hooks';
import { Plane, ArrowDown } from '@/shared/icons';

import { InputBase } from '../input-base';
import { DropdownList } from '../dropdown-list';
import { SelectProps, SelectOption } from './types';
import { SwitchedDropItem } from './switched-drop-item';

export const Select = <T extends SelectOption>({
  data,
  error,
  disabled,
  selected,
  onSelect,
  isLoading,
  itemType = 'base',
  animationDuration = 360,
  placeholder = 'Select an option',
}: SelectProps<T>) => {
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

    onToggleSelect(!isOpen);

    if (!isOpen) {
      inputRef.current?.blur();
    }
  };

  const onItemClick = (item: T) => {
    if (selected && selected.id === item.id) {
      return;
    }

    onSelect(item);
    onToggleSelect(false);
  };

  const selectedLabel = isOpen ? (selected?.label ?? search) : (selected?.label ?? '');

  const iconClass = cn(
    'h-5 w-5 shrink-0 text-inherit transition-all duration-200',
    isOpen && 'rotate-180 text-accent-interactions-dark'
  );

  return (
    <div ref={wrapperRef} className="gutter scroll-bar-mini relative w-full shrink grow">
      <InputBase
        ref={inputRef}
        isActive={isOpen}
        value={selectedLabel}
        error={Boolean(error)}
        placeholder={placeholder}
        onChange={handleChangeSearch}
        onFocus={() => onToggleSelect(true)}
        RightItem={<ArrowDown className={iconClass} onClick={onIconClick} />}
        LeftItem={
          itemType === 'plane' ? <Plane className="text-text-secondary h-5 w-5 shrink-0" /> : null
        }
      />

      <DropdownList<T>
        error={error}
        isOpen={isOpen}
        data={filteredData}
        disabled={disabled}
        animation={animation}
        isLoading={isLoading}
        animationDuration={animationDuration}
        RenderItem={({ item }) => (
          <SwitchedDropItem<T>
            item={item}
            type={itemType}
            key={item.label}
            active={selected}
            onClick={onItemClick}
          />
        )}
      />
    </div>
  );
};
