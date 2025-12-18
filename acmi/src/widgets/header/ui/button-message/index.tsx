'use client';

import { useRef } from 'react';

import { useSelect } from '@/shared/hooks';
import { Notification } from '@/shared/assets';
import { DropdownList, HeaderButton } from '@/shared/ui';

import { MessagesDropDown } from './messages-dropdown';
import { notificationsMock, NotificationsMessageType } from './mock';

const duration = 330;

export const ButtonMessage = ({}) => {
  const buttonRef = useRef<HTMLDivElement>(null);

  const { isOpen, animation, onToggleSelect } = useSelect({
    refs: buttonRef,
    delayUnmount: duration,
    outSideClick: () => {
      onToggleSelect(false);
    },
  });

  return (
    <div className="relative" ref={buttonRef}>
      <HeaderButton
        isActive={isOpen}
        isMessage={notificationsMock.length > 0}
        onClick={() => onToggleSelect(!isOpen)}
        leftIcon={<Notification width={20} height={20} />}
      />

      <DropdownList<NotificationsMessageType>
        height={273}
        animation={animation}
        data={notificationsMock}
        animationDuration={duration}
        containerClassName="flex flex-col"
        className="right-0 mt-1 w-[280px] pr-1"
        renderArray={(data) => (
          <MessagesDropDown data={data} onClose={() => onToggleSelect(false)} />
        )}
      />
    </div>
  );
};
