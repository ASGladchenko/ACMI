import { RefObject, useEffect } from 'react';

type OutsideClickRef = RefObject<HTMLElement | null> | RefObject<HTMLElement | null>[];

export const useOutsideClick = (callback: () => void, refs: OutsideClickRef) => {
  const refArray = Array.isArray(refs) ? refs : [refs];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      const activeRefs = refArray.filter((ref) => ref?.current);
      const isClickInside = activeRefs.some((ref) => ref.current!.contains(target));
      if (!isClickInside) {
        callback();
      }
    };

    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [callback, ...refArray.map((r) => r?.current)]);
};
