'use client';

import { useEffect, useState } from 'react';

import { useUserStore } from '@/store';
import { apiClient } from '@/fetch-request';
import { showMessage } from '@/components';

export const UserStoreLoader = ({}) => {
  const [isLoad, setIsLoad] = useState(false);
  const setUser = useUserStore((s) => s.setUser);

  useEffect(() => {
    if (isLoad) {
      return;
    }

    setIsLoad(true);

    apiClient
      .get('/me')
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        showMessage.error(error);
      });
  }, [isLoad]);

  return null;
};
