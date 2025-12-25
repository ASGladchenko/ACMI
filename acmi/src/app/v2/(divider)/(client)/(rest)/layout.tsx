import { cookies } from 'next/headers';

import { Header } from '@/widgets';
import { Role } from '@/shared/types';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const role = cookieStore.get('role')?.value as Role | undefined;

  return (
    <>
      <Header role={role} />
      {children}
    </>
  );
}
