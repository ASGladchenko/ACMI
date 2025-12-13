import { cn } from '@/utils';
import { Modal } from '../modal';
import { ChildrenProps } from '@/shared/types';
import { Cross } from '@/shared/assets';

interface ModalGeneralProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  isCloseable?: boolean;
  className?: string;
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
      <div className={cn('rounded-lg2 w-full bg-white', className)}>
        <div className="mb-[25px] flex items-center justify-between p-4">
          <h4 className="text-6 tablet:text-[28px] tablet:leading-[1.3] leading-[1.2] font-bold">
            {title}
          </h4>

          {isCloseable && (
            <button className="button-reset" onClick={onClose} aria-label="Close modal">
              <Cross className="text-text-secondary transition-scale h-6 w-6 cursor-pointer duration-300 ease-in-out hover:scale-105" />
            </button>
          )}
        </div>

        {children}
      </div>
    </Modal>
  );
};
