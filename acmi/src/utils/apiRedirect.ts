import { redirect } from 'next/navigation';

export function apiRedirect(error: unknown) {
  if (error instanceof Error && error.message === 'Unauthorized') {
    redirect('/auth');
  }
}
