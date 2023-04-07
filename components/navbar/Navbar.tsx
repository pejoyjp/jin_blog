import React from 'react'
import Container from '../Container'
import Drawer from '../Drawer'
import DarkMode from '../DarkMode'
import {  useRecoilValue } from 'recoil'
import { darkModeState } from '@/store/atoms/darkMode'
import Appbar from './Appbar'

type Props = {
  
}

const Navbar:React.FC<Props> = ({}) => {
  const darkMode = useRecoilValue(darkModeState)
  
  return (
    <div className={`flex justify-center h-16  border-b-[1px] p-2 fixed w-full z-20 
    ${darkMode?'bg-gray-700 border-b-white':'bg-stone-200 border-b-black'}`}>
        <Container>
            <Appbar col={false}/>
            <DarkMode/>
            <Drawer/>
        </Container>
    </div>
    
  )
}

export default Navbar