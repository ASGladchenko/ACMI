import { Styles } from 'react-modal';

import { ModalCallbackAnimationState } from '@/shared/types';

export type ModalProps = {
  id?: string;
  style?: Styles;
  isOpen: boolean;
  duration?: number;
  onClose: () => void;
  contentClassName?: string;
  overlayClassName?: string;
  shouldCloseOnEsc?: boolean;
  shouldCloseOnOverlayClick?: boolean;
  shouldReturnFocusAfterClose?: boolean;
  className?: string | ModalCallbackAnimationState;
  contentRef?: ((instance: HTMLDivElement) => void) | undefined;
};
