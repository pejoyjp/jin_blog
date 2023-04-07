import { darkModeState } from '@/store/atoms/darkMode'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { AiFillGithub,AiFillInstagram,AiTwotoneMail,AiOutlineTwitter,AiFillWechat } from 'react-icons/ai'
import Image from 'next/image'

type Props = {}

const MyselfRight = (props: Props) => {
    const darkMode = useRecoilValue(darkModeState)
  return (
    <div className={`basis-1/2 flex justify-between px-5 flex-col h-full gap-3 ${darkMode?'border-white':'border-black'}
                    border-t-[1px]  md:border-l-[1px] md:border-t-0`}
    >
        <div className='text-3xl font-semibold flex justify-between pt-5 md:pt-0'>
            <p>鏈接</p>
            <p>LINKS/2023</p>
        </div>
        <div className='flex justify-between items-center flex-col md:flex-row mt-4
                        
        '>
            <div className={`${darkMode?"border-white ":"border-black "} border-b-[1px] pb-2 md:border-0`}>
                <Image src='/ningzhi.png' height={300} width={500} alt=''
                    className={`${darkMode?"":"filter brightness-0 grayscale-100 invert-100"}`}
                />
            </div>

            <div className='flex gap-16 overflow-scroll w-[220px] mt-5 
                            md:flex-col  md:h-[600px] md:w-[100px]'
            >
                <button>
                    <AiFillGithub size={80}/>
                </button>

                <button>
                    <AiFillInstagram size={80}/>
                </button>

                <button>
                    <AiOutlineTwitter size={80}/>
                </button>

                <button>
                    <AiFillWechat size={80}/>
                </button>

                <button>
                    <AiTwotoneMail size={80}/>
                </button>
            </div>
        </div>
        
       
    </div>
  )
}

export default MyselfRight