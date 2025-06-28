import { PropsWithChildren } from 'react';

export type ChildrenProps<T = unknown> = PropsWithChildren<T>;

export type SearchParams<T = unknown> = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
} & T;

export type TypeFleet = 'aircraftTypes' | 'etops' | 'ilsCategory' | 'noiseStage';

export interface LayOutItem {
  seats: string;
  pitch: string;
}

export enum Role {
  GUEST = 'guest',
  PROVIDER = 'provider',
  USER = 'user',
  ADMIN = 'admin',
}

export * from './aircraft-details';
export * from './find-offers';
export * from './rfq';
export * from './specification';
