import { PropsWithChildren } from 'react';

export type ChildrenProps<T = unknown> = PropsWithChildren<T>;

export type SearchParams<T = unknown> = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
} & T;

export * from './find-offers';

export type TypeFleet = 'aircraftTypes' | 'etops' | 'ilsCategory' | 'noiseStage';

export interface LayOutItem {
  seats: string;
  pitch: string;
}
