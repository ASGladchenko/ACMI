'use client';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      redirect('/auth');
    }
  }, [token]);

  if (!token) {
    return null;
  }

  return <>{children}</>;
}
