export interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  closeTimeoutMS?: number;
  contentClassName?: string;
  overlayClassName?: string;
  shouldCloseOnEsc?: boolean;
  shouldCloseOnOverlayClick?: boolean;
}
