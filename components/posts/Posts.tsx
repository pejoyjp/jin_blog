import React, { useCallback } from 'react'

import PostsItem from './PostItem';

import PostNav from './PostNav';
import usePosts from '@/hooks/usePosts';
import ReactLoading from "react-loading";

type Props={

}
const Posts:React.FC<Props> = ({}) => {
  
  const {data:posts=[],isLoading} = usePosts()

  if(isLoading) return <ReactLoading type='balls' color="#fff" />
 
  
  return (
    <div className='flex justify-center w-full flex-col items-center '>
     
        <PostNav/>
        <div className='flex flex-col gap-5'>
          {
            posts.map((post:Record<string,any>,)=>(
              <PostsItem key={post.id} title={post.title} article={post.article} timestamp={post.timestamp} id={post.id} username={post.username}/>
            ))
          }
        </div>
      
 
    </div>
  )
}

export default Posts