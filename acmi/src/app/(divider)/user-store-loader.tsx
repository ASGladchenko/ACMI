'use client';

import { useEffect } from 'react';

import { useUserStore } from '@/store';
import { getErrorMessage } from '@/utils';
import { showMessage } from '@/components';
import { apiClient } from '@/fetch-request';

const FETCH_INTERVAL = 50000;

export const UserStoreLoader = ({}) => {
  const setUser = useUserStore((s) => s.setUser);

  useEffect(() => {
    const fetchUser = () => {
      apiClient
        .get('/me')
        .then((res) => {
          setUser(res.data);
        })
        .catch((error) => {
          const msg = getErrorMessage(error, 'Error load user, reload or contact with us');
          showMessage.error(msg);
        });
    };

    fetchUser();

    const interval = setInterval(fetchUser, FETCH_INTERVAL);

    return () => clearInterval(interval);
  }, [setUser]);

  return null;
};
