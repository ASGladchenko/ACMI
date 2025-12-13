import { RefObject, PropsWithChildren } from 'react';

export type ChildrenProps<T = unknown> = PropsWithChildren<T>;

export type OutsideClickRef = RefObject<HTMLElement | null> | RefObject<HTMLElement | null>[];

export enum Role {
  GUEST = 'guest',
  PROVIDER = 'provider',
  USER = 'user',
  ADMIN = 'admin',
}
