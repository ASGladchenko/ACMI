import Image, { StaticImageData } from 'next/image';

export interface InfoItemProps {
  text: string;
  Title: string;
  icon: StaticImageData;
}

export const InfoItem = ({ icon, Title, text }: InfoItemProps) => {
  return (
    <div className="desktop:max-w-[310px] desktop:items-start tablet:max-w-[calc(50%-10px)] flex w-full flex-col items-center gap-4">
      <div className="flex items-center">
        <Image src={icon} width={86} alt={Title} height={86} className="text-blue-dark" />

        <h3 className="text-blue-dark text-[18px] leading-[30px] font-bold">{Title}</h3>
      </div>

      <p className="text-gray-medium font-inter text-[16px] font-medium">{text}</p>
    </div>
  );
};
