import { HeroBanner, QuerySync } from '@/components';

export default function Layout({ children }: { children: React.ReactNode }) {
  console.log('Layout hero');
  return (
    <>
      <QuerySync />
      <HeroBanner isMainPage />

      <div className="w-full">{children}</div>
    </>
  );
}
