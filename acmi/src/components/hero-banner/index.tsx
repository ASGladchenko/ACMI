'use client';

import { useFind } from '@/hooks';

import { bannerText } from './config';
import { HeroFilter } from '../filters';
import { usePathname } from 'next/navigation';

export const HeroBanner = () => {
  const path = usePathname();

  const isMainPage = path === '/';

  const { handleFind } = useFind();

  const onFind = () => {
    if (isMainPage) {
      handleFind({ path: '/search' });
    } else {
      handleFind({ path: '' });
    }
  };

  return (
    <section className="bg-blue-dark flex items-center justify-center bg-[url('../assets/svg/bg.svg')] bg-[left_bottom]">
      <div className="laptop:px-[35px] w-full max-w-[1440px] px-5 py-5.5">
        <h1 className="font-montserrat tablet:text-left laptop:mb-0 tablet:text-4xl tablet:leading-[60px] mb-2.5 text-center text-2xl leading-[120%] font-semibold text-white min-[390px]:text-3xl">
          {bannerText[isMainPage ? 'true' : 'false'].title}
        </h1>

        <h2 className="tablet:text-left mb-2.5 text-center text-[25px] leading-5.5 font-bold text-white">
          {bannerText[isMainPage ? 'true' : 'false'].subtitle}
        </h2>

        <HeroFilter withButton={isMainPage} onFind={onFind} portalId="calendar-hero" />
      </div>
    </section>
  );
};
