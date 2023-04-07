
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useCallback } from 'react'
import {CiStickyNote} from 'react-icons/ci'
import {AiOutlineSearch} from 'react-icons/ai'


type Props = {}

const PostNav = (props: Props) => {
  const router = useRouter()
 
  
  return (
    <div className='flex justify-between  md:w-[700px] w-[300px] mb-4 mt-2 items-center gap-3'>
        <div className='flex items-center rounded-lg bg-stone-300/50 px-2'>
            <div>
              <AiOutlineSearch size={20}/>
            </div>
            <input className='bg-transparent outline-none w-[200px] p-2' placeholder='search'/>
        </div>
        <Link href='/write'>
        <div className='flex items-center cursor-pointer text-lg hover:text-gray-500'>
          <CiStickyNote size={30}/>
          <span>Write</span>
        </div>
        </Link>
        
    </div>
  )
}

export default PostNav