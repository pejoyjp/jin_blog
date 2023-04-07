// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/firebase';
import { doc, getDoc } from "firebase/firestore";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method !== "GET"){
    return res.status(405).end()
  }
  try{
    const {postId} = req.query
    if(!postId || typeof postId !== "string"){
        throw new Error("Invalid Id")
    }

    const docRef = doc(db, "posts", postId as string);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const post = docSnap.data()
        return res.status(200).json(post)
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }

  }catch(e){
    console.log(e);
    return res.status(400).end();
  }
}
