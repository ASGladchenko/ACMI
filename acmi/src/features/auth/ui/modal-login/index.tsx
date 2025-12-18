import { Button, ModalGeneral } from '@/shared/ui';
import { Google, Microsoft } from '@/shared/assets';

import { googleUrl, microsoftUrl } from '../../model/lib';

export const ModalLogin = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <ModalGeneral
      isOpen={isOpen}
      onClose={onClose}
      title="Authorization"
      className="mob-lg:w-[440px] w-[calc(100dvw-20px)]"
    >
      <Button
        className="mb-5"
        buttonType="outline"
        onClick={() => (window.location.href = googleUrl)}
      >
        <Google className="h-5 w-5 shrink-0" />
        Sign in with Google
      </Button>
      <Button buttonType="outline" onClick={() => (window.location.href = microsoftUrl)}>
        <Microsoft className="h-5 w-5 shrink-0" />
        Sign in with Microsoft
      </Button>
    </ModalGeneral>
  );
};
