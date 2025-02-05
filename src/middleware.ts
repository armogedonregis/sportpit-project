import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Разрешаем только главную страницу и статические ресурсы
  if (
    request.nextUrl.pathname === '/' || 
    request.nextUrl.pathname.startsWith('/_next/') ||
    request.nextUrl.pathname.startsWith('/images/')
  ) {
    return NextResponse.next()
  }

  // Перенаправляем все остальные запросы на главную
  return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: '/:path*',
} 