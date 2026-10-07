import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import NavLinks from './NavLinks'

const Header = () => {
  const data = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  })

  return (
    <header className='sticky top-0 z-50 border-b bg-white backdrop-blur px-6 py-2'>
      <div className='grid grid-cols-3 items-center max-w-7xl mx-auto'>

        {/* Left Space (খালি রাখা হয়েছে যাতে সেন্টারিং ঠিক থাকে) */}
        <div></div>

        {/* Center: Logo & Title */}
        <div className='flex items-center justify-center gap-3'>
          <Link href="/" className='flex shrink-0 items-center gap-2'>
            <Image
              src="/logo.webp"
              alt='News-Bangla-24-Logo'
              width={45}
              height={45}
              priority
            />
          </Link>
          <Link
          href="/"
          >

            <div className='flex flex-col'>
              <div className='text-[#C62D3F] font-serif text-2xl font-bold leading-tight cursor-pointer'>
                Bangla News 24
              </div>
              <div className='text-[#6d7072] text-[12px]'>
                {data}
              </div>
            </div>
          </Link>
        </div>

        {/* Right: Auth Buttons */}
        <div className='flex items-center justify-end gap-2'>
          <Button variant="ghost" className="text-gray-700 hover:bg-transparent text-black cursor-pointer">
            সাইন ইন
          </Button>
          <Button variant="destructive" className="bg-[#C10007] hover:bg-[#a82433] text-white cursor-pointer">
            সাইন আপ
          </Button>
        </div>

      </div>


      <NavLinks></NavLinks>
    </header>
  )
}

export default Header