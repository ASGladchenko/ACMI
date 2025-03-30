'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

import { cn } from '@/utils';

export interface InfiniteScrollListProps<T> {
  limit: number;
  initialData: T[];
  className?: string;
  fetchData: (start: number, count: number) => Promise<T[]>;
  renderItem: (item: T, index: number, total: number) => React.ReactNode;
}

export const InfiniteScrollList = <T,>({
  limit,
  fetchData,
  className,
  renderItem,
  initialData,
}: InfiniteScrollListProps<T>) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [data, setData] = useState<T[]>(initialData);
  const [page, setPage] = useState(limit);
  const [loading, setLoading] = useState(false);

  const loadMore = useCallback(async () => {
    setLoading(true);
    try {
      const newData = await fetchData(page, limit);
      setData((prev) => [...prev, ...newData]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [page, fetchData]);

  useEffect(() => {
    if (inView) {
      setPage((prev) => prev + limit);
    }
  }, [inView, setPage, limit]);

  useEffect(() => {
    if (page === limit) return;
    loadMore();
  }, [page, loadMore, limit]);

  return (
    <div className={cn('flex w-full flex-col gap-3', className)}>
      {data.map((item, index) => (
        <div key={index} ref={data.length === index + 1 ? ref : undefined}>
          {renderItem(item, index, data.length)}
        </div>
      ))}
      {loading && <div>Loading...</div>}
    </div>
  );
};
