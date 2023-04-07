// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/firebase';
import { addDoc, collection, getDocs, } from "firebase/firestore";
import { Posts } from '@/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method !== "POST" && req.method !== "GET"){
    return res.status(405).end()
  }
  try{

    if(req.method === "GET"){
      const querySnapshot = await getDocs(collection(db, "posts"));
      const posts:Posts[] = []
      querySnapshot.forEach((doc) => {
        const postsItem =  doc.data()
        postsItem.id = doc.id
        posts.push(postsItem as Posts,)
        
      });
      return res.status(200).json(posts)
    }

    if(req.method === "POST"){
      const post = req.body
      await addDoc(collection(db, "posts"),post);
      return res.status(200).json(post)

    }
      
    }catch(e){
    console.log(e);
    return res.status(400).end();
  }
}
