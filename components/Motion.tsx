import React from 'react'
import { motion } from 'framer-motion'
type Props = {
    children:React.ReactNode,
    onClick?:()=>void
    height?:number,
    width?:number
}

const Motion:React.FC<Props> = ({children,onClick,height,width}) => {
  return (
    <motion.div
        style={{height:`${height}px`,width:`${width}px`}}
        onClick={onClick}
        whileHover={{ scale: [null, 1.5, 1.4] }}
        transition={{ duration: 0.3 }}>
        {children}
    </motion.div>
  )
}

export default Motion