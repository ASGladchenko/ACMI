import { appendClassIcon } from '@/shared/utils';
import { Logo, homePlane } from '@/shared/assets';

import { configInfo } from './config';

export const HomePage = () => {
  return (
    <div className="w-full">
      <div
        className="tablet:h-[640px] tablet:bg-position-[78%_0%] laptop:bg-position-[83%_0%] desktop:aspect-2/1 desktop:h-[740px] relative h-[740px] w-full bg-cover bg-position-[58%_0%] bg-no-repeat min-[1921px]:h-screen min-[1921px]:bg-center"
        style={{ backgroundImage: `url(${homePlane.src})` }}
      >
        <div className="desktop:pb-[70px] desktop:gap-[325px] tablet:flex-row tablet:items-end container flex h-full flex-col justify-between pt-[100px] pb-10">
          <h1 className="min-[1921px]:text-shadow-text-primary tablet:max-w-[380px] laptop:text-[36px] desktop:text-[48px] desktop:max-w-[555px] text-[32px] leading-[1.2] font-bold text-white min-[1921px]:text-shadow-md">
            ACMI Connections at the Speed of Data
          </h1>
          <div className="bg-accent-interactions-dark rounded-2xl2 tablet:max-w-[380px] laptop:max-w-[450px] desktop:max-w-[420px] h-[485px] w-full"></div>
        </div>
      </div>

      <div className="desktop:py-[100px] laptop:flex-row desktop:gap-[130px] laptop:justify-between container flex flex-col gap-10 px-5 py-[60px]">
        <div className="tablet:gap-[25px] flex w-full flex-col gap-[15px]">
          <h2 className="mob-lg:leading-[1.4] desktop:text-[28px] text-2xl leading-[1.3] font-medium">
            <Logo className="text-accent-normal mr-2 inline-block h-5 w-[210px]" />
            — Is a data-driven ACMI marketplace powered by real-time integrations with aircraft
            operators. Live availability, intelligent filters, and direct communication tools enable
            faster decisions and smarter fleet deployment.
          </h2>

          <h3 className="text-text-secondary desktop:text-[20px]">
            We are a service that puts safety and trust first. Every aircraft is inspected, every
            owner is verified, and every booking is supported by professional assistance. We create
            an environment where private aviation rental becomes simple and secure for all
            participants.
          </h3>
        </div>

        <div className="mob-lg:gap-y-10 mob-lg:grid mob-lg:grid-cols-2 desktop:gap-x-10 laptop:max-w-[calc(50%-10px)] flex flex-col gap-[30px]">
          {configInfo.map((item) => (
            <div
              className="mob-lg:flex-col mob-lg:gap-5 desktop:gap-[25px] flex gap-[25px]"
              key={item.title}
            >
              {appendClassIcon(
                item.icon,
                'w-[48px] h-[48px] text-accent-normal shrink-0 mob-lg:w-16 mob-lg:h-16 desktop:w-[80px] desktop:h-[80px]'
              )}

              <div className="flex flex-col gap-2.5">
                <h4 className="desktop:text-[20px] desktop:leading-[1.4] leading-[1.3] font-semibold">
                  {item.title}
                </h4>
                <p className="text-text-secondary">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
