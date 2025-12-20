import { Button, ModalGeneral } from '@/shared/ui';

interface HeaderLeonModal {
  isOpen: boolean;
  onClose: () => void;
}

export const HeaderLeonModal = ({ isOpen, onClose }: HeaderLeonModal) => {
  return (
    <ModalGeneral
      isOpen={isOpen}
      onClose={onClose}
      title="Become a Provider"
      className="mob-lg:w-[440px] w-[calc(100dvw-20px)]"
    >
      <div className="rounded-lg2 flex flex-col gap-3">
        <Button>Connect</Button>
      </div>
    </ModalGeneral>
  );
};
