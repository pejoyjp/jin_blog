import React, { useCallback } from 'react'
import Image from 'next/image'
import { db } from '@/firebase'
import { addDoc,collection } from "firebase/firestore";
import { Posts } from '@/types';
import { useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import { darkModeState } from '@/store/atoms/darkMode';
import ReactLoading from "react-loading";
import { format } from 'date-fns';


const PostsItem:React.FC<Posts> = ({title,article,timestamp,id,username}) => {
    const darkMode = useRecoilValue(darkModeState)
    const router = useRouter()
    const date:Date = new Date(timestamp);
    const formattedDate = format(date, 'yyyy-MM-dd HH:ss');


    const goToPost = () =>{
        router.push(`/posts/${id}`)
    }

  

    return (
        <div onClick={goToPost}
            className={`border-b-[1px] p-3 flex ${darkMode?'border-b-gray-200':'border-b-slate-700'}
                        cursor-pointer hover:shadow-md justify-center`}>
            <div className='md:w-[700px] min-w-[300px]'>
                <div className='flex gap-5 mb-2'>
                <span>{username}</span>
                <span className='text-gray-500'>{formattedDate}</span>
                </div>
                <h1 className='font-semibold text-2xl'>{title}</h1>
                <p className={`${darkMode?' text-gray-300':'border-b-slate-700'} text-sm`}>{article.slice(0,250)}...</p>
            </div>
        {/* <Image src={'/pro.jpeg'} height={100} width={100} alt='' /> */}
        
        </div>
        
    )
}

export default PostsItem