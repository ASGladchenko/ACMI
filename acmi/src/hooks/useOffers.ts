'use client';

import { useState, useEffect } from 'react';

import { AxiosError } from 'axios';
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
  const [error, setError] = useState<string | null>(null);

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
      if (error instanceof AxiosError && error.response?.status === 403) {
        setError('You have reached the request limit');
      }
      setError('An error occurred while fetching offers');
      setData([]);
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

  return { data, isLoading, isRequiresFilled, error };
}
