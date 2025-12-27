import { Switcher, SwitcherProps } from '../switcher';
import { BodySwitcher, BodySwitcherProps } from '../body-switcher';

type SwitcherIncomeProps = Omit<SwitcherProps, 'isActive' | 'onClick'>;
type BodySwitcherIncomeProps = Omit<BodySwitcherProps, 'isWide' | 'setIsWide'>;

type SwitcherStyleProps =
  | ({ styleType?: 'default' } & SwitcherIncomeProps)
  | ({ styleType: 'body' } & BodySwitcherIncomeProps);

export type AdapterSwitcherProps = {
  value: boolean;
  onChange: (value: boolean) => void;
} & SwitcherStyleProps;

export const AdapterSwitcher = ({ styleType, value, onChange, ...props }: AdapterSwitcherProps) => {
  switch (styleType) {
    case 'body':
      return <BodySwitcher isWide={value} setIsWide={onChange} {...props} />;
    default:
      return <Switcher isActive={value} onClick={onChange} {...props} />;
  }
};
