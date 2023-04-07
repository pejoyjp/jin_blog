import { darkModeState } from '@/store/atoms/darkMode'
import React from 'react'
import {CiDark} from 'react-icons/ci'
import { CiLight } from 'react-icons/ci'
import { useRecoilState } from 'recoil'

type Props = {}

const DarkMode = (props: Props) => {
    const [darkMode,setDarkMode] = useRecoilState(darkModeState)
    return (
        <div onClick={()=>setDarkMode(!darkMode)}
            className=' cursor-pointer '
        >
            {
                darkMode? <CiLight size={30}/>
                :<CiDark size={30}/>
            }
        </div>
    )
}

export default DarkMode