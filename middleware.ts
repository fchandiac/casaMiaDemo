import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET || 'supersecretkey',
  });

  const path = req.nextUrl.pathname;
  const email = token?.email;

  if (!token) {
    // Si no hay sesión, permitir acceso solo a la raíz (donde está el splash/login)
    if (path === '/') {
      return NextResponse.next();
    }
    // Si intenta acceder a cualquier otra ruta, redirigir a la raíz
    return NextResponse.redirect(new URL('/', req.url));
  }

  // Redirección por email
  if (path === '/') {
    if (email === 'admin@casamia.com') {
      return NextResponse.redirect(new URL('/admin', req.url));
    }
    if (email === 'cliente@casamia.com') {
      return NextResponse.redirect(new URL('/client', req.url));
    }
  }

  // Proteger rutas admin
  if (path.startsWith('/admin') && email !== 'admin@casamia.com') {
    return NextResponse.redirect(new URL('/', req.url));
  }
  // Proteger rutas client
  if (path.startsWith('/client') && email !== 'cliente@casamia.com') {
    return NextResponse.redirect(new URL('/', req.url));
  }

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
