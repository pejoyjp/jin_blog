import usePost from '@/hooks/usePost'
import React from 'react'
import { useRouter } from 'next/router'
import ReactLoading from 'react-loading'

type Props = {}

const postView = (props: Props) => {
  const router = useRouter()
  const {postId} = router.query
  const {data:post,isLoading} = usePost(postId as string)
  const date:Date = new Date(post?.timestamp);
  
  if(isLoading) return <ReactLoading type='balls' color="#fff" />
  
  return (
    <div className='w-full flex justify-center p-4'>
      <div className='md:w-[700px] flex justify-center flex-col pt-10 w-11/12'>
        <div className='flex items-center gap-2'> 
          <p className='text-lg'>
            {post?.username}
          </p>
          <p className='text-sm'>
            {date.toString().slice(0,16)}
          </p>
        </div>
        
        <p className='text-xl font-semibold '>
          {post?.title}
        </p>
        <p>
          {post?.article}
        </p>
      </div>
    </div>
  )
}

export default postView