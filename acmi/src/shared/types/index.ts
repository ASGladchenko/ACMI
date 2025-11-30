import { RefObject, PropsWithChildren } from 'react';

export type ChildrenProps<T = unknown> = PropsWithChildren<T>;

export type OutsideClickRef = RefObject<HTMLElement | null> | RefObject<HTMLElement | null>[];
