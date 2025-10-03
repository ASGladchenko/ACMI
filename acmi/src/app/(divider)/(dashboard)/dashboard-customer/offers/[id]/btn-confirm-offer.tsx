'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { getErrorMessage } from '@/utils';
import { apiClient } from '@/fetch-request';
import { Button, showMessage } from '@/components';

export const Controls = ({ id }: { id: number }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const confirmOffer = async (id: number, onSuccess?: () => void) => {
    setIsLoading(true);

    await apiClient
      .post('/rfq/confirm', { id })
      .then(() => {
        showMessage.success('Offer confirmed successfully');
        onSuccess?.();
      })
      .catch((error) => {
        const errorMessage = getErrorMessage(error);
        showMessage.error(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleGetInTouch = async (id: number) => {
    await confirmOffer(id, () => router.push('/dashboard-customer/offers'));
  };

  const handleNegotiate = async (id: number) => {
    await confirmOffer(id, () => router.push(`/dashboard-customer/contracts/${id}`));
  };

  return (
    <div className="flex items-center justify-center gap-6 max-[568px]:flex-col max-[568px]:gap-4">
      <Button
        loading={isLoading}
        onClick={() => handleNegotiate(Number(id))}
        className="max-w-max max-[568px]:max-w-full"
      >
        Negotiate contract draft
      </Button>

      <Button
        onClick={() => handleGetInTouch(Number(id))}
        className="max-w-max max-[568px]:max-w-full"
      >
        Get in touch
      </Button>
    </div>
  );
};
