import { HeroBanner } from '@/components';
import { FiltersProvider } from '@/context';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FiltersProvider>
        <HeroBanner />

        <div className="w-full">{children}</div>
      </FiltersProvider>
    </>
  );
}
