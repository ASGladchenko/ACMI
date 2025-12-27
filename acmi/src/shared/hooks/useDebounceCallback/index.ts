'use client';

import { useCallback, useEffect, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyFn = (...args: any[]) => void;

type DebouncedFn<T extends AnyFn> = ((...args: Parameters<T>) => void) & {
  cancel: () => void;
  flush: () => void;
};

export const useDebouncedCallback = <T extends AnyFn>(
  callback: T,
  delay: number
): DebouncedFn<T> => {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastArgsRef = useRef<Parameters<T> | null>(null);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const cancel = useCallback(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
      lastArgsRef.current = null;
    }
  }, []);

  const flush = useCallback(() => {
    if (timeoutRef.current !== null && lastArgsRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;

      callbackRef.current(...lastArgsRef.current);
      lastArgsRef.current = null;
    }
  }, []);

  const debounced = useCallback(
    (...args: Parameters<T>) => {
      lastArgsRef.current = args;

      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        callbackRef.current(...(lastArgsRef.current || args));
        timeoutRef.current = null;
        lastArgsRef.current = null;
      }, delay);
    },
    [delay]
  ) as DebouncedFn<T>;

  debounced.cancel = cancel;
  debounced.flush = flush;

  useEffect(() => {
    return cancel;
  }, [cancel]);

  return debounced;
};
