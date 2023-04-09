
import { Inter } from 'next/font/google'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  useEffect(()=>{
    router.push('/about')
  },[])
  return (
   <div className='flex justify-center flex-col'>

   </div>
  )
}
