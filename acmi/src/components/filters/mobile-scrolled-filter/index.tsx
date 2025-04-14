'use client';

import { useState } from 'react';

import { useQueryStore } from '@/store';
import { queryParams } from '@/constants';
import { ArrowDown, Filters } from '@/assets/svg';
import { HeroFilter, MobileAdvancedSearch, Modal } from '@/components';

export const MobileScrolledFilter = ({}) => {
  console.log('MobileScrolledFilter');

  const [from, to] = queryParams.dates.split(',');

  const opsFrom = useQueryStore((state) => state.getQuery(queryParams.opsFrom) ?? '');
  const minPax = useQueryStore((state) => state.getQuery(queryParams.minPax) ?? '');
  const isWide = useQueryStore((state) => state.getQuery(queryParams.isWide) ?? '');
  const fromDate = useQueryStore((state) => state.getQuery(from) ?? null);
  const toValueDate = useQueryStore((state) => state.getQuery(to) ?? null);

  const dateFrom = fromDate ? new Date(Number(fromDate)) : null;
  const dateTo = toValueDate ? new Date(Number(toValueDate)) : null;

  const [modal, setModal] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);

  const toDate = (date: Date | null) => {
    const isDate = date instanceof Date;
    return isDate ? date.toLocaleDateString() : date;
  };

  const handleToggleModal = (index: number) => {
    setModal(index);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setModal(-1);
  };

  return (
    <>
      <div className="bg-white-dark text-blue-dark fixed top-0 left-0 z-[999] flex w-full items-center justify-between gap-2 rounded-xl px-4 py-2 min-[1024px]:px-[35px] min-[1240px]:hidden">
        <div
          onClick={() => handleToggleModal(1)}
          className="border-blue-dark hover:drop-shadow-link tablet:px-3 flex max-w-max cursor-pointer items-center gap-[0_8px] rounded-xl border px-1 py-1 duration-300"
        >
          <div className="flex flex-wrap">
            <p className="border-blue-dark px-2 text-xs min-[1024px]:border-r min-[1240px]:py-2">
              Ops from : {opsFrom || 'unset'}
            </p>
            <p className="border-blue-dark px-2 text-xs min-[1024px]:border-r min-[1240px]:py-2">
              Min Pax : {minPax || 'unset'}
            </p>
            <p className="border-blue-dark px-2 text-xs min-[1024px]:border-r min-[1240px]:py-2">
              Body : {isWide ? 'Wide' : 'Narrow'}
            </p>
            <p className="px-2 text-xs min-[1240px]:py-2">
              Date : {toDate(dateFrom) || 'from'} - {toDate(dateTo) || 'to'}
            </p>
          </div>

          <ArrowDown className="text-blue-dark h-8 w-8 shrink-0" />
        </div>

        <Filters
          onClick={() => handleToggleModal(2)}
          className="h-10 w-10 shrink-0 cursor-pointer rounded-md p-3 duration-200 hover:bg-white"
        />
      </div>

      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <>
          {modal === 1 && (
            <HeroFilter
              type="portal"
              portalId="calendar-mobile-main"
              onFind={() => console.log('find')}
            />
          )}

          {modal === 2 && <MobileAdvancedSearch />}
        </>
      </Modal>
    </>
  );
};
