'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { apiClient } from '@/fetch-request';
import { Button, showMessage } from '@/components';

export const Controls = ({ id }: { id: number }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const confirmOffer = async (id: number) => {
    setIsLoading(true);

    apiClient
      .post('/rfq/confirm', { id })
      .then(() => {
        showMessage.success('Offer confirmed successfully');
        router.push('/dashboard-customer/offers');
      })
      .catch((error) => {
        showMessage.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="flex items-center justify-center gap-6 max-[568px]:flex-col max-[568px]:gap-4">
      <Button loading={isLoading} className="max-w-max max-[568px]:max-w-full">
        Negotiate contract draft
      </Button>

      <Button onClick={() => confirmOffer(Number(id))} className="max-w-max max-[568px]:max-w-full">
        Get in touch
      </Button>
    </div>
  );
};
