import { RefObject, PropsWithChildren } from 'react';

export type ChildrenProps<T = unknown> = PropsWithChildren<T>;

export type OutsideClickRef = RefObject<HTMLElement | null> | RefObject<HTMLElement | null>[];

export type LoadingStatus = 'idle' | 'loading' | 'success' | 'error';

export type AnimationState = 'mounting' | 'mounted' | 'unmounting' | 'unmounted';

export type ModalCallbackAnimationState = (animation: AnimationState) => string;

export type SelectOption = {
  label: string;
  id: string | number;
};

export enum Role {
  GUEST = 'guest',
  PROVIDER = 'provider',
  USER = 'user',
  ADMIN = 'admin',
}
