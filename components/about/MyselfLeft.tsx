import React from 'react'
import Image from 'next/image'
type Props = {}

const MyselfLeft = (props: Props) => {
  return (
    <div className='basis-1/2 flex justify-between px-5 flex-col h-full gap-3 mb-4'>
        <div className='text-3xl font-semibold flex justify-between'>
            <p>
                ABOUT ME
            </p>
            <p>
                關於我
            </p>
        </div>
       
        <div className='text-6xl flex justify-between flex-col'>
            <p>
                A FULL STACK 
            </p>
            <p className=' underline'>
                DEVELOPER.
            </p>
        </div>
        
        <div className='text-lg'>
            <p>
                My name is JIN（金鵬）, a noob full-stack developer. Born in 1998, currently live in Ireland. I have been working as a web developer for the past one years. In that time, I have gained experience in both back-end and front-end development. I have also worked on a wide range of projects, from small, simple websites to large, complex ones. My skills include HTML, CSS, JavaScript, React, and Node.js. Being a developer is cool, I love what I do and want to be in it for the rest of my life.
            </p>
           
        </div>
        
    </div>
  )
}

export default MyselfLeft