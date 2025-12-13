import { Role } from '@/shared/types';
import { Header } from '@/widgets';
import { cookies } from 'next/headers';

export default async function Home() {
  const cookieStore = await cookies();
  const role = cookieStore.get('role')?.value as Role | undefined;

  return (
    <>
      <Header role={role} isMain />
    </>
  );
}
