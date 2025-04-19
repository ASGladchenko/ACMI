import { InfoItem } from './info-item';
import { mockGeneralInfo } from './mock';

export const GeneralInfo = ({}) => {
  return (
    <>
      <h1 className="font-montserrat text-blue-dark text-center text-[25px] leading-[30px] font-bold">
        What Sets Us Apart
      </h1>

      <div className="desktop:justify-between desktop:gap-10 desktop:max-w-[1440px] mx-auto flex w-full flex-wrap gap-5 py-11.5">
        {mockGeneralInfo.map((item) => (
          <InfoItem key={item.Title} {...item} />
        ))}
      </div>
    </>
  );
};
