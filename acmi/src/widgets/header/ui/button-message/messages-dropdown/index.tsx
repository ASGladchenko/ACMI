import { NotificationsMessageType } from '../mock';

interface MessagesProps {
  onClose: () => void;
  data: NotificationsMessageType[];
}

export const MessagesDropDown = ({ data, onClose }: MessagesProps) => {
  return (
    <div className="h-full">
      <div className="scroll-bar-mini flex h-[calc(100%-34px)] flex-col overflow-y-scroll pr-3 pl-[15px]">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col gap-1.5 border-b border-[#E2E5EA] py-2 last:mb-1"
            >
              <span className="text-[15px] leading-[1.2]">{item.message}</span>
              <span className="text-text-additional text-xs leading-[1.2]">2 hours ago</span>
            </div>
          );
        })}
      </div>

      <button
        onClick={onClose}
        className="text-accent-normal flex w-full cursor-pointer items-center justify-center border-none px-[15px] py-2 text-[15px] leading-[1.2]"
      >
        Mark all as read
      </button>
    </div>
  );
};
