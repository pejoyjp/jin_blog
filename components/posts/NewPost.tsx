
import { darkModeState } from '@/store/atoms/darkMode'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useRecoilValue } from 'recoil'

type Props = {}

const NewPost = (props: Props) => {
    const darkMode = useRecoilValue(darkModeState)
    const router = useRouter()
    // #374151
    const [post,setPost] = useState({
      username:"",
      title:"",
      article:"",
      timestamp:"",
    })
    const handleClick = async()=>{
      try{
        if(post.title === "" || post.article === "" || post.username === ""){
          return toast.error("Empty input")
        }
        axios.post('/api/posts',{
          title:post.title,
          article:post.article,
          username:post.username,
          timestamp:Date.now(),
        })
        toast.success('post added')
        router.push('/posts')
        
        setPost({
          username:"",
          title:"",
          article:"",
          timestamp:"",
        })
        
        
        
      }catch(e){
        console.log(e);
        
      }
      
    }
  return (
    <div className='w-full flex justify-center'>
        <div className='w-11/12 md:w-[700px]'>
            <div className={`${darkMode ? 'dark' : ''} h-[400px] p-2  flex flex-col gap-2  mt-10 rounded-md `}>
                <input  onChange={(e)=>{setPost({...post,username:e.target.value})}} value={post.username}
                        type="text" placeholder='Username' className={`${darkMode ? 'dark' : ''} flex-1 p-2 text-lg focus:outline-none bg-stone-200`}/>
                <input  onChange={(e)=>{setPost({...post,title:e.target.value})}} value={post.title}
                        type="text" placeholder='Title' className={`${darkMode ? 'dark' : ''} flex-1 p-2 text-lg focus:outline-none bg-stone-200`}/>
                <textarea onChange={(e)=>{setPost({...post,article:e.target.value})}} value={post.article}
                          className={`${darkMode ? 'dark' : ''} h-full w-full p-2 text-sm focus:outline-none bg-stone-200 `}
                                        placeholder='Write something here'
                />
            </div>
            <div className='flex justify-end'>
                
                <button onClick={handleClick}
                        className='bg-green-500 py-1 px-3 rounded-3xl hover:bg-green-400'>
                    Publish
                </button>
            </div>
        </div>
        
    </div>
  )
}

export default NewPost