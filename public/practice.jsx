import { useState } from "react"

const [like,setLike]=useState();
const [Liked,isLiked]=useState(false)


const likehandler=()=>{
  setLike(Liked?like-1:like+1)
  
}
