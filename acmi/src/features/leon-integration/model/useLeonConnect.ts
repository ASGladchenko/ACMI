'use client';

import { useState } from 'react';

import { getErrorMessage } from '@/utils';
import { showMessage } from '@/components';
import { apiClient } from '@/fetch-request';

export type LeonConnectResponse = {
  message: string;
  authorization_url: string;
};

export const useLeonConnect = () => {
  const [isLoading, setIsLoading] = useState(false);

  const sendConnectionRequest = async (oprId: string) => {
    try {
      setIsLoading(true);
      const resp: LeonConnectResponse = await apiClient
        .post('/leon/auth', { oprId })
        .then((resp) => resp.data);
      console.log({ resp });

      if (resp.authorization_url) {
        window.location.href = resp.authorization_url;
      }
    } catch (error: unknown) {
      const message = getErrorMessage(
        error,
        'Failed to send connection request, try again or connect with us'
      );
      showMessage.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, connect: sendConnectionRequest };
};
