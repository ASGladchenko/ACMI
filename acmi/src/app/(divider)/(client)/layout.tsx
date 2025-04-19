import { Suspense } from 'react';

import { ChildrenProps } from '@/types';
import { HeroBanner, QuerySync } from '@/components';

export default function Layout({ children }: ChildrenProps) {
  return (
    <>
      <Suspense fallback={null}>
        <QuerySync />
      </Suspense>

      <HeroBanner isMainPage />

      <div className="w-full">{children}</div>
    </>
  );
}
