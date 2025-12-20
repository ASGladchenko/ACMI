import { Styles } from 'react-modal';

import { ModalCallbackAnimationState } from '@/shared/types';

export type ModalProps = {
  style?: Styles;
  isOpen: boolean;
  duration?: number;
  onClose?: () => void;
  contentClassName?: string;
  overlayClassName?: string;
  shouldCloseOnEsc?: boolean;
  shouldCloseOnOverlayClick?: boolean;
  className?: string | ModalCallbackAnimationState;
  contentRef?: ((instance: HTMLDivElement) => void) | undefined;
};
