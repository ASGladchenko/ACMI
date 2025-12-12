'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components';

export interface AuthBtnProps {
  url: string;
  text: string;
  Icon?: React.ReactNode;
}

export default function AuthBtn({ text, Icon, url }: AuthBtnProps) {
  const router = useRouter();

  return (
    <Button
      className="mx-[16px] flex max-w-[260px] items-center justify-between rounded-[4px]"
      onClick={() => router.replace(url)}
    >
      <span>{text}</span>
      {Icon && Icon}
    </Button>
  );
}
