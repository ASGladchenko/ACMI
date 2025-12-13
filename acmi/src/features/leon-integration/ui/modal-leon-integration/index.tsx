import { Button, ModalGeneral } from '@/shared/ui';

export const ModalLeonIntegration = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <ModalGeneral
      isOpen={isOpen}
      onClose={onClose}
      title="Become a Provider"
      className="w-[calc(100dvw-20px)] mob-lg:w-[440px]"
    >
      <div className="rounded-lg2 flex flex-col gap-3 p-4">
        <Button>Connect</Button>
      </div>
    </ModalGeneral>
  );
};
