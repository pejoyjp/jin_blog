import React from 'react'

type Props = {
    children:React.ReactNode
}

const Container:React.FC<Props> = ({children}) => {
  return (
    <div className='w-[1280px] flex items-center justify-between'>
        {children}
    </div>
  )
}

export default Container