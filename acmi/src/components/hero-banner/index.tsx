import { HeroFilter } from '../filters';

export const HeroBanner = ({}) => {
  return (
    <section className="bg-blue-dark flex items-center justify-center bg-[url('../assets/svg/bg.svg')]">
      <div className="w-full max-w-[1440px] px-[35px] py-5.5">
        <h1 className="font-montserrat text-4xl leading-[60px] font-semibold text-white">
          Your One-Stop ACMI Marketplace
        </h1>

        <h2 className="mb-2.5 text-lg leading-5.5 font-bold text-white">
          Book, manage, and lease aircraft with ease
        </h2>

        <HeroFilter />
      </div>
    </section>
  );
};
