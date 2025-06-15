import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { Role } from './types';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('session_id')?.value;

  const role = request.cookies.get('role')?.value;
  const isProvider = role === Role.PROVIDER;

  const { pathname } = request.nextUrl;

  if (!token && !pathname.startsWith('/auth')) {
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  if (token && pathname.startsWith('/auth')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (!isProvider && pathname.startsWith('/dashboard-provider')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/auth', '/((?!api|_next|.*\\..*).*)'],
};
