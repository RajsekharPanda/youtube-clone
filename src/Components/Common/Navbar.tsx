"use client"
import React from 'react'
import Image from 'next/image'
import SearchBar from '../SearchBar'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='flex  justify-between'>
      <Link href="/" passHref>
        <div className='flex justify-center items-center gap-2'>
          <Image
            src="/youtube-brands-solid.svg"
            width={50}
            height={50}
            alt="Logo"
          />
          <div className='text-white'>Youtube</div>
        </div>
      </Link>
      <div className='text-white'>
        <SearchBar />
      </div>
      <div className='text-white '>profile dropdown</div>
    </div >
  )
}

export default Navbar

