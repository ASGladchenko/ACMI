import { Logo } from '@/shared/assets';
import { FooterEmail } from '../footer-email';
import { FooterLink } from '../footer-link';

export const Footer = ({}) => {
  return (
    <footer className="bg-footer w-full p-5">
      <div className="container">
        <div className="tablet:items-baseline flex items-center justify-between">
          <Logo className={'desktop:w-52 desktop:h-5 h-3 w-[120px] shrink-0 text-white'} />

          <div className="flex flex-col gap-[5px]">
            <p className="text-[15px] leading-[1.2] text-white/40">Contacts</p>
            <FooterEmail />
          </div>
        </div>

        <div className="mob-lg:py-5 desktop:py-[30px] w-full py-[15px]">
          <span className="bg-footer-secondary block h-px w-full"></span>
        </div>

        <div className="mob-lg:flex-row mob-lg:items-center mob-lg:justify-between flex flex-col items-start justify-center gap-2.5">
          <div className="tablet:gap-[30px] flex gap-5">
            <FooterLink className="" href="/">
              Terms of service
            </FooterLink>

            <FooterLink className="" href="/">
              Privacy policy
            </FooterLink>
          </div>

          <p className="laptop:text-[15px] text-xs leading-[1.2] text-white/40">
            &copy; {new Date().getFullYear()} ACMI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
