import { InfoItem } from './info-item';
import { mockGeneralInfo } from './mock';

export const GeneralInfo = ({}) => {
  return (
    <div className="desktop:justify-between desktop:gap-2 desktop:max-w-[1236px] mx-auto flex w-full flex-wrap justify-center gap-[12px_48px] py-11.5">
      {mockGeneralInfo.map((item) => (
        <InfoItem key={item.Title} {...item} />
      ))}
    </div>
  );
};
