'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import { showMessage } from '@/components';
import type { FindOffersResponse, FindOffersNormalizedProps } from '@/types';
import { apiFetch, normalizeFindOffers, serializeQuery } from '@/fetch-request';

export function useOffers({ initialData }: { initialData: FindOffersNormalizedProps[] }) {
  const searchParams = useSearchParams();

  const [isLoading, setIsLoading] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isDateFilled, setIsDateFilled] = useState(
    !!searchParams.get('date_from') && !!searchParams.get('date_to')
  );
  const [data, setData] = useState<FindOffersNormalizedProps[]>(initialData);

  const fetchOffers = async () => {
    const paramsObj = Object.fromEntries(searchParams.entries());
    const body = serializeQuery(paramsObj);

    if (!body.date_from || !body.date_to) {
      setIsDateFilled(false);
      showMessage.info('Please select a date range');

      setData([]);
      return;
    }

    setIsDateFilled(true);
    setIsLoading(true);
    try {
      const response = await apiFetch<FindOffersResponse>('/find_offers', {
        method: 'POST',
        body: JSON.stringify(body),
      });
      const raw = response.search_results || [];
      const normalized = normalizeFindOffers(raw);
      setData(normalized);
    } catch (error) {
      showMessage.error(error as string);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
      return;
    }

    fetchOffers();
  }, [searchParams]);

  return { data, isLoading, isDateFilled };
}
