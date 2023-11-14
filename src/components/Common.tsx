import Link from 'next/link'
import React, { type ReactNode} from 'react'
import Image from 'next/image'

interface CommonProps {
    children: ReactNode
}

export  function Common({children}: CommonProps) {
return (
    <div className="relative h-screen w-screen">
    <Image src="/bg.png" alt="backgrond image" fill={true}></Image>
      <Link
        href="/"
        className="absolute left-[100px] top-[80px]
         font-metropolis text-[27px] font-black leading-normal text-white"
      >
        musiquiz.co
      </Link>
      <Link
        href="/signin"
        className=" absolute right-[365px] top-[75px]
        font-metropolis text-[27px] font-black leading-normal text-white"
      >
        Sign In
      </Link>
      <Link
        href="/signout"
        className="absolute right-[180px] top-[75px]
        font-metropolis text-[27px] font-black leading-normal text-white"
      >
        Sign Out
      </Link>
      <main>
        {children}
      </main>
    </div>
)
}