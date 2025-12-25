import { cn } from '@/shared/utils';
import { Cross } from '@/shared/assets';
import { ChildrenProps } from '@/shared/types';

import { Modal } from '../modal';

interface ModalGeneralProps {
  title: string;
  isOpen: boolean;
  className?: string;
  onClose: () => void;
  isCloseable?: boolean;
}

export const ModalGeneral = ({
  title,
  isOpen,
  onClose,
  children,
  className,
  isCloseable = true,
}: ChildrenProps<ModalGeneralProps>) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={cn('rounded-lg2 w-full bg-white p-4', className)}>
        <div className="mb-[25px] flex items-center justify-between">
          <h4 className="tablet:text-[28px] tablet:leading-[1.3] text-2xl leading-[1.2] font-bold">
            {title}
          </h4>

          {isCloseable && (
            <button className="button-reset" onClick={onClose} aria-label="Close modal">
              <Cross className="text-text-secondary transition-scale h-6 w-6 cursor-pointer duration-300 ease-in-out hover:scale-110" />
            </button>
          )}
        </div>
        {children}
      </div>
    </Modal>
  );
};
