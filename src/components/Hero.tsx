import React from 'react'
import Image from 'next/image'
import nlmLogo from '../assets/nlw-spacetime-logo.svg'
import Link from 'next/link'

export function Hero() {
  return (
    <div className="space-y-5">
      <Image src={nlmLogo} alt="NLW Spacetime" />
      <div className="max-w-[420px] space-y-1">
        <h1 className="text-5xl font-bold leading-tight">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed">
          Uma cápsula do tempo construída com React, NextJs, Tailwindcss e
          Typescript
        </p>
      </div>
      <Link
        href="/memories/new"
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt uppercase leading-none text-black hover:bg-green-600"
      >
        CADASTRAR LEMBRANçA
      </Link>
    </div>
  )
}
