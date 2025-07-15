import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  // Middleware sin lógica de login ni protección de rutas
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/client/:path*',
    '/operator/:path*',
    '/user/:path*',
    '/'
  ],
};
