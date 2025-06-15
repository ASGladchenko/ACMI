export const TitleDB = ({ title }: { title: string }) => {
  return (
    <h1 className="font-montserrat text-blue-deep mb-9 text-center text-[25px] font-bold max-[768px]:text-[20px] max-[768px]:leading-[24px]">
      {title}
    </h1>
  );
};
