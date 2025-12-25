import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { Role } from './types';

export function middleware(request: NextRequest) {
  const role = request.cookies.get('role')?.value;

  const isProvider = role === Role.PROVIDER;
  const isClient = role === Role.USER;
  const isGuest = role === Role.GUEST;
  const isAdmin = role === Role.ADMIN;

  const withRole = isProvider || isClient || isGuest || isAdmin;

  const withIntegration = isProvider || isClient || isAdmin;

  const isRoleWithCD = isProvider || isClient;

  const { pathname } = request.nextUrl;

  if (!withRole && !pathname.startsWith('/auth')) {
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  if (withRole && pathname.startsWith('/auth')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (!withIntegration && pathname.startsWith('/integration')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (!isRoleWithCD && pathname.startsWith('/dashboard-customer')) {
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
