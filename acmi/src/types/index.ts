import { PropsWithChildren } from 'react';

export type ChildrenProps<T = unknown> = PropsWithChildren<T>;

export type SearchParams = Record<string, string | string[] | undefined>;
