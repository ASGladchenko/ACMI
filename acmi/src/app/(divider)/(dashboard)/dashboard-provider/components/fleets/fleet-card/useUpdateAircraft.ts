'use client';

import { useState, useCallback } from 'react';

import { getErrorMessage } from '@/utils';
import { showMessage } from '@/components';
import { apiClient } from '@/fetch-request';

import { SerializedAirCraftFleet } from '../../../types';

interface UseUpdateAircraftResult {
  updateAircraft: (id: string, values: SerializedAirCraftFleet) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  resetError: () => void;
}
interface UseUpdateAircraftProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export const useUpdateAircraft = ({
  onError,
  onSuccess,
}: UseUpdateAircraftProps): UseUpdateAircraftResult => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const resetError = useCallback(() => {
    setError(null);
  }, []);

  const updateAircraft = useCallback(async (id: string, values: SerializedAirCraftFleet) => {
    setIsLoading(true);
    setError(null);

    try {
      await apiClient.put(`/aircrafts/${id}`, values);

      showMessage.success('Aircraft updated successfully');

      onSuccess?.();
    } catch (error: unknown) {
      const errorMessage = getErrorMessage(error, 'Failed to update aircraft');

      setError(errorMessage);
      showMessage.error(errorMessage);
      onError?.(errorMessage);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    error,
    isLoading,
    resetError,
    updateAircraft,
  };
};
