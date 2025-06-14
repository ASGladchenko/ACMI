import { Footer } from '@/components';

import { ProviderSideMenu } from './components';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section className="mx-auto min-h-[calc(100vh-322px)] max-w-[1440px] min-[568px]:min-h-[calc(100dvh-312px)] min-[768px]:min-h-[calc(100dvh-320px)] min-[1024px]:min-h-[calc(100dvh-260px)]">
        <div className="flex">
          <ProviderSideMenu />
          <div className="w-full pt-10"> {children}</div>
        </div>
      </section>

      <Footer />
    </>
  );
}
