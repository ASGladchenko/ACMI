import { RefObject, PropsWithChildren } from 'react';

export type ChildrenProps<T = unknown> = PropsWithChildren<T>;

export type OutsideClickRef = RefObject<HTMLElement | null> | RefObject<HTMLElement | null>[];

export type AnimationState = 'mounting' | 'mounted' | 'unmounting' | 'unmounted';

export type ModalCallbackAnimationState = (animation: AnimationState) => string;

export enum Role {
  GUEST = 'guest',
  PROVIDER = 'provider',
  USER = 'user',
  ADMIN = 'admin',
}
