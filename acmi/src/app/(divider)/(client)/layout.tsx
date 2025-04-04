import { FiltersProvider } from '@/context';
import { AdvancedSearch, HeroBanner, SideFilter } from '@/components';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FiltersProvider>
        <HeroBanner />
        <div className="laptop:px-[35px] mx-auto flex min-h-[calc(100dvh-467px)] max-w-[1440px] flex-row items-start bg-white px-4">
          <SideFilter />
          <AdvancedSearch />

          <div className="w-full">{children}</div>
        </div>
      </FiltersProvider>
    </>
  );
}
