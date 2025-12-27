'use client';

import { JSX, memo, useRef, useState, useCallback } from 'react';

import { cn } from '@/shared/utils';
import { useSelect } from '@/shared/hooks';
import { SelectOption } from '@/shared/types';
import { Cross, ArrowDown } from '@/shared/assets';

import { Icon } from './helper';
import { Label } from '../label';
import { SelectProps } from './types';
import { InputBase } from '../input-base';
import { DropdownList } from '../dropdown-list';
import { SwitchedDropItem } from '../dropdown-items';

export const Select = <T extends SelectOption>({
  error,
  value,
  label,
  options,
  labelAs,
  disabled,
  onChange,
  className,
  isLoading,
  onSearchChange,
  itemType = 'base',
  placeholderDropdown,
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

  const handleChangeSearch = useCallback(
    (value: string) => {
      setSearch(value);
      onSearchChange?.(value);
      onChange(null);
    },
    [onChange, onSearchChange]
  );

  const filteredOptions = (options || []).filter((item) =>
    item.label?.toLowerCase().includes(search?.toLowerCase())
  );

  const onIconClick = useCallback(
    (e: React.MouseEvent<SVGElement, MouseEvent>) => {
      e.preventDefault();

      onToggleSelect(!isOpen);

      if (!isOpen) {
        inputRef.current?.blur();
      }
    },
    [isOpen, onToggleSelect]
  );

  const onItemClick = (item: T) => {
    if (value && value.id === item.id) {
      return;
    }

    onChange(item);
    onToggleSelect(false);
  };

  const selectedLabel = isOpen ? (value?.label ?? search) : (value?.label ?? '');

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

  const onClear = useCallback(
    (e: React.MouseEvent<SVGElement, MouseEvent>) => {
      e.stopPropagation();
      e.preventDefault();
      onChange(null);
    },
    [onChange]
  );

  return (
    <Label as={labelAs} label={label} className={className}>
      <div
        ref={wrapperRef}
        className={cn('gutter scroll-bar-mini relative w-full shrink grow', !label && className)}
      >
        <InputBase
          ref={inputRef}
          isActive={isOpen}
          value={isOpen ? search : selectedLabel}
          error={Boolean(error)}
          placeholder={placeholder}
          onChange={handleChangeSearch}
          onFocus={() => onToggleSelect(true)}
          LeftItem={<Icon itemType={itemType} className="text-text-secondary h-5 w-5 shrink-0" />}
          RightItem={
            <>
              {value && !isOpen && (
                <Cross
                  onClick={onClear}
                  className="hover:text-error-normal h-5 w-5 text-inherit transition duration-150"
                />
              )}

              <ArrowDown className={iconClass} onClick={onIconClick} />
            </>
          }
        />

        <DropdownList<T>
          error={error}
          disabled={disabled}
          animation={animation}
          isLoading={isLoading}
          data={filteredOptions}
          animationDuration={animationDuration}
          placeholder={getPlaceholderDropDown(search)}
          RenderItem={({ item }) => {
            const isActive = Boolean(value) && Boolean(value && value.id === item.id);

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

Select.Memo = memo(Select) as <T>(props: SelectProps<T>) => JSX.Element;

Select.displayName = 'Select';
