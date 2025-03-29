import React from 'react';

export interface ISelectOption {
  text: string;
  value: string | number;
  [key: string]: unknown;
}

export interface IRenderSelectedProps {
  option: ISelectOption | ISelectOption[] | null;
  placeholder?: string;
  isOpen?: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export interface IRenderOptionsProps {
  isOpen?: boolean;
  options: ISelectOption[];
  setIsOpen: (isOpen: boolean) => void;
}

export interface SelectLogicWrapperProps {
  className?: string;
  isLoading?: boolean;
  placeholder?: string;
  isDisabled?: boolean;
  listClassName?: string;
  options: ISelectOption[];
  selectedOption: ISelectOption | ISelectOption[] | null;
  renderOptions: ({ options, isOpen, setIsOpen }: IRenderOptionsProps) => React.ReactNode;
  renderSelected: ({ option, placeholder, isOpen }: IRenderSelectedProps) => React.ReactNode;
}
