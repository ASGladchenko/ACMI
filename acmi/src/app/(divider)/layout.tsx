import { cookies } from 'next/headers';
import { ToastContainer } from 'react-toastify';

import { Role } from '@/types';
import { Header } from '@/components';

import { UserStoreLoader } from './user-store-loader';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const role = cookieStore.get('role')?.value as Role | undefined;

  return (
    <>
      <Header role={role} />

      <UserStoreLoader />

      <div className="min-h-[calc(100dvh-257px)]">{children}</div>
      <ToastContainer />
    </>
  );
}
