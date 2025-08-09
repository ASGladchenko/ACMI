'use client';

import { useState, useCallback } from 'react';

import { getErrorMessage } from '@/utils';
import { showMessage } from '@/components';
import { apiClient } from '@/fetch-request';

import { SerializedAirCraftFleet } from '../../../types';

interface UseUpdateAircraftResult {
  updateAircraft: (id: string, values: SerializedAirCraftFleet) => Promise<void>;
  updateAircraftStatus: (id: string, active: boolean) => Promise<void>;
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

  const updateAircraft = useCallback(
    async (id: string, values: SerializedAirCraftFleet) => {
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
    },
    [onSuccess, onError]
  );

  const updateAircraftStatus = useCallback(
    async (id: string, active: boolean) => {
      setIsLoading(true);
      setError(null);

      try {
        await apiClient.post(`/aircrafts/${id}/setActive`, { active });

        showMessage.success(`Aircraft ${active ? 'activated' : 'deactivated'} successfully`);

        onSuccess?.();
      } catch (error: unknown) {
        const errorMessage = getErrorMessage(error, 'Failed to update aircraft status');

        setError(errorMessage);
        showMessage.error(errorMessage);
        onError?.(errorMessage);
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [onSuccess, onError]
  );

  return {
    error,
    isLoading,
    resetError,
    updateAircraft,
    updateAircraftStatus,
  };
};
