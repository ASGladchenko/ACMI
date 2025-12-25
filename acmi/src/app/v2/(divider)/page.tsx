import { cookies } from 'next/headers';

import { Role } from '@/shared/types';
import { Footer, Header } from '@/widgets';

import { HomePage } from './ui';

export default async function Home() {
  const cookieStore = await cookies();
  const role = cookieStore.get('role')?.value as Role | undefined;

  return (
    <div className="relative z-0">
      <Header role={role} isMain className="z-1" />

      <HomePage />

      <Footer />
    </div>
  );
}
