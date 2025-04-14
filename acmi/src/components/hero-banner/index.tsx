'use client';

import { useRouter } from 'next/navigation';

import { HeroFilter } from '../filters';

export const HeroBanner = ({
  isMainPage,
}: {
  isMainPage?: boolean;
  searchParams?: URLSearchParams;
}) => {
  const router = useRouter();

  const handleFind = () => {
    // TODO Validation

    if (isMainPage) {
      // TODO params to search page
      router.push(`/search?`);
    }
  };

  console.log('HeroBanner');
  return (
    <section className="bg-blue-dark flex items-center justify-center bg-[url('../assets/svg/bg.svg')] bg-[left_bottom]">
      <div className="laptop:px-[35px] w-full max-w-[1440px] px-5 py-5.5">
        <h1 className="font-montserrat tablet:text-left laptop:mb-0 tablet:text-4xl tablet:leading-[60px] mb-2.5 text-center text-2xl leading-[120%] font-semibold text-white min-[390px]:text-3xl">
          Your One-Stop ACMI Marketplace
        </h1>

        <h2 className="tablet:text-left mb-2.5 text-center text-lg leading-5.5 font-bold text-white">
          Book, manage, and lease aircraft with ease
        </h2>

        <HeroFilter onFind={handleFind} portalId="calendar-hero" />
      </div>
    </section>
  );
};
