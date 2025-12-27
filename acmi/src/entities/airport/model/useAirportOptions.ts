'use client';

import { useRef, useState, useCallback } from 'react';

import { getErrorMessage } from '@/shared/utils';

import { State } from './types';
import { getAirportsOptions } from './api';
import { normalizeAirport } from './normalize';

export const initialState: State = {
  items: [],
  error: null,
  status: 'idle',
};

export const useAirportOptions = () => {
  const abortRef = useRef<AbortController | null>(null);

  const [state, setState] = useState(initialState);

  const fetchOptions = useCallback(async (query: string) => {
    if (abortRef.current) {
      abortRef.current.abort();
    }

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      setState((prevState) => ({ ...prevState, status: 'loading', error: null }));

      const response = await getAirportsOptions({ query, signal: controller.signal });

      setState((prevState) => ({
        ...prevState,
        error: null,
        status: 'success',
        items: normalizeAirport(response || []),
      }));
    } catch (e: unknown) {
      if (e instanceof DOMException && e.name === 'AbortError') {
        return;
      }

      const message = getErrorMessage(e);
      setState((prevState) => ({
        ...prevState,
        items: [],
        error: message,
        status: 'error',
      }));
    }
  }, []);

  const clearState = useCallback(() => {
    if (abortRef.current) abortRef.current.abort();
    setState(initialState);
  }, []);

  return { ...state, fetchOptions, clearState };
};
