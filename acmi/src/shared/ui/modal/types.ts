export interface ModalProps {
  isOpen: boolean;
  className?: string;
  onClose?: () => void;
  closeTimeoutMS?: number;
  contentClassName?: string;
  overlayClassName?: string;
  shouldCloseOnEsc?: boolean;
  shouldCloseOnOverlayClick?: boolean;
}
