import React from 'react'
import MyselfLeft from './MyselfLeft'
import MyselfRight from './MyselfRight'

type Props = {}

const AboutPage = (props: Props) => {
  return (
    <div className='flex md:h-5/6 md:flex-row flex-col'>
        <MyselfLeft/>
        <MyselfRight/>
    </div>
  )
}

export default AboutPage