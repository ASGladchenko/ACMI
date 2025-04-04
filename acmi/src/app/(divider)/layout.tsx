import Link from 'next/link';

import { Footer, Header } from '@/components';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100dvh-257px)]">{children}</div>

      <Link
        className="bg-blue-dark hover:text-blue-dark hover:border-blue-dark fixed right-[30px] bottom-[80px] rounded-xl border border-white p-3 text-white duration-150 hover:bg-white"
        href="/components"
      >
        Components
      </Link>
      <Footer />
    </>
  );
}
