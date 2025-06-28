'use client';

import { useEffect } from 'react';

import { useUserStore } from '@/store';
import { apiClient } from '@/fetch-request';
import { showMessage } from '@/components';

export const UserStoreLoader = ({}) => {
  const setUser = useUserStore((s) => s.setUser);

  useEffect(() => {
    apiClient
      .get('/me')
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        showMessage.error(error);
      });
  }, []);
  return null;
};
