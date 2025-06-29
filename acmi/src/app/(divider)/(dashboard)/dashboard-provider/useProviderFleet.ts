'use client';

import { useRef, useEffect, useReducer, useCallback } from 'react';

import { apiClient } from '@/fetch-request';
import { isAbortError, getErrorMessage } from '@/utils';

import { normalizeAircraftFleet } from './normalize';
import { State, Action, AircraftFleet, UseProviderFleetProps } from './types';

const initialState: State = {
  data: null,
  error: null,
  status: 'idle',
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, status: 'loading', error: null };
    case 'FETCH_SUCCESS':
      return { ...state, status: 'success', data: action.payload, error: null };
    case 'FETCH_ERROR':
      return { ...state, status: 'error', error: action.payload };
    case 'UPDATE_SUCCESS':
      return {
        ...state,
        data: state.data
          ? state.data.map((a) => (a.id === action.payload.id ? action.payload : a))
          : [action.payload],
      };
    case 'RESET_ERROR':
      return { ...state, error: null };
    default:
      return state;
  }
}

export function useProviderFleet({ onError }: UseProviderFleetProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const abortRef = useRef<AbortController | null>(null);

  const fetchFleet = useCallback(async () => {
    dispatch({ type: 'FETCH_START' });
    abortRef.current?.abort();
    abortRef.current = new AbortController();
    try {
      const res = await apiClient<AircraftFleet[]>('/aircrafts', {
        signal: abortRef.current.signal,
      });

      const normalizedResponse = res.data.map((aircraft) => normalizeAircraftFleet(aircraft));

      dispatch({ type: 'FETCH_SUCCESS', payload: normalizedResponse });
    } catch (error: unknown) {
      if (isAbortError(error)) return;

      const msg = getErrorMessage(error, ' Fleet loading error, connect with us');

      onError?.(msg);

      dispatch({
        type: 'FETCH_ERROR',
        payload: getErrorMessage(error, msg),
      });
    }
  }, []);

  const updateAircraft = useCallback(async (id: number, payload: AircraftFleet) => {
    dispatch({ type: 'FETCH_START' });
    abortRef.current?.abort();
    abortRef.current = new AbortController();
    try {
      const res = await apiClient.put<AircraftFleet>(`/aircrafts/${id}`, payload);

      const normalizedResponse = normalizeAircraftFleet(res.data);

      dispatch({ type: 'UPDATE_SUCCESS', payload: normalizedResponse });
    } catch (error: unknown) {
      if (isAbortError(error)) return;
      const msg = getErrorMessage(error, 'Fleet loading error, connect with');

      onError?.(msg);

      dispatch({
        type: 'FETCH_ERROR',
        payload: getErrorMessage(error, msg),
      });
    }
  }, []);

  useEffect(() => {
    fetchFleet();
    return () => abortRef.current?.abort();
  }, [fetchFleet]);

  const resetError = useCallback(() => dispatch({ type: 'RESET_ERROR' }), []);

  return {
    data: state.data,
    status: state.status,
    error: state.error,
    fetchFleet,
    updateAircraft,
    resetError,
    isLoading: state.status === 'loading',
    isError: state.status === 'error',
    isSuccess: state.status === 'success',
  };
}
