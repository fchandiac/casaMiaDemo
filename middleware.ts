import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET || 'supersecretkey',
  });

  console.log('Middleware - Path:', req.nextUrl.pathname);
  console.log('Middleware - Token:', token);

  if (!token) {
    console.log('No token found, redirecting to /');
    return NextResponse.redirect(new URL('/', req.url));
  }

  // Permitir acceso basado en roles
  const path = req.nextUrl.pathname;
  
  // Redirección específica para admin en la raíz del sitio
  if (path === '/' && token.role === 'admin') {
    console.log('Admin user detected, redirecting to /admin');
    return NextResponse.redirect(new URL('/admin', req.url));
  }

  // Rutas protegidas para admin
  if (path.startsWith('/admin')) {
    console.log('Admin path accessed, user role:', token.role);
    if (token.role !== 'admin') {
      console.log('Access denied for admin path');
      return NextResponse.redirect(new URL('/', req.url));
    }
  }
  
  // Rutas protegidas para operadores
  if (path.startsWith('/operator') && token.role !== 'operator' && token.role !== 'admin') {
    return NextResponse.redirect(new URL('/', req.url));
  }
  
  // Rutas protegidas para usuarios normales
  if (path.startsWith('/user') && token.role !== 'user' && token.role !== 'admin') {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // Rutas protegidas para clientes
  if (path.startsWith('/client') && token.role !== 'client' && token.role !== 'admin') {
    return NextResponse.redirect(new URL('/', req.url));
  }

  console.log('Access granted for path:', path);
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/operator/:path*',
    '/user/:path*',
    '/client/:path*'
  ],
};
