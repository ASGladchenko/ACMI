import { HeroBanner, SideFilter } from '@/components';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeroBanner />
      <div className="mx-auto flex min-h-[calc(100dvh-467px)] max-w-[1440px] flex-row items-start bg-white pl-[35px]">
        <SideFilter />
        <div className="w-full">{children}</div>
      </div>
    </>
  );
}
