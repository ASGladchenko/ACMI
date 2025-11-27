'use client';

import { useEffect } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { showMessage } from '@/components';
import { apiClient } from '@/fetch-request';
import { cn, getErrorMessage } from '@/utils';

export type LeonTokenResponse = {
  message: string;
  status: string;
};

export default function IntegrationsPage() {
  const router = useRouter();
  const params = useSearchParams();

  const code = params.get('code');
  const state = params.get('state');

  const sendConnectionRequest = async (code: string, state: string) => {
    try {
      const resp: LeonTokenResponse = await apiClient
        .post('/leon/token', null, { params: { code, state } })
        .then((resp) => resp.data);
      router.push('/dashboard-provider');
      showMessage.success(resp.message || 'Successfully connected to Leon');
    } catch (error: unknown) {
      const message = getErrorMessage(error, 'Failed to send connection request, connect with us');
      router.push('/dashboard-provider/integrations');
      showMessage.error(message);
    }
  };

  useEffect(() => {
    if (!code || !state) {
      router.push('/dashboard-provider/integrations');
      showMessage.error(
        'Some problem occurred during authorization, please try again, or contact support'
      );
    } else {
      sendConnectionRequest(code, state);
    }
  }, [code, state, router]);

  return (
    <div className="flex items-center justify-center p-6">
      <span
        className={cn(
          'border-blue-dark block h-[80px] w-[80px] animate-spin rounded-full border-6 border-t-transparent duration-[15s,15s]'
        )}
      />
    </div>
  );
}
