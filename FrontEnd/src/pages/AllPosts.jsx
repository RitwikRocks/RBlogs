import React, { useState, useEffect } from 'react'
import configuration from '../appwrite/configuration'
import { PostCard} from '../components'
import Container from '../components/container/ContainerItem'
import { useSelector } from 'react-redux'


const AllPosts = () => {
  const userData = useSelector(state=>state.auth.userData);

  const currentUserId = userData.$id;
  console.log(currentUserId);
  const[posts,setPosts] = useState([]);
  useEffect(()=>{
    configuration.getPosts([])
    .then((posts)=>{
        if(posts){
          let activeposts =[];
          for (let index = 0; index < posts.documents.length; index++) {
            if(posts.documents[index].status==="active" || posts.documents[index].userId==currentUserId){
              activeposts.push(posts.documents[index]);
            }
            
          }
             console.log(activeposts);
             console.log(posts);
            setPosts(activeposts);
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