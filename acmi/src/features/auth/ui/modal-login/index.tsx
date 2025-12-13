import { Modal } from '@/shared/ui';

export const ModalLogin = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return <Modal isOpen={isOpen} onClose={onClose}></Modal>;
};
