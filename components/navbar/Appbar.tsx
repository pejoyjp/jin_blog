import React from 'react'
import Link from 'next/link'
import { useRecoilState } from 'recoil'
import { writeState } from '@/store/atoms/write'


type Props = {
    col:boolean
}

const Appbar:React.FC<Props> = ({col}) => {
  

  return (
    <nav className={`${col?'block':'md:block hidden'}`}>
      <ul className={`flex ${col?'flex-col gap-2':'gap-12'}`}>
        <li className='hover:underline'>
          <Link href="/">
            Home
          </Link>
        </li>
        <li className='hover:underline'>
          <Link href="/about">About</Link>
        </li>
        <li className='hover:underline'>
          <Link href="/contact">Contact</Link>
        </li>
        <li className='hover:underline'>
          <Link href="/posts">Post</Link>
        </li>
        
      </ul>
    </nav>
  )
}

export default Appbar