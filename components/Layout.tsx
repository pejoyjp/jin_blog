
import React, { useState } from 'react'
import Navbar from './navbar/Navbar'
import { Poppins } from 'next/font/google'
import { useRecoilValue } from 'recoil'
import { darkModeState } from '@/store/atoms/darkMode'




const poppins = Poppins({
  weight: ['300','400','500','600','700'],
  subsets: ['latin'],
})

type Props = {
    children:React.ReactNode,

    
}
const Layout:React.FC<Props> = ({children}) => {
  const darkMode = useRecoilValue(darkModeState)

  
  return (
   
      <main className= {`${poppins.className} ${darkMode ? 'dark' : ''} bg-stone-200
                           min-h-screen flex flex-col`} >
        <Navbar />
   
        <div className='pt-16' >
          {children}
        </div>
          
      </main>
    
  )
}

export default Layout