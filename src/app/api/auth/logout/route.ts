import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const rediredtUrl = new URL('/', request.url)

  return NextResponse.redirect(rediredtUrl, {
    headers: {
      'Set-Cookie': `token=; Path=/; max-age=0`,
    },
  })
}
