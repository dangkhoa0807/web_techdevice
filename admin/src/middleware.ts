import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('refreshToken')

  if (!token) {
    // Chuyển hướng đến trang đăng nhập nếu không có token
    const loginUrl = new URL('/login', request.url)

    return NextResponse.redirect(loginUrl)
  }

  // Nếu có token, tiếp tục đến trang được yêu cầu
  return NextResponse.next()
}

export const config = {
  matcher: ['/home', '/AddProduct', '/dashboard'] // Các route cần kiểm tra đăng nhập
}
