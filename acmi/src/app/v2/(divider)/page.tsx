import { cookies } from 'next/headers';

import { Role } from '@/shared/types';
import { Footer, Header } from '@/widgets';

import { HomePage } from './home';

export default async function Home() {
  const cookieStore = await cookies();
  const role = cookieStore.get('role')?.value as Role | undefined;

  return (
    <>
      <Header role={role} isMain />
      <HomePage />

      <Footer />
    </>
  );
}
