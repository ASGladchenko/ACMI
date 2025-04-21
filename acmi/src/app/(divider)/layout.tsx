import { ToastContainer } from 'react-toastify';

import { Header } from '@/components';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100dvh-257px)]">{children}</div>
      <ToastContainer />
    </>
  );
}
