import { StrikethroughIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface Nav {
    slug: string
    title: string
    topicId: string | null
    url: string
    scrapable: boolean
}

const NavLinks = async() => {
    const res = await fetch("https://news-api-v2.vercel.app/api/categories")
    const data = await res.json()
    const navLink: Nav[] = data.data
    const filteredNav = navLink.filter((n) => n.scrapable)
  return (
    <div
    className='flex gap-5 justify-center pt-5 '
    >
      {filteredNav.map(
        (n, i) => <Link href={n.slug} key={i} className='hover:text-[#FC4232]'>{n.title}</Link>
      )}
    </div>
  )
}

export default NavLinks
