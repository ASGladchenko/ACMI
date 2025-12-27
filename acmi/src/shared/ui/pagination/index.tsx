'use client';

import { FC, useRef } from 'react';

import { cn } from '@/shared/utils';
import { ArrowDown } from '@/assets/svg';
import { useSelect } from '@/shared/hooks';

import { getVisiblePages } from './helper';
import { DropdownList } from '../dropdown-list';
import { DropItemBase } from '../dropdown-items';

interface Props {
  pageSize: number;
  totalPages: number;
  className?: string;
  currentPage: number;
  maxVisiblePages?: number;
  pageSizeOptions?: number[];
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
}

const transitionClass = 'transition duration-300 easy-in-out';

export const Pagination: FC<Props> = (props) => {
  const {
    pageSize,
    className,
    totalPages,
    currentPage,
    onPageChange,
    onPageSizeChange,
    maxVisiblePages = 5,
    pageSizeOptions = [10, 20, 50, 100],
  } = props;
  const selectRef = useRef<HTMLDivElement>(null);

  const { isOpen, animation, onToggleSelect } = useSelect({
    refs: selectRef,
    delayUnmount: 300,
    outSideClick: () => {
      onToggleSelect(false);
    },
  });
  const visiblePages = getVisiblePages({
    currentPage,
    totalPages,
    maxVisiblePages,
  });

  const totalCount = totalPages * pageSize;

  const showStartEllipsis = visiblePages[0] > 2;
  const showEndEllipsis = visiblePages[visiblePages.length - 1] < totalPages - 1;

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  if (totalPages < 1) {
    return null;
  }

  const firstItem = (currentPage - 1) * pageSize + 1;
  const lastItem = Math.min(currentPage * pageSize, totalCount);

  return (
    <div
      className={cn('flex items-center gap-[30px] text-[15px] leading-[1.2]', className)}
      role="navigation"
      aria-label="Pagination"
    >
      <span className="">
        {firstItem}-{lastItem} of {totalCount}
      </span>

      <div className="ml-auto flex items-center gap-1.5">
        <button
          type="button"
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="group border-iron rounded-lg2 flex cursor-pointer items-center gap-1 border px-[11px] py-2 disabled:opacity-30"
          aria-label="Go to previous page"
        >
          <ArrowDown
            className={cn(
              'text-text-secondary h-4 w-4 shrink-0 rotate-90 group-hover:scale-110',
              transitionClass
            )}
          />
          Back
        </button>

        {visiblePages[0] > 1 && (
          <button
            type="button"
            onClick={() => onPageChange(1)}
            className={cn('group border-iron rounded-lg2 cursor-pointer border px-[11px] py-2')}
            aria-current={currentPage === 1 ? 'page' : undefined}
          >
            <span className={cn('inline-block group-hover:scale-110', transitionClass)}>1</span>
          </button>
        )}

        {showStartEllipsis && (
          <span
            className="border-iron rounded-lg2 flex h-9 w-[31px] items-center justify-center gap-0.5 border px-[11px] py-2"
            aria-hidden="true"
          >
            {Array.from({ length: 3 }, (_, i) => (
              <span
                className="bg-text-primary h-0.5 w-0.5 shrink-0 rounded-full"
                key={`start_${i}`}
              />
            ))}
          </span>
        )}

        {visiblePages.map((page) => (
          <button
            type="button"
            key={page}
            onClick={() => onPageChange(page)}
            aria-current={currentPage === page ? 'page' : undefined}
            className={cn(
              'group border-iron rounded-lg2 cursor-pointer border px-[11px] py-2',
              transitionClass,
              currentPage === page &&
                'bg-accent-normal border-accent-normal text-white transition duration-300'
            )}
          >
            <span
              className={cn(
                'inline-block',
                transitionClass,
                currentPage !== page && 'group-hover:scale-110'
              )}
            >
              {page}
            </span>
          </button>
        ))}

        {showEndEllipsis && (
          <span
            className="border-iron rounded-lg2 flex h-9 w-[31px] items-center justify-center gap-0.5 border px-[11px] py-2"
            aria-hidden="true"
          >
            {Array.from({ length: 3 }, (_, i) => (
              <span
                className="bg-text-primary h-0.5 w-0.5 shrink-0 rounded-full"
                key={`end_${i}`}
              />
            ))}
          </span>
        )}

        {visiblePages[visiblePages.length - 1] < totalPages && (
          <button
            type="button"
            onClick={() => onPageChange(totalPages)}
            aria-current={currentPage === totalPages ? 'page' : undefined}
            className="group border-iron rounded-lg2 cursor-pointer border px-[11px] py-2"
          >
            <span className={cn('inline-block group-hover:scale-110', transitionClass)}>
              {totalPages}
            </span>
          </button>
        )}

        <button
          type="button"
          onClick={handleNext}
          aria-label="Go to next page"
          disabled={currentPage === totalPages}
          className={cn(
            'group border-iron rounded-lg2 flex cursor-pointer items-center gap-1 border px-[11px] py-2 disabled:opacity-30'
          )}
        >
          Next
          <ArrowDown
            className={cn(
              'text-text-secondary h-4 w-4 shrink-0 -rotate-90 group-hover:scale-110',
              transitionClass
            )}
          />
        </button>
      </div>

      <div className="flex items-center justify-end gap-2">
        <span className="text-[15px] leading-[1.2]">Result per page</span>

        <div
          ref={selectRef}
          onClick={() => onToggleSelect(!isOpen)}
          className="border-iron rounded-lg2 relative flex cursor-pointer items-center gap-2 border px-[11px_9px] py-2"
        >
          <span>{pageSize}</span>
          <ArrowDown
            className={cn(
              'text-text-secondary h-4 w-4 shrink-0 transition duration-300',
              isOpen && 'rotate-180'
            )}
          />

          <DropdownList<{ id: string; label: string }>
            height={160}
            className="right-0"
            animation={animation}
            containerClassName="gutter-off"
            data={pageSizeOptions.map((item, idx) => ({
              id: `per page ${idx}`,
              label: String(item),
            }))}
            RenderItem={({ item }) => (
              <DropItemBase
                item={item}
                key={item.id}
                onClick={(item) => onPageSizeChange(Number(item.label))}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};
