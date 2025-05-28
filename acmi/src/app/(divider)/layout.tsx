import { cookies } from 'next/headers';
import { ToastContainer } from 'react-toastify';

import { Header } from '@/components';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const provider = cookieStore.get('provider')?.value;

  return (
    <>
      <Header isProvider={!!provider} />
      <div className="min-h-[calc(100dvh-257px)]">{children}</div>
      <ToastContainer />
    </>
  );
}
