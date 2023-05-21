import { api } from '@/libs/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  const rediretTo = request.cookies.get('redirectTo')?.value

  const registerResponse = await api.post('/register', {
    code,
  })
  const { token } = registerResponse.data

  const rediredtUrl = rediretTo ?? new URL('/', request.url)

  return NextResponse.redirect(rediredtUrl, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; max-age=2592000`,
    },
  })
}
