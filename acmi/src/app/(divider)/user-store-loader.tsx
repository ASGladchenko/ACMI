'use client';

import { useEffect } from 'react';

import { useUserStore } from '@/store';
import { apiClient } from '@/fetch-request';
import { showMessage } from '@/components';
import { getErrorMessage } from '@/utils';

export const UserStoreLoader = ({}) => {
  const setUser = useUserStore((s) => s.setUser);

  useEffect(() => {
    apiClient
      .get('/me')
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        const msg = getErrorMessage(error, 'Error load user, reload or contact with us');

        showMessage.error(msg);
      });
  }, []);

  return null;
};
