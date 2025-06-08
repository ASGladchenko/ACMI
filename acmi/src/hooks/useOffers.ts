'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import { showMessage } from '@/components';
import type { FindOffersResponse, FindOffersNormalizedProps } from '@/types';
import { apiClient, serializeQuery, normalizeFindOffers } from '@/fetch-request';

export function useOffers({ initialData }: { initialData: FindOffersNormalizedProps[] }) {
  const searchParams = useSearchParams();

  const [isLoading, setIsLoading] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isRequiresFilled, setIsRequiresFilled] = useState(
    !!searchParams.get('date_from') &&
      !!searchParams.get('date_to') &&
      !!searchParams.get('airport_code')
  );
  const [data, setData] = useState<FindOffersNormalizedProps[]>(initialData);

  const fetchOffers = async () => {
    const paramsObj = Object.fromEntries(searchParams.entries());
    const body = serializeQuery(paramsObj);

    if (!body.date_from || !body.date_to || !body.airport_code) {
      setIsRequiresFilled(false);
      showMessage.info('Please select a date range and an airport');

      setData([]);
      return;
    }

    setIsRequiresFilled(true);
    setIsLoading(true);
    try {
      const response = await apiClient.post<FindOffersResponse>('/find_offers', body);

      const raw = response.data.search_results || [];

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

  return { data, isLoading, isRequiresFilled };
}
