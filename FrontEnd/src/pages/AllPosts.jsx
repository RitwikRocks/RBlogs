import React, { useState, useEffect } from 'react'
import configuration from '../appwrite/configuration'
import { PostCard , Container} from '../components'



const AllPosts = () => {
  const[posts,setPosts] = useState([]);
  useEffect(()=>{
    configuration.getPosts([])
    .then((posts)=>{
        console.log(posts);
        if(posts){
          console.log(posts);
            setPosts(posts.documents);
        }
    })
  },[]);

  return (
    <div className='w-full py-8'>
    <Container>
        <div className='flex flex-wrap'>
            {posts.map((post) => (
                <div key={post.$id} className='p-2 w-1/4'>
                    <PostCard {...post} />
                </div>
            ))}
        </div>
        </Container>
    </div>
  )
}

export default AllPosts