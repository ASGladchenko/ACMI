export const notificationsMock = [
  {
    id: '1',
    message: 'John Smith has made changes to your proposal',
    createdAt: '2025-12-14T08:58:00Z',
    isRead: false,
  },
  {
    id: '2',
    message: 'You have new RFQ requests',
    createdAt: '2025-12-14T08:00:00Z',
    isRead: false,
  },
  {
    id: '3',
    message: 'You have new RFQ requests',
    createdAt: '2025-12-14T07:00:00Z',
    isRead: false,
  },
  {
    id: '4',
    message: 'Anna Brown has updated the pricing details',
    createdAt: '2025-12-13T18:40:00Z',
    isRead: true,
  },
  {
    id: '5',
    message: 'Your password was changed successfully',
    createdAt: '2025-12-13T15:10:00Z',
    isRead: true,
  },
  {
    id: '6',
    message: 'You have received a new RFQ request',
    createdAt: '2025-12-13T12:30:00Z',
    isRead: true,
  },
  {
    id: '7',
    message: 'Michael Lee added a comment to your proposal',
    createdAt: '2025-12-12T17:25:00Z',
    isRead: true,
  },
  {
    id: '8',
    message: 'New login from an unrecognized device',
    createdAt: '2025-12-12T09:50:00Z',
    isRead: true,
  },
  {
    id: '9',
    message: 'You have new RFQ requests',
    createdAt: '2025-12-11T14:05:00Z',
    isRead: true,
  },
  {
    id: '10',
    message: 'Your profile information was updated',
    createdAt: '2025-12-10T11:20:00Z',
    isRead: true,
  },
];

export type NotificationsMessageType = (typeof notificationsMock)[number];
