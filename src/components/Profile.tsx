import { getUser } from '@/libs/auth'
import Image from 'next/image'
import React from 'react'

export function Profile() {
  const { avatarUrl, name } = getUser()
  return (
    <div className="flex items-center gap-3 text-left ">
      <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-400">
        <Image src={avatarUrl} alt={name} width={40} height={40} />
      </div>
      <p className="max-w-[140px] text-sm font-semibold leading-snug">
        {name}
        <a
          href="/api/auth/logout"
          className="block text-xs font-normal text-red-400 hover:text-red-300"
        >
          Quero sair
        </a>
      </p>
    </div>
  )
}
