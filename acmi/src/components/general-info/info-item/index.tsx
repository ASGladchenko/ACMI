export interface InfoItemProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  Title: string;
  text: string;
}

export const InfoItem = ({ Icon, Title, text }: InfoItemProps) => {
  return (
    <div className="flex max-w-[390px] flex-col items-center gap-4">
      <div className="flex flex-col">
        <Icon className="text-blue-dark mb-[2px] aspect-auto h-8 w-auto" />

        <h3 className="text-blue-dark text-[18px] leading-[30px] font-bold">{Title}</h3>
      </div>

      <p className="text-gray-medium font-inter text-[14px] font-medium">{text}</p>
    </div>
  );
};
