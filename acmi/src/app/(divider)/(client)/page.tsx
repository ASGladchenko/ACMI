import { Footer, GeneralInfo } from '@/components';

export default async function Home() {
  return (
    <>
      <div className="laptop:px-[35px] mx-auto min-h-[calc(100dvh-467px)] max-w-[1440px] flex-row items-start bg-white px-4 pt-[46px]">
        <GeneralInfo />
      </div>

      <Footer />
    </>
  );
}
