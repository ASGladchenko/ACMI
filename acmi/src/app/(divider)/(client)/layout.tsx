import { Suspense } from 'react';

import { HeroBanner, QuerySync } from '@/components';

export default function Layout({ children }: { children: React.ReactNode }) {
  console.log('Layout hero');
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
