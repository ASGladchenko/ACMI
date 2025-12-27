'use client';
import { JSX, memo, useCallback, useRef, useState } from 'react';

import { cn } from '@/shared/utils';
import { useSelect } from '@/shared/hooks';
import { SelectOption } from '@/shared/types';
import { Plane, ArrowDown } from '@/shared/assets';

import { MultiSelectProps } from './types';
import { DropdownList } from '../dropdown-list';
import { SwitchedDropItem } from '../dropdown-items';
import { MultiSelectItem } from './multi-select-item';
import { Label } from '../label';

export const MultiSelect = <T extends SelectOption>({
  error,
  label,
  options,
  disabled,
  onChange,
  isLoading,
  className,
  withCount,
  value = [],
  itemType = 'base',
  animationDuration = 360,
  placeholder = 'Select an option',
  placeholderDropdown,
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
    onChange(null);
  };

  const filteredData = (options || []).filter((item) =>
    item.label?.toLowerCase().includes(search?.toLowerCase())
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
    const isIncludes = (value || []).some((old) => old.id === item.id);

    const newSelected = isIncludes
      ? (value || []).filter((old) => old.id !== item.id)
      : [...(value || []), item];
    onChange(newSelected.length > 0 ? newSelected : null);
  };

  const iconClass = cn(
    'h-5 w-5 shrink-0 text-inherit transition-all duration-200',
    isOpen && 'rotate-180 text-accent-interactions-dark'
  );

  const getPlaceholderDropDown = useCallback(
    (search: string) =>
      typeof placeholderDropdown === 'function'
        ? placeholderDropdown(search)
        : placeholderDropdown || 'No options',
    [placeholderDropdown]
  );

  const isValueEmpty = !value || value.length === 0;

  const count = withCount && !isValueEmpty ? `Selected: ${value.length}` : undefined;

  return (
    <Label label={label} count={count} className={className}>
      <div ref={wrapperRef} className={cn('relative w-full shrink grow', !label && className)}>
        <MultiSelectItem<T>
          ref={inputRef}
          value={search}
          isActive={isOpen}
          selected={value}
          animation={animation}
          error={Boolean(error)}
          onSelectItem={onChange}
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
          placeholder={getPlaceholderDropDown(search)}
          animationDuration={animationDuration / 0.8}
          RenderItem={({ item }) => {
            const isActive =
              Boolean(value) &&
              Boolean(value && value.some((selectedItem) => selectedItem.id === item.id));

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
    </Label>
  );
};

MultiSelect.Memo = memo(MultiSelect) as <T>(props: MultiSelectProps<T>) => JSX.Element;

MultiSelect.displayName = 'MultiSelect';
