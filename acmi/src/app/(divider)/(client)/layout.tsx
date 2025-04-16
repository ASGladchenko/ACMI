import { Suspense } from 'react';

import { HeroBanner, QuerySync } from '@/components';

export default function Layout({ children }: { children: React.ReactNode }) {
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
