import { HeroFilterScrolled, SideFilter } from '@/components';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="laptop:px-[35px] mx-auto flex min-h-[calc(100dvh-467px)] max-w-[1440px] flex-row items-start bg-white px-4">
        <SideFilter />

        <HeroFilterScrolled />

        <div className="w-full">{children}</div>
      </div>
    </>
  );
}
