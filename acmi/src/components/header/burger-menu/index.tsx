import { RemoveScroll } from 'react-remove-scroll';

import { Burger } from '@/assets/svg';
import { Button, ClientLink } from '@/components';

import { getStyles } from './style';

export interface BurgerMenuProps {
  isOpen: boolean;
  isProvider?: boolean;
  setIsOpen: (value: boolean) => void;
}

export const BurgerMenu = ({ isOpen, isProvider, setIsOpen }: BurgerMenuProps) => {
  const { menu } = getStyles(isOpen);

  return (
    <>
      <RemoveScroll enabled={isOpen} className="laptop:hidden">
        <button className="laptop:hidden group" onClick={() => setIsOpen(!isOpen)}>
          <Burger className="text-blue-dark group-hover:drop-shadow-link tablet:w-8 tablet:h-8 h-6 w-6 cursor-pointer duration-100" />
        </button>

        <div className={menu}>
          <ClientLink href="/" onClick={() => setIsOpen(!isOpen)}>
            Home
          </ClientLink>

          <ClientLink
            isDisabled={!isProvider}
            href="/dashboard-provider"
            onClick={() => setIsOpen(!isOpen)}
          >
            Provider Dashboard
          </ClientLink>

          <ClientLink isDisabled href="/dashboard-customer" onClick={() => setIsOpen(!isOpen)}>
            Customer Dashboard
          </ClientLink>

          <Button className="w-[182px]" buttonType="outline" onClick={() => setIsOpen(!isOpen)}>
            Login/ Registration
          </Button>
        </div>
      </RemoveScroll>
    </>
  );
};
