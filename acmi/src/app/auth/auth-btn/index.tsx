'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components';
import { authUrl } from '@/constants/url';

export default function AuthBtn() {
  const router = useRouter();

  console.log({ authUrl });

  return (
    <Button
      className="mx-[16px] max-w-[260px] rounded-[4px]"
      onClick={() => router.replace(authUrl)}
    >
      Login
    </Button>
  );
}
