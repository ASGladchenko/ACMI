import { useEffect, useState } from 'react';

export const useDelay = <T>(value: T, delay: number): T | null => {
  const [delayedValue, setDelayedValue] = useState<T | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return delayedValue;
};
