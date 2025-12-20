import { useEffect, useRef, useState } from 'react';

export type AnimationState = 'unmounted' | 'mounting' | 'mounted' | 'unmounting';

interface UseDelayedMountConfig {
  delay?: number;
  exitDuration?: number;
  enterDuration?: number;
}

export function useDelayMount(
  isOpen: boolean,
  { delay = 1, enterDuration, exitDuration = 300 }: UseDelayedMountConfig = {}
) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [state, setState] = useState<AnimationState>('unmounted');

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (isOpen) {
      timeoutRef.current = setTimeout(() => {
        setState('mounting');

        requestAnimationFrame(() => {
          timeoutRef.current = setTimeout(() => {
            setState('mounted');
          }, enterDuration || exitDuration);
        });
      }, delay);
    } else {
      setState('unmounting');

      timeoutRef.current = setTimeout(() => {
        setState('unmounted');
      }, exitDuration);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isOpen, exitDuration, enterDuration, delay]);

  return {
    animationState: state,
    isMounted: state !== 'unmounted',
  };
}
